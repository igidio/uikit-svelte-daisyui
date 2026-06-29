import type { UiColors } from '$lib/ui/ui-types';

export type UiButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const button_sizes: Record<UiButtonSize, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
  xl: 'btn-xl',
};

export type UiButtonColor = UiColors;

export const button_variants: Record<UiButtonColor, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  neutral: 'btn-neutral',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
  ghost: 'btn-ghost',
};

export type UiButtonStyle = 'soft' | 'outline' | 'dash';

export const button_styles: Record<UiButtonStyle, string> = {
  soft: 'btn-soft',
  outline: 'btn-outline',
  dash: 'btn-dash',
};

export type UiButtonShape = 'square' | 'circle';

export const button_shapes: Record<UiButtonShape, string> = {
  square: 'btn-square',
  circle: 'btn-circle',
};
