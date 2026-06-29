import type { UiColors } from '$lib/ui/ui-types';

export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const input_sizes: Record<InputSize, string> = {
	xs: 'input-xs',
	sm: 'input-sm',
	md: 'input-md',
	lg: 'input-lg',
	xl: 'input-xl',
};

export type InputType = 'text' | 'password' | 'email' | 'number' | 'url' | 'tel' | 'search' | 'date' | 'datetime-local' | 'month' | 'time' | 'week';

export const input_color_classes: Record<UiColors, string> = {
	primary: 'input-primary',
	secondary: 'input-secondary',
	accent: 'input-accent',
	neutral: 'input-neutral',
	info: 'input-info',
	success: 'input-success',
	warning: 'input-warning',
	error: 'input-error',
	ghost: 'input-ghost',
};
