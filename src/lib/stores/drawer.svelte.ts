import type { UiDrawerSide } from '$lib/ui/ui-drawer/ui-drawer-properties';

let is_open = $state(false);
let side = $state<UiDrawerSide>('start');
let content_component: any = $state(null);
let on_show_callback: (() => void) | null = null;
let on_hide_callback: (() => void) | null = null;
let on_toggle_callback: (() => void) | null = null;

export function useDrawer() {
	function set_content(component: any): void {
		content_component = component;
	}

	function configure(config: {
		side?: UiDrawerSide;
		on_show?: () => void;
		on_hide?: () => void;
		on_toggle?: () => void;
	}): void {
		if (config.side !== undefined) side = config.side;
		if (config.on_show !== undefined) on_show_callback = config.on_show;
		if (config.on_hide !== undefined) on_hide_callback = config.on_hide;
		if (config.on_toggle !== undefined) on_toggle_callback = config.on_toggle;
	}

	function open(): void {
		is_open = true;
		on_show_callback?.();
		on_toggle_callback?.();
	}

	function close(): void {
		is_open = false;
		content_component = null;
		on_hide_callback?.();
		on_toggle_callback?.();
	}

	function toggle(): void {
		if (is_open) {
			close();
		} else {
			open();
		}
	}

	function open_with_content(config: { component: any; side?: UiDrawerSide }): void {
		if (config.side !== undefined) side = config.side;
		set_content(config.component);
		open();
	}

	return {
		get is_open() { return is_open; },
		get side() { return side; },
		get content_component() { return content_component; },
		set_content,
		configure,
		open,
		close,
		toggle,
		open_with_content,
	};
}
