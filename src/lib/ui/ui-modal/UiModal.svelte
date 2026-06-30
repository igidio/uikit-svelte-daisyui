<script lang="ts">
	import { useModal } from '$lib/stores/modal.svelte';
	import { ui_modal_sizes } from './ui-modal-properties';

	const modal_service = useModal();

	let modal_el: HTMLDialogElement;

	$effect(() => {
		if (modal_el) {
			modal_service.set_element(modal_el);
		}
	});

	let modal_box_class = $derived(
		['modal-box', ui_modal_sizes[modal_service.size]].filter(Boolean).join(' ')
	);
</script>

<dialog class="modal" bind:this={modal_el}>
	<div class={modal_box_class}>
		{#if modal_service.closable}
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
			</form>
		{/if}
		{#if modal_service.content_snippet}
			{@render modal_service.content_snippet()}
		{/if}
	</div>
	{#if modal_service.backdrop === 'dynamic'}
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	{/if}
</dialog>
