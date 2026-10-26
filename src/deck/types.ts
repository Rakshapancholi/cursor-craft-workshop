import type { ReactNode } from "react";

export type Slide = {
  id: string;
  section: string;
  time?: string;
  notes?: string;
  render: () => ReactNode;
};
