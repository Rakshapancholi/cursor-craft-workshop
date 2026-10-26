const NEST = new Set([
  "grid",
  "split",
  "compare",
  "steps",
  "agenda",
  "loop",
  "file-stack",
  "check-grid",
  "pill-row",
  "takeaways",
  "resources",
  "plain-list",
  "plain-steps",
  "section-slide",
  "topic-slide",
  "demo-slide",
  "qa-slide",
  "about-head",
  "socials",
  "phone-row",
  "phone-split",
  "phone-choice",
  "rule-list",
  "shot-row",
  "gfx-row",
  "gfx-year",
  "gfx-head",
  "cursor-captions",
  "md-tabs",
  "build-path",
  "build-path-row",
]);

const UNIT = new Set([
  "card",
  "code-block",
  "browser",
  "callout",
  "compare-col",
  "orbis-logo",
  "talk-card",
  "portrait",
  "phone-shot",
  "shot",
  "shot-clip",
  "giant-num",
  "arrow-orb",
  "waveform",
  "cursor-panes",
  "dot-pair",
  "year-word",
  "exercise-time",
  "md-tablist",
]);

function isNest(el: Element) {
  return [...el.classList].some(
    (name) =>
      NEST.has(name) ||
      name.startsWith("grid-") ||
      name.startsWith("split-") ||
      name.startsWith("gap-"),
  );
}

function isUnit(el: Element) {
  return [...el.classList].some((name) => UNIT.has(name));
}

export function applySlideFades(root: HTMLElement) {
  let index = 0;

  const walk = (el: Element) => {
    for (const kid of el.children) {
      if (isNest(kid)) {
        walk(kid);
        continue;
      }
      if (
        !isUnit(kid) &&
        kid.tagName === "DIV" &&
        kid.children.length > 0
      ) {
        walk(kid);
        continue;
      }
      const node = kid as HTMLElement;
      node.style.setProperty("--d", String(Math.min(index, 14)));
      node.classList.add("is-fade");
      index += 1;
    }
  };

  walk(root);
}
