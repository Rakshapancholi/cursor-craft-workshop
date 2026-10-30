import { useEffect, useRef, useState, type ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}

export function Display({
  children,
  size = "xl",
}: {
  children: ReactNode;
  size?: "xl" | "lg" | "md";
}) {
  return <h1 className={`display display-${size}`}>{children}</h1>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="lead">{children}</p>;
}

export function TopicSlide({ children }: { children: ReactNode }) {
  return <div className="topic-slide">{children}</div>;
}

export function Grid({
  cols = 2,
  children,
  gap = "md",
}: {
  cols?: 1 | 2 | 3 | 4;
  children: ReactNode;
  gap?: "sm" | "md" | "lg";
}) {
  return <div className={`grid grid-${cols} gap-${gap}`}>{children}</div>;
}

export function Card({
  kicker,
  title,
  body,
  num,
  tone = "default",
}: {
  kicker?: string;
  title: ReactNode;
  body?: ReactNode;
  num?: string;
  tone?: "default" | "accent" | "warn" | "good";
}) {
  return (
    <article className={`card card-${tone}`}>
      {num && <span className="card-num">{num}</span>}
      {kicker && <p className="card-kicker">{kicker}</p>}
      <h3 className="card-title">{title}</h3>
      {body && <div className="card-body">{body}</div>}
    </article>
  );
}

