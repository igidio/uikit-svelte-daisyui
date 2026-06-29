import type { UiColors } from "$lib/ui/ui-types";

export type InputfileSize = "xs" | "sm" | "md" | "lg" | "xl";

export const inputfile_sizes: Record<InputfileSize, string> = {
  xs: "file-input-xs",
  sm: "file-input-sm",
  md: "file-input-md",
  lg: "file-input-lg",
  xl: "file-input-xl",
};

export const inputfile_color_classes: Record<UiColors, string> = {
  primary: "file-input-primary",
  secondary: "file-input-secondary",
  accent: "file-input-accent",
  neutral: "file-input-neutral",
  info: "file-input-info",
  success: "file-input-success",
  warning: "file-input-warning",
  error: "file-input-error",
  ghost: "file-input-ghost",
};
