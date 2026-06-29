export type UiRatingSize = "xs" | "sm" | "md" | "lg" | "xl";

export const rating_sizes: Record<UiRatingSize, string> = {
  xs: "rating-xs",
  sm: "rating-sm",
  md: "",
  lg: "rating-lg",
  xl: "rating-xl",
};

export type UiRatingColor =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost";

export const rating_color_classes: Record<UiRatingColor, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  neutral: "bg-neutral",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  ghost: "bg-base-content/40",
};
