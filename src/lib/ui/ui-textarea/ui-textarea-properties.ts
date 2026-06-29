import type { UiColors } from "$lib/ui/ui-types";

export type TextareaSize = "xs" | "sm" | "md" | "lg" | "xl";

export const textarea_sizes: Record<TextareaSize, string> = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: "textarea-md",
  lg: "textarea-lg",
  xl: "textarea-xl",
};

export const textarea_color_classes: Record<UiColors, string> = {
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  neutral: "textarea-neutral",
  info: "textarea-info",
  success: "textarea-success",
  warning: "textarea-warning",
  error: "textarea-error",
  ghost: "textarea-ghost",
};
