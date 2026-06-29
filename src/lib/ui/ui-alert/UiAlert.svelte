<script lang="ts">
	import type { IconValue } from '$lib/data/icons';
	import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
	import { alert_types, alert_variants, type UiAlertColor, type UiAlertType } from './ui-alert-properties';

	let {
		variant,
		type = 'default',
		icon = null,
		label = null,
		children,
	}: {
		variant?: UiAlertColor;
		type?: UiAlertType;
		icon?: IconValue | null;
		label?: string | null;
		children?: import('svelte').Snippet;
	} = $props();

	let alert_classes = $derived(
		['alert', 'flex', variant ? alert_variants[variant] : '', type !== 'default' ? alert_types[type] : '']
			.filter(Boolean)
			.join(' ')
	);
</script>

<div role="alert" class={alert_classes}>
	{#if children}
		{@render children()}
	{:else if icon || label}
		<div class="flex items-center gap-2">
			{#if icon}
				<UiIcon {icon} />
			{/if}
			{#if label}
				<span>{label}</span>
			{/if}
		</div>
	{/if}
</div>
