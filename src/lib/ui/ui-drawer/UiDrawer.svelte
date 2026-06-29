<script lang="ts">
  import { useDrawer } from '$lib/stores/drawer.svelte';

  let {
    children,
  }: {
    children?: import('svelte').Snippet;
  } = $props();

  const drawer_service = useDrawer();

  let drawer_class = $derived(
    drawer_service.side === 'end' ? 'drawer drawer-end' : 'drawer'
  );

  function on_toggle_change(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      drawer_service.open();
    } else {
      drawer_service.close();
    }
  }
</script>

<div class={drawer_class}>
  <input
    type="checkbox"
    id="ui-drawer-toggle"
    class="drawer-toggle"
    checked={drawer_service.is_open}
    onchange={on_toggle_change}
  />
  <div class="drawer-content">
    {@render children?.()}
  </div>
  <div class="drawer-side">
    <label for="ui-drawer-toggle" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="bg-base-200 w-60 md:w-80 h-screen overflow-y-auto">
      {#each [drawer_service.content_component] as Component}
        {#if Component}
          <Component />
        {/if}
      {/each}
    </div>
  </div>
</div>
