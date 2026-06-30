import { get } from 'svelte/store';
import { page } from '$app/stores';
import { goto } from '$app/navigation';

export function use_table_params(use_params: () => boolean) {
  function set_param(key: string, value: unknown): void {
    if (!use_params()) return;
    const url = new URL(get(page).url);
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    } else {
      url.searchParams.delete(key);
    }
    goto(url, { replaceState: true, keepFocus: true, noScroll: true });
  }

  function remove_param(key: string): void {
    if (!use_params()) return;
    const url = new URL(get(page).url);
    url.searchParams.delete(key);
    goto(url, { replaceState: true, keepFocus: true, noScroll: true });
  }

  function reset_page(): void {
    remove_param('page');
  }

  return { set_param, remove_param, reset_page };
}
