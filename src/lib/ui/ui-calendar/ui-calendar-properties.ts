export type CalendarSize = "xs" | "sm" | "md" | "lg" | "xl";

export const calendar_sizes: Record<CalendarSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

export const calendar_color_classes: Record<string, string> = {
  neutral: "input-neutral",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
  ghost: "input-ghost",
};
