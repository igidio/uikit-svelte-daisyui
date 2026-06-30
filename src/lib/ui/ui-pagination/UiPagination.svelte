<script lang="ts">
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
  import { pagination_sizes, type UiPaginationSize, type UiPaginationPageItem } from './ui-pagination-properties';

  let {
    total_items,
    items_per_page,
    max_pages_to_show = 5,
    size = 'md',
    small_buttons = false,
    nav_buttons = true,
    page = $bindable(1),
  }: {
    total_items: number;
    items_per_page: number;
    max_pages_to_show?: number;
    size?: UiPaginationSize;
    small_buttons?: boolean;
    nav_buttons?: boolean;
    page?: number;
  } = $props();

  let total_pages = $derived(Math.max(1, Math.ceil(total_items / items_per_page)));

  let pages = $derived(
    (() => {
      const total = total_pages;
      const current = page;
      const max_to_show = max_pages_to_show;

      if (total <= max_to_show) {
        return Array.from({ length: total }, (_, i) => ({
          page: i + 1,
          label: String(i + 1),
          is_ellipsis: false,
          is_current: i + 1 === current,
        }));
      }

      const half = Math.floor(max_to_show / 2);
      let start_p = current - half;
      let end_p = current + half;

      if (start_p < 1) {
        start_p = 1;
        end_p = max_to_show;
      }
      if (end_p > total) {
        end_p = total;
        start_p = total - max_to_show + 1;
      }

      const result: UiPaginationPageItem[] = [];

      if (start_p > 1) {
        result.push({ page: 1, label: '1', is_ellipsis: false, is_current: false });
        if (start_p > 2) {
          result.push({ page: 0, label: '...', is_ellipsis: true, is_current: false });
        }
      }

      for (let i = start_p; i <= end_p; i++) {
        result.push({ page: i, label: String(i), is_ellipsis: false, is_current: i === current });
      }

      if (end_p < total) {
        if (end_p < total - 1) {
          result.push({ page: 0, label: '...', is_ellipsis: true, is_current: false });
        }
        result.push({ page: total, label: String(total), is_ellipsis: false, is_current: false });
      }

      return result;
    })(),
  );

  function go_to_page(p: number): void {
    if (p >= 1 && p <= total_pages) {
      page = p;
    }
  }

  let size_class = $derived(pagination_sizes[size]);

  function is_disabled_nav(type: 'prev' | 'next'): boolean {
    if (type === 'prev') return page <= 1;
    return page >= total_pages;
  }
</script>

<div class="join flex">
  {#if nav_buttons}
    <button
      class={['join-item', 'btn', size_class, small_buttons ? 'btn-square' : ''].filter(Boolean).join(' ')}
      disabled={is_disabled_nav('prev')}
      onclick={() => go_to_page(page - 1)}
    >
      <UiIcon icon="chevron_left" size="sm" />
    </button>
  {/if}
  {#each pages as item}
    {#if !item.is_ellipsis}
      <button
        class={['join-item', 'btn', size_class, item.is_current ? 'btn-active' : '', small_buttons ? 'btn-square' : ''].filter(Boolean).join(' ')}
        onclick={() => go_to_page(item.page)}
      >
        {item.label}
      </button>
    {:else}
      <button
        class={['join-item', 'btn', 'btn-disabled', size_class].filter(Boolean).join(' ')}
        disabled
      >
        ...
      </button>
    {/if}
  {/each}
  {#if nav_buttons}
    <button
      class={['join-item', 'btn', size_class, small_buttons ? 'btn-square' : ''].filter(Boolean).join(' ')}
      disabled={is_disabled_nav('next')}
      onclick={() => go_to_page(page + 1)}
    >
      <UiIcon icon="chevron_right" size="sm" />
    </button>
  {/if}
</div>
