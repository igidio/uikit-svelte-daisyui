import type { UiColors } from '$lib/ui/ui-types';

export type UiTooltipPositions = 'top' | 'bottom' | 'left' | 'right';

export const tooltip_positions: Record<UiTooltipPositions, string> = {
  top: '',
  bottom: 'tooltip-bottom',
  left: 'tooltip-left',
  right: 'tooltip-right',
};

export const tooltip_colors: Record<UiColors, string> = {
  primary: 'tooltip-primary',
  secondary: 'tooltip-secondary',
  accent: 'tooltip-accent',
  neutral: 'tooltip-neutral',
  info: 'tooltip-info',
  success: 'tooltip-success',
  warning: 'tooltip-warning',
  error: 'tooltip-error',
  ghost: 'tooltip-ghost',
};
