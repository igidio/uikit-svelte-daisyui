import type { UiColors } from '$lib/ui/ui-types';

export type UiStatusSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const status_sizes: Record<UiStatusSizes, string> = {
  xs: 'status-xs',
  sm: 'status-sm',
  md: '',
  lg: 'status-lg',
  xl: 'status-xl',
};

export const status_colors: Record<UiColors, string> = {
  primary: 'status-primary',
  secondary: 'status-secondary',
  accent: 'status-accent',
  neutral: 'status-neutral',
  info: 'status-info',
  success: 'status-success',
  warning: 'status-warning',
  error: 'status-error',
  ghost: 'status-ghost',
};
