export type UiModalBackdrop = 'static' | 'dynamic';
export type UiModalSize = 'sm' | 'md' | 'lg' | 'xl';

export const ui_modal_sizes: Record<UiModalSize, string> = {
	sm: 'max-w-md',
	md: 'max-w-lg',
	lg: 'max-w-4xl',
	xl: 'max-w-7xl',
};
