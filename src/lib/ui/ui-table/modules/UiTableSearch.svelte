<script lang="ts">
  import { page } from '$app/stores';
  import { use_table_params } from './use-table-params.svelte';
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';

  let {
    value = $bindable(''),
    placeholder = 'Search',
    use_params = false,
  }: {
    value?: string;
    placeholder?: string;
    use_params?: boolean;
  } = $props();

  const params = use_table_params(() => use_params);

  let initialized = $state(false);

  $effect(() => {
    if (use_params && !initialized) {
      const search = $page.url.searchParams.get('search');
      if (search) value = search;
      initialized = true;
    }
  });

  let search_timer: ReturnType<typeof setTimeout> | null = null;

  function on_input(val: string): void {
    if (search_timer) clearTimeout(search_timer);
    value = val;

    if (use_params) {
      if (val === '') {
        params.remove_param('search');
        return;
      }
      search_timer = setTimeout(() => {
        params.set_param('search', val);
      }, 300);
    }
  }
</script>

<div class="relative w-full md:max-w-70">
  <div class="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
    <UiIcon icon="search" class="text-base-content/60 z-1" />
  </div>
  <input
    type="text"
    class="input input-bordered w-full ps-9 pe-3 py-2 text-base-content text-sm"
    {placeholder}
    value={value}
    oninput={(e) => on_input(e.currentTarget.value)}
  />
</div>
