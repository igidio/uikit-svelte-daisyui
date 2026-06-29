import type { UiColors } from "$lib/ui/ui-types";

export type RangeSize = "xs" | "sm" | "md" | "lg" | "xl";

export const range_sizes: Record<RangeSize, string> = {
  xs: "range-xs",
  sm: "range-sm",
  md: "range-md",
  lg: "range-lg",
  xl: "range-xl",
};

export const range_color_classes: Record<UiColors, string> = {
  primary: "range-primary",
  secondary: "range-secondary",
  accent: "range-accent",
  neutral: "range-neutral",
  info: "range-info",
  success: "range-success",
  warning: "range-warning",
  error: "range-error",
  ghost: "range-ghost",
};
