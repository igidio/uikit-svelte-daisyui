<script lang="ts">
	import { useModal } from '$lib/stores/modal.svelte';
	import UiButton from '$lib/ui/ui-button/UiButton.svelte';
	import type { UiColors } from '$lib/ui/ui-types';
	import type { UiButtonSize, UiButtonStyle, UiButtonShape } from '$lib/ui/ui-button/ui-button-properties';
	import type { IconValue } from '$lib/data/icons';

	export interface ModalFormButton {
		label?: string;
		variant?: UiColors;
		size?: UiButtonSize;
		icon?: IconValue;
		disabled?: boolean;
		spin?: boolean;
		block?: boolean;
		shape?: UiButtonShape | null;
		style_type?: UiButtonStyle | null;
		action?: () => void | Promise<void>;
	}

	let {
		title = '',
		closable = true,
		buttons = [] as ModalFormButton[],
		show_footer = true,
		children,
	}: {
		title?: string;
		closable?: boolean;
		buttons?: ModalFormButton[];
		show_footer?: boolean;
		children?: import('svelte').Snippet;
	} = $props();

	const modal_service = useModal();
	let buttons_disabled = $state(false);

	async function on_button_click(action?: () => void | Promise<void>): Promise<void> {
		if (!action) return;
		buttons_disabled = true;
		try {
			await Promise.resolve(action());
		} finally {
			buttons_disabled = false;
		}
	}
</script>

<div class="flex flex-col h-full w-full">
	<div class="flex items-center justify-between pb-4 md:pb-5 border-b border-base-300 shrink-0">
		{#if title || closable}
			{#if title}
				<h5 class="text-lg font-medium text-base-content">{title}</h5>
			{/if}
			{#if closable}
				<UiButton
					icon="close"
					shape="circle"
					variant="ghost"
					class="ms-auto"
					onclick={() => modal_service.close()}
				/>
			{/if}
		{/if}
	</div>

	<div class="flex-1 overflow-y-auto py-4 md:py-6">
		{@render children?.()}
	</div>

	{#if show_footer}
		<div class="flex items-center justify-end gap-2 pt-4 md:pt-5 border-t border-base-300 shrink-0">
			{#if buttons.length > 0}
				{#each buttons as button}
					<UiButton
						size={button.size ?? 'sm'}
						variant={button.variant ?? 'secondary'}
						label={button.label ?? null}
						icon={button.icon ?? null}
						disabled={buttons_disabled || (button.disabled ?? false)}
						spin={button.spin ?? false}
						block={button.block ?? false}
						shape={button.shape ?? null}
						style_type={button.style_type ?? null}
						onclick={() => on_button_click(button.action)}
					/>
				{/each}
			{/if}
		</div>
	{/if}
</div>
