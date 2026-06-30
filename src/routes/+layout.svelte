<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { use_theme } from '$lib/stores/theme.svelte';
	import UiDrawer from '$lib/ui/ui-drawer/UiDrawer.svelte';
	import UiModal from '$lib/ui/ui-modal/UiModal.svelte';
	import UiSidebar from '$lib/ui/ui-sidebar/UiSidebar.svelte';
	import UiThemeController from '$lib/ui/ui-themecontroller/UiThemeController.svelte';
	import UiToast from '$lib/ui/ui-toast/UiToast.svelte';

	let { children: page_content } = $props();

	const theme = use_theme();
	theme.initialize();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col">
	<header
		class="flex items-center justify-between px-4 py-3 sticky top-0 z-10 left-0 navbar bg-base-300"
	>
		<h1 class="text-xl font-semibold">Ui Kit Svelte DaisyUI</h1>
		<UiThemeController type="toggle" />
	</header>

	<UiDrawer>
		{#snippet children()}
			<div class="flex bg-neutral-primary w-full">
				<UiSidebar class="sticky w-32 md:w-48 top-16 h-[calc(100vh-65px)]" />
				<main
					class="p-6 max-w-325 mx-auto h-full w-full gap-4 flex flex-col overflow-x-hidden"
				>
					{@render page_content()}
				</main>
			</div>
		{/snippet}
	</UiDrawer>
</div>

<UiModal />
<UiToast />
