import type { MessageColors } from '$lib/ui/ui-types';

export interface UiToastItem {
  id: number;
  message: string;
  type: MessageColors;
  duration: number;
  position: string;
}

export interface ToastOptions {
  message: string;
  type?: MessageColors;
  duration?: number;
  position?: string;
}

let toasts: UiToastItem[] = $state([]);
let next_id = 0;

export function useToast() {
  function show(options: ToastOptions): void {
    const id = next_id++;
    const { message, type = 'info', duration = 3000, position = 'toast-end toast-bottom' } = options;
    toasts = [...toasts, { id, message, type, duration, position }];
    if (duration > 0) {
      setTimeout(() => remove(id), duration);
    }
  }

  function remove(id: number): void {
    toasts = toasts.filter((item) => item.id !== id);
  }

  return {
    get toasts() { return toasts; },
    show,
    remove,
  };
}
