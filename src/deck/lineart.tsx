import type { ReactElement } from "react";

type Variant = "orbit" | "venn" | "rings" | "capsule" | "planet" | "pair";

const shapes: Record<Variant, ReactElement> = {
  orbit: (
    <>
      <circle cx="300" cy="300" r="220" />
      <circle cx="300" cy="300" r="120" />
      <circle cx="455" cy="145" r="22" />
      <circle cx="300" cy="300" r="280" strokeDasharray="4 10" />
    </>
  ),
  venn: (
    <>
      <circle cx="210" cy="300" r="130" />
      <circle cx="300" cy="300" r="130" />
      <circle cx="390" cy="300" r="130" />
    </>
  ),
  rings: (
    <>
      <circle cx="300" cy="300" r="240" />
      <circle cx="300" cy="350" r="190" />
      <circle cx="300" cy="400" r="140" />
      <circle cx="300" cy="450" r="90" />
      <circle cx="300" cy="500" r="40" />
    </>
  ),
  capsule: (
    <>
      <rect x="60" y="200" width="480" height="200" rx="100" />
      <circle cx="160" cy="300" r="100" />
      <circle cx="260" cy="300" r="100" />
    </>
  ),
  planet: (
    <>
      <circle cx="300" cy="300" r="150" />
      <ellipse cx="300" cy="300" rx="270" ry="70" />
      <circle cx="300" cy="300" r="260" strokeDasharray="4 10" />
    </>
  ),
  pair: (
    <>
      <circle cx="190" cy="300" r="140" />
      <circle cx="410" cy="300" r="140" />
      <circle cx="410" cy="300" r="70" />
      <line x1="120" y1="300" x2="260" y2="300" />
    </>
  ),
};

export function LineArt({ variant }: { variant: Variant }) {
  return (
    <svg
      className={`line-art line-art-${variant}`}
      viewBox="0 0 600 600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {shapes[variant]}
    </svg>
  );
}
