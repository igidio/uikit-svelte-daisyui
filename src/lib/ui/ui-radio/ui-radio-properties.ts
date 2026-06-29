import type { UiColors } from "$lib/ui/ui-types";

export type RadioSize = "xs" | "sm" | "md" | "lg" | "xl";

export const radio_sizes: Record<RadioSize, string> = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: "radio-md",
  lg: "radio-lg",
  xl: "radio-xl",
};

export const radio_color_classes: Record<UiColors, string> = {
  primary: "radio-primary",
  secondary: "radio-secondary",
  accent: "radio-accent",
  neutral: "radio-neutral",
  info: "radio-info",
  success: "radio-success",
  warning: "radio-warning",
  error: "radio-error",
  ghost: "radio-ghost",
};
