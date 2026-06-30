<script lang="ts">
  import { page } from '$app/stores';
  import { use_table_params } from './use-table-params.svelte';
  import UiPagination from '$lib/ui/ui-pagination/UiPagination.svelte';

  let {
    total_items,
    items_per_page = 10,
    max_pages_to_show = 5,
    use_params = false,
    current_page = $bindable(1),
    class: className = '',
  }: {
    total_items: number;
    items_per_page?: number;
    max_pages_to_show?: number;
    use_params?: boolean;
    current_page?: number;
    class?: string;
  } = $props();

  const params = use_table_params(() => use_params);

  let initialized = $state(false);

  $effect(() => {
    if (use_params && !initialized) {
      const page_val = $page.url.searchParams.get('page');
      if (page_val) current_page = Number(page_val);
      initialized = true;
    }
  });

  // Sync page changes to URL
  let previous_page = $state(0);
  $effect(() => {
    if (!use_params || !initialized) return;
    const p = current_page;
    if (p === previous_page) return;
    previous_page = p;

    if (p > 1) {
      params.set_param('page', p);
    } else {
      params.remove_param('page');
    }
  });
</script>

<div class={className}>
  <UiPagination
    {total_items}
    {items_per_page}
    {max_pages_to_show}
    bind:page={current_page}
  />
</div>
