import type { UiColors } from '$lib/ui/ui-types';

export type UiLoadingType = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

export const loading_types: Record<UiLoadingType, string> = {
  spinner: 'loading-spinner',
  dots: 'loading-dots',
  ring: 'loading-ring',
  ball: 'loading-ball',
  bars: 'loading-bars',
  infinity: 'loading-infinity',
};

export type UiLoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const loading_sizes: Record<UiLoadingSize, string> = {
  xs: 'loading-xs',
  sm: 'loading-sm',
  md: '',
  lg: 'loading-lg',
  xl: 'loading-xl',
};

export const loading_color_classes: Record<UiColors, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  neutral: 'text-neutral',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  ghost: 'text-ghost',
};
