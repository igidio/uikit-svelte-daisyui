export type UiAlertType = 'default' | 'soft' | 'outline' | 'dash';

export const alert_types: Record<UiAlertType, string> = {
	default: '',
	soft: 'alert-soft',
	outline: 'alert-outline',
	dash: 'alert-dash',
};

export type UiAlertColor = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost';

export const alert_variants: Record<UiAlertColor, string> = {
	neutral: 'alert-neutral',
	primary: 'alert-primary',
	secondary: 'alert-secondary',
	accent: 'alert-accent',
	info: 'alert-info',
	success: 'alert-success',
	warning: 'alert-warning',
	error: 'alert-error',
	ghost: 'alert-ghost',
};
