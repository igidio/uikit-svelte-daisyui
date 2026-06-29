<script lang="ts">
	import { use_theme } from '$lib/stores/theme.svelte';
	import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
	import type { UiThemeControllerType } from './ui-themecontroller-properties';

	let {
		type = 'toggle',
	}: {
		type?: UiThemeControllerType;
	} = $props();

	const theme = use_theme();

	let checked = $derived(theme.mode === 'dark');

	function handle_change() {
		theme.toggle();
	}
</script>

{#if type === 'toggle'}
	<input
		type="checkbox"
		class="toggle theme-controller"
		{checked}
		onchange={handle_change}
	/>
{:else if type === 'checkbox'}
	<input
		type="checkbox"
		class="checkbox theme-controller"
		{checked}
		onchange={handle_change}
	/>
{:else if type === 'swap'}
	<label class="swap swap-rotate">
		<input
			type="checkbox"
			class="theme-controller"
			{checked}
			onchange={handle_change}
		/>
		<div class="swap-off">
			<UiIcon icon="sun" />
		</div>
		<div class="swap-on">
			<UiIcon icon="moon" />
		</div>
	</label>
{:else if type === 'icon_inside'}
	<label class="toggle text-base-content text-xs">
		<input
			type="checkbox"
			class="theme-controller"
			{checked}
			onchange={handle_change}
		/>
		<UiIcon icon="sun" />
		<UiIcon icon="moon" />
	</label>
{/if}