export function Split({
  left,
  right,
  ratio = "1-1",
}: {
  left: ReactNode;
  right: ReactNode;
  ratio?: "1-1" | "5-7" | "7-5";
}) {
  return (
    <div className={`split split-${ratio}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export function MdTabs({
  tabs,
}: {
  tabs: { label: string; file: string; body: string }[];
}) {
  const [active, setActive] = useState(0);
  const tab = tabs[active] ?? tabs[0]!;

  return (
    <div className="md-tabs">
      <div className="md-tablist" role="tablist" aria-label="Brief files">
        {tabs.map((item, index) => (
          <button
            key={item.file}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={index === active ? "is-on" : undefined}
            onClick={(event) => {
              event.stopPropagation();
              setActive(index);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <CodeBlock key={tab.file} file={tab.file}>
        {tab.body}
      </CodeBlock>
    </div>
  );
}

export function CodeBlock({
  file,
  children,
}: {
  file?: string;
  children: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <figure
      className="code-block"
      onClick={(event) => {
        event.stopPropagation();
        void navigator.clipboard.writeText(children.trim());
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }}
    >
      <figcaption>
        <span>{file ?? "Copy prompt"}</span>
        <em>{copied ? "Copied" : "Click to copy"}</em>
      </figcaption>
      <pre>
        <code>{children}</code>
      </pre>
    </figure>
  );
}

export function Compare({
  badTitle = "Default generation",
  goodTitle = "With your system",
  bad,
  good,
}: {
  badTitle?: string;
  goodTitle?: string;
  bad: ReactNode;
  good: ReactNode;
}) {
  return (
    <div className="compare">
      <article className="compare-col compare-bad">
        <p className="compare-label">{badTitle}</p>
        {bad}
      </article>
      <article className="compare-col compare-good">
        <p className="compare-label">{goodTitle}</p>
        {good}
      </article>
    </div>
  );
}

export function Steps({
  items,
}: {
  items: { title: string; body?: string; time?: string }[];
}) {
  return (
    <ol className="steps">
      {items.map((item, i) => (
        <li key={item.title}>
          <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            {item.body && <p>{item.body}</p>}
            {item.time && <span className="step-time">{item.time}</span>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PillRow({ items }: { items: string[] }) {
  return (
    <ul className="pill-row">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return <aside className="callout">{children}</aside>;
}

export function CheckGrid({ items }: { items: { label: string; hint: string }[] }) {
  return (
    <ul className="check-grid">
      {items.map((item) => (
        <li key={item.label}>
          <span className="check-box" aria-hidden="true" />
          <div>
            <strong>{item.label}</strong>
            <p>{item.hint}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function OrbisLogo({
  className = "orbis-logo",
}: {
  className?: string;
}) {
  return (
    <img
      className={className}
      src="/studio-orbis-logo.png"
      alt="Studio Orbis"
    />
  );
}

export function Portrait() {
  return (
    <figure className="portrait">
      <img src="/vittesh.webp" alt="Vittesh" />
    </figure>
  );
}

export function Socials() {
  return (
    <ul className="socials">
      <li>
        <a
          href="https://vittesh.com"
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
          vittesh.com
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/vitteshsinha/"
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24V8.25zM8.27 8.25h4.33v2.14h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V24h-4.52v-7.75c0-1.85-.03-4.22-2.57-4.22-2.58 0-2.97 2.01-2.97 4.09V24H8.27V8.25z"
            />
          </svg>
          /vitteshsinha
        </a>
      </li>
    </ul>
  );
}

export function PhoneShot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure className="phone-shot">
      <img src={src} alt={alt} />
    </figure>
  );
}

export function Shot({
  src,
  alt,
  caption,
  tall = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  tall?: boolean;
}) {
  return (
    <figure className={tall ? "shot shot-tall" : "shot"}>
      <img src={src} alt={alt} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function Clip({
  src,
  label,
  shape = "square",
  turn,
  align = "center",
}: {
  src: string;
  label: string;
  shape?: "square" | "portrait";
  turn?: 90 | 180 | 270;
  align?: "center" | "end";
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const isImage = /\.(gif|png|webp|jpe?g)(\?|$)/i.test(src);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      el.pause();
      el.currentTime = 0;
      return;
    }
    el.muted = true;
    el.defaultMuted = true;
    const tryPlay = () => {
      if (!el.paused) return;
      void el.play().catch(() => {});
    };
    tryPlay();
    el.addEventListener("canplay", tryPlay);
    el.addEventListener("loadeddata", tryPlay);
    const host = el.closest(".shot-clip");
    host?.addEventListener("animationend", tryPlay);
    const poll = window.setInterval(tryPlay, 400);
    const stop = window.setTimeout(() => window.clearInterval(poll), 4000);
    return () => {
      el.removeEventListener("canplay", tryPlay);
      el.removeEventListener("loadeddata", tryPlay);
      host?.removeEventListener("animationend", tryPlay);
      window.clearInterval(poll);
      window.clearTimeout(stop);
      el.pause();
    };
  }, [src, isImage]);

  return (
    <figure
      className={`shot-clip shot-clip-${shape}${turn ? ` shot-clip-turn-${turn}` : ""}${align === "end" ? " shot-clip-end" : ""}`}
      onClick={(event) => event.stopPropagation()}
    >
      {isImage ? (
        <img src={src} alt="" />
      ) : (
        <video
          ref={ref}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={label}
        />
      )}
    </figure>
  );
}

export function GiantNum({ children }: { children: ReactNode }) {
  return <p className="giant-num">{children}</p>;
}

export function ArrowOrb() {
  return (
    <span className="arrow-orb" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

export function Waveform({ bars = 16 }: { bars?: number }) {
  const heights = [22, 40, 58, 30, 70, 44, 78, 36, 62, 26, 74, 48, 32, 66, 24, 52];
  return (
    <div className="waveform" aria-hidden="true">
      {heights.slice(0, bars).map((height, i) => (
        <span key={i} style={{ height, animationDelay: `${i * 70}ms` }} />
      ))}
    </div>
  );
}

export function CursorPanes() {
  return (
    <div className="cursor-panes" aria-hidden="true">
      <article className="cursor-pane">
        <p>File explorer</p>
        <div className="cursor-pane-window">
          <strong>starter</strong>
          <ul>
            <li>.cursor</li>
            <li className="is-indent">rules</li>
            <li className="is-indent">skills</li>
            <li className="is-on">DESIGN.md</li>
            <li>AGENTS.md</li>
            <li>index.html</li>
          </ul>
        </div>
      </article>
      <article className="cursor-pane">
        <p>Code editor</p>
        <div className="cursor-pane-window">
          <strong>DESIGN.md</strong>
          <pre>
            <code>{`# Visual rules
Colour: ink · paper · accent
Type: Syne, Outfit. Never Inter
Space: 8px grid
Never: glow, glass, fake metrics`}</code>
          </pre>
        </div>
      </article>
      <article className="cursor-pane">
        <p>AI sidebar</p>
        <div className="cursor-pane-window">
          <strong>Chat · Agent</strong>
          <span className="cursor-chat">Build the inbox from DESIGN.md</span>
          <em>Agent writes files. Chat explains.</em>
        </div>
      </article>
    </div>
  );
}

export function DotPair({ active = 0 }: { active?: 0 | 1 }) {
  return (
    <div className="dot-pair" aria-hidden="true">
      <span className={active === 0 ? "is-on" : undefined} />
      <span className={active === 1 ? "is-on" : undefined} />
    </div>
  );
}

export function GfxRow({ children }: { children: ReactNode }) {
  return <div className="gfx-row">{children}</div>;
}

export function GfxYear({
  num,
  word,
}: {
  num: string;
  word: string;
}) {
  return (
    <div className="gfx-year">
      <GiantNum>{num}</GiantNum>
      <ArrowOrb />
      <p className="year-word">{word}</p>
    </div>
  );
}

export function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <p>{url}</p>
      </div>
      <div className="browser-body">{children}</div>
    </div>
  );
}

export function MiniSaas() {
  return (
    <div className="mini-saas">
      <aside>
        <strong>Relay</strong>
        <nav>
          <span className="is-on">Inbox</span>
          <span>Saved</span>
          <span>Archive</span>
          <span>Settings</span>
        </nav>
      </aside>
      <div className="mini-saas-main">
        <header>
          <h4>Inbox</h4>
          <em>Needs review</em>
        </header>
        <ul>
          <li>
            <b>Checkout still asks for a phone number</b>
            <span>Interview · Needs review</span>
          </li>
          <li>
            <b>Export never finishes on large workspaces</b>
            <span>Support · In progress</span>
          </li>
          <li>
            <b>Admins want a guest view that cannot edit</b>
            <span>Sales call · Open</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function JargonBadge() {
  return <span className="jargon-badge">Jargon corner</span>;
}

export function YourTurn() {
  return <span className="your-turn">Your turn</span>;
}

export function Footnote({ children }: { children: ReactNode }) {
  return <p className="footnote">{children}</p>;
}

export function TalkPost({
  platform,
  name,
  handle,
  children,
}: {
  platform: "X" | "LinkedIn";
  name: string;
  handle: string;
  children: ReactNode;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="talk-card">
      <header className="talk-head">
        <span className={`talk-avatar talk-avatar-${platform === "X" ? "x" : "in"}`}>
          {initials}
        </span>
        <div className="talk-who">
          <strong>{name}</strong>
          <span>{handle}</span>
        </div>
        <span className="talk-platform">{platform}</span>
      </header>
      <div className="talk-body">{children}</div>
    </article>
  );
}
