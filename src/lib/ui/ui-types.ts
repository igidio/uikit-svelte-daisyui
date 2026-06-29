export type UiColors =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost";

export type MessageColors = Exclude<
  UiColors,
  "primary" | "secondary" | "accent" | "neutral" | "ghost"
>;
