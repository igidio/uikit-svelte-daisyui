export type UiBadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const badge_sizes: Record<UiBadgeSize, string> = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: '',
  lg: 'badge-lg',
  xl: 'badge-xl',
};

export type UiBadgeColor = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost';

export const badge_variants: Record<UiBadgeColor, string> = {
  neutral: 'badge-neutral',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
  ghost: 'badge-ghost',
};

export type UiBadgeType = 'soft' | 'outline' | 'dash';

export const badge_types: Record<UiBadgeType, string> = {
  soft: 'badge-soft',
  outline: 'badge-outline',
  dash: 'badge-dash',
};
