import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import type { Slide } from "./types";
import { applySlideFades } from "./fade";
import { OrbisLogo } from "./layouts";

const STAGE_W = 1920;
const STAGE_H = 1080;

type FsDoc = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
};

type FsEl = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

function fsElement() {
  const doc = document as FsDoc;
  return document.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

function FullscreenIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className="chrome-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {expanded ? (
        <>
          <path d="M9 3v6H3" />
          <path d="M15 3v6h6" />
          <path d="M9 21v-6H3" />
          <path d="M15 21v-6h6" />
        </>
      ) : (
        <>
          <path d="M9 3H4v5" />
          <path d="M15 3h5v5" />
          <path d="M9 21H4v-5" />
          <path d="M15 21h5v-5" />
        </>
      )}
    </svg>
  );
}

async function enterFullscreen() {
  const el = document.documentElement as FsEl;
  if (el.requestFullscreen) {
    await el.requestFullscreen();
    return;
  }
  await el.webkitRequestFullscreen?.();
}

async function exitFullscreen() {
  const doc = document as FsDoc;
  if (document.exitFullscreen) {
    await document.exitFullscreen();
    return;
  }
  await doc.webkitExitFullscreen?.();
}

function parseHash() {
  const match = window.location.hash.match(/slide=(\d+)/i);
  if (!match) return 0;
  return Math.max(0, Number(match[1]) - 1);
}

function topicTone(section: string) {
  if (section.startsWith("1.")) return "pink";
  if (section.startsWith("2.")) return "blue";
  if (section.startsWith("3.")) return "orange";
  if (section.startsWith("4.")) return "pink";
  if (section === "Wrap-up" || section === "Q&A") return "pink";
  return "orange";
}

export function Deck({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(() =>
    Math.min(parseHash(), Math.max(0, slides.length - 1)),
  );
  const [scale, setScale] = useState(1);
  const [help, setHelp] = useState(false);
  const [overview, setOverview] = useState(false);
  const [notes, setNotes] = useState(false);
  const [fullscreen, setFullscreen] = useState(() => Boolean(fsElement()));

  const slide = slides[index] ?? slides[0]!;
  const total = slides.length;

  const go = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(next, 0), total - 1);
      setIndex(clamped);
      setOverview(false);
    },
    [total],
  );

  useEffect(() => {
    const fit = () => {
      setScale(Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    window.location.hash = `slide=${index + 1}`;
    document.title = `${slide.section} · UX Cursor Workshop`;
  }, [index, slide.section]);

  useLayoutEffect(() => {
    const root = document.querySelector(".slide-body");
    if (root instanceof HTMLElement) applySlideFades(root);
  }, [index, slide.id]);

  const toggleFullscreen = useCallback(() => {
    if (fsElement()) void exitFullscreen();
    else void enterFullscreen();
  }, []);

  useEffect(() => {
    const onFs = () => setFullscreen(Boolean(fsElement()));
    document.addEventListener("fullscreenchange", onFs);
    document.addEventListener("webkitfullscreenchange", onFs);
    return () => {
      document.removeEventListener("fullscreenchange", onFs);
      document.removeEventListener("webkitfullscreenchange", onFs);
    };
  }, []);

  useEffect(() => {
    const onHash = () => {
      const next = Math.min(parseHash(), total - 1);
      setIndex(next);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [total]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;

      if (event.key === "?" || (event.key === "/" && event.shiftKey)) {
        event.preventDefault();
        setHelp((v) => !v);
        return;
      }
      if (event.key === "Escape") {
        setHelp(false);
        setOverview(false);
        setNotes(false);
        return;
      }
      if (event.key === "f" || event.key === "F") {
        event.preventDefault();
        toggleFullscreen();
        return;
      }
      if (event.key === "o" || event.key === "O") {
        event.preventDefault();
        setOverview((v) => !v);
        return;
      }
      if (event.key === "n" || event.key === "N") {
        event.preventDefault();
        setNotes((v) => !v);
        return;
      }
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(event.key)) {
        event.preventDefault();
        go(index + 1);
      }
      if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) {
        event.preventDefault();
        go(index - 1);
      }
      if (event.key === "Home") {
        event.preventDefault();
        go(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        go(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total, toggleFullscreen]);

  const sections = useMemo(() => {
    const seen = new Map<string, number>();
    slides.forEach((item, i) => {
      if (!seen.has(item.section)) seen.set(item.section, i);
    });
    return [...seen.entries()];
  }, [slides]);

  return (
    <div className="deck-shell">
      <div
        className="stage"
        data-hi={topicTone(slide.section)}
        style={{
          width: STAGE_W,
          height: STAGE_H,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
        onClick={(event) => {
          if (overview || help) return;
          if (window.getSelection()?.toString()) return;
          const rect = event.currentTarget.getBoundingClientRect();
          const x = event.clientX - rect.left;
          if (x > rect.width * 0.72) go(index + 1);
          if (x < rect.width * 0.18) go(index - 1);
        }}
      >
        <div className="progress" style={{ width: `${((index + 1) / total) * 100}%` }} />
        <header className="chrome-top">
          <div className="brand">
            <OrbisLogo />
            <em>UX Cursor Workshop</em>
          </div>
          <div className="chrome-meta">
            <span>{slide.section}</span>
            <div className="chrome-controls">
              <button
                type="button"
                className="chrome-action"
                aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleFullscreen();
                }}
              >
                <FullscreenIcon expanded={fullscreen} />
              </button>
              <span>
                {index + 1} / {total}
              </span>
            </div>
          </div>
        </header>

        <main className="slide-body" key={slide.id}>
          {slide.render()}
        </main>
      </div>

      {notes && slide.notes && (
        <aside className="notes-panel" role="note">
          <p className="notes-kicker">Speaker notes</p>
          <p>{slide.notes}</p>
        </aside>
      )}

      {help && (
        <div className="overlay" onClick={() => setHelp(false)}>
          <div className="overlay-card" onClick={(e) => e.stopPropagation()}>
            <h2>Presenting</h2>
            <ul>
              <li>
                <kbd>→</kbd> <kbd>Space</kbd> Next slide
              </li>
              <li>
                <kbd>←</kbd> Previous slide
              </li>
              <li>
                <kbd>F</kbd> Fullscreen
              </li>
              <li>
                <kbd>O</kbd> Overview
              </li>
              <li>
                <kbd>N</kbd> Speaker notes
              </li>
              <li>
                <kbd>?</kbd> This panel
              </li>
            </ul>
            <p className="overlay-hint">Click the right side of a slide to advance.</p>
          </div>
        </div>
      )}

      {overview && (
        <div className="overlay overview">
          <div className="overview-grid">
            {slides.map((item, i) => (
              <button
                key={item.id}
                className={i === index ? "is-current" : undefined}
                onClick={() => go(i)}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{item.section}</strong>
                <em>{item.id.replace(/-/g, " ")}</em>
              </button>
            ))}
          </div>
          <nav className="overview-nav">
            {sections.map(([name, i]) => (
              <button key={name} onClick={() => go(i)}>
                {name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
