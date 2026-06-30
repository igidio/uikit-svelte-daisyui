import type { Snippet } from 'svelte';
import type { UiModalBackdrop, UiModalSize } from '$lib/ui/ui-modal/ui-modal-properties';

let is_open = $state(false);
let size = $state<UiModalSize>('sm');
let backdrop = $state<UiModalBackdrop>('dynamic');
let closable = $state(true);
let content_snippet = $state<Snippet | null>(null);
let modal_el: HTMLDialogElement | null = null;
let on_show_callback: (() => void) | null = null;
let on_hide_callback: (() => void) | null = null;
let on_toggle_callback: (() => void) | null = null;

export function useModal() {
	function set_element(el: HTMLDialogElement): void {
		modal_el = el;
		el.addEventListener('close', () => {
			is_open = false;
			content_snippet = null;
			on_hide_callback?.();
			on_toggle_callback?.();
		});
	}

	function configure(config: {
		backdrop?: UiModalBackdrop;
		closable?: boolean;
		size?: UiModalSize;
		on_show?: () => void;
		on_hide?: () => void;
		on_toggle?: () => void;
	}): void {
		if (config.backdrop !== undefined) backdrop = config.backdrop;
		if (config.closable !== undefined) closable = config.closable;
		if (config.size !== undefined) size = config.size;
		if (config.on_show !== undefined) on_show_callback = config.on_show;
		if (config.on_hide !== undefined) on_hide_callback = config.on_hide;
		if (config.on_toggle !== undefined) on_toggle_callback = config.on_toggle;
	}

	function open(): void {
		if (!modal_el) return;
		modal_el.showModal();
		is_open = true;
		on_show_callback?.();
		on_toggle_callback?.();
	}

	function close(): void {
		if (!modal_el) return;
		modal_el.close();
	}

	function toggle(): void {
		if (is_open) {
			close();
		} else {
			open();
		}
	}

	function open_with_content(config: {
		snippet: Snippet;
		size?: UiModalSize;
		backdrop?: UiModalBackdrop;
		closable?: boolean;
	}): void {
		configure({
			size: config.size,
			backdrop: config.backdrop,
			closable: config.closable,
		});
		content_snippet = config.snippet;
		open();
	}

	return {
		get is_open() { return is_open; },
		get size() { return size; },
		get backdrop() { return backdrop; },
		get closable() { return closable; },
		get content_snippet() { return content_snippet; },
		set_element,
		configure,
		open,
		close,
		toggle,
		open_with_content,
	};
}
