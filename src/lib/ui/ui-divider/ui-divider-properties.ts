import type { UiColors } from '$lib/ui/ui-types';

export type UiDividerOrientation = 'horizontal' | 'vertical';
export type UiDividerPosition = 'start' | 'center' | 'end';
export type UiDividerColors = Exclude<UiColors, 'ghost'>;

export const divider_colors: Record<UiDividerColors, string> = {
  primary: 'divider-primary',
  secondary: 'divider-secondary',
  accent: 'divider-accent',
  neutral: 'divider-neutral',
  info: 'divider-info',
  success: 'divider-success',
  warning: 'divider-warning',
  error: 'divider-error',
};

export const divider_positions: Record<UiDividerPosition, string> = {
  start: 'divider-start',
  center: '',
  end: 'divider-end',
};
