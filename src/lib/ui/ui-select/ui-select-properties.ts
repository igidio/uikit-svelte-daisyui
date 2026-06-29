import type { UiColors } from "$lib/ui/ui-types";

export type SelectSize = "xs" | "sm" | "md" | "lg" | "xl";

export const select_sizes: Record<SelectSize, string> = {
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg",
  xl: "select-xl",
};

export interface SelectOption {
  label: string;
  value: any;
}

export const select_color_classes: Record<UiColors, string> = {
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  neutral: "select-neutral",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
  ghost: "select-ghost",
};
