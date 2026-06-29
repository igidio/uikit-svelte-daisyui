import type { UiColors } from "$lib/ui/ui-types";

export type ToggleSize = "xs" | "sm" | "md" | "lg" | "xl";

export const toggle_sizes: Record<ToggleSize, string> = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: "toggle-md",
  lg: "toggle-lg",
  xl: "toggle-xl",
};

export const toggle_color_classes: Record<UiColors, string> = {
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  neutral: "toggle-neutral",
  info: "toggle-info",
  success: "toggle-success",
  warning: "toggle-warning",
  error: "toggle-error",
  ghost: "toggle-ghost",
};
