import type { MessageColors } from '$lib/ui/ui-types';

export const toast_color_classes: Record<MessageColors, string> = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
};

export type ToastPosition =
  | 'toast-start'
  | 'toast-center'
  | 'toast-end'
  | 'toast-top'
  | 'toast-bottom'
  | 'toast-start toast-top'
  | 'toast-start toast-bottom'
  | 'toast-center toast-top'
  | 'toast-center toast-bottom'
  | 'toast-end toast-top'
  | 'toast-end toast-bottom';
