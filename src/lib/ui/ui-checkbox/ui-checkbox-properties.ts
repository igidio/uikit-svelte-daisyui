export type CheckboxSize = "xs" | "sm" | "md" | "lg" | "xl";

export const checkbox_sizes: Record<CheckboxSize, string> = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: "checkbox-md",
  lg: "checkbox-lg",
  xl: "checkbox-xl",
};

export const checkbox_color_classes: Record<string, string> = {
  neutral: "checkbox-neutral",
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  info: "checkbox-info",
  success: "checkbox-success",
  warning: "checkbox-warning",
  error: "checkbox-error",
  ghost: "checkbox-ghost",
};

export interface CheckboxOption {
  label: string;
  value: any;
}
