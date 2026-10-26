import { createFileRoute } from "@tanstack/react-router";

import { Deck } from "@/deck/Deck";
import { slides } from "@/deck/slides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UX Cursor Workshop · Studio Orbis" },
      {
        name: "description",
        content:
          "A 90-minute workshop for designers: use Cursor, teach it your design system, and ship a live site without the slop.",
      },
      { property: "og:title", content: "UX Cursor Workshop · Studio Orbis" },
      {
        property: "og:description",
        content:
          "A 90-minute workshop for designers: use Cursor, teach it your design system, and ship a live site without the slop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Deck slides={slides} />;
}
