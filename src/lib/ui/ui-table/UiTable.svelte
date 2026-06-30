<script lang="ts" generics="T">
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
  import UiButton from '$lib/ui/ui-button/UiButton.svelte';
  import { table_sizes, type UiTableSizes, type TableField, type PaginationResponse } from './ui-table-properties';

  let {
    fields,
    content = undefined,
    size = 'md',
    zebra = false,
    pin_rows = false,
    pin_cols = false,
    bordered = false,
    expandable = undefined,
    on_sort,
    pre_table,
    post_table,
  }: {
    fields: TableField<T>[];
    content?: PaginationResponse<T> | undefined;
    size?: UiTableSizes;
    zebra?: boolean;
    pin_rows?: boolean;
    pin_cols?: boolean;
    bordered?: boolean;
    expandable?: TableField<T> | undefined;
    on_sort?: (event: { sort_by: string | null; order: 'asc' | 'desc' | null }) => void;
    pre_table?: import('svelte').Snippet;
    post_table?: import('svelte').Snippet;
  } = $props();

  let sort_column = $state<string | null>(null);
  let sort_order = $state<'asc' | 'desc' | null>(null);
  let expanded_rows = $state<Set<number>>(new Set());

  let sortable_columns = $derived(
    fields
      .filter((f) => f.options?.sortable && f.name)
      .map((f) => f.name as string),
  );

  let table_classes = $derived(
    (() => {
      const classes = ['table', table_sizes[size]];
      if (zebra) classes.push('table-zebra');
      if (pin_rows) classes.push('table-pin-rows');
      if (pin_cols) classes.push('table-pin-cols');
      return classes.filter(Boolean).join(' ');
    })(),
  );

  let wrapper_classes = $derived(
    bordered
      ? 'overflow-x-auto rounded-box border border-base-content/5 bg-base-100'
      : 'overflow-x-auto',
  );

  function show_loading(): boolean {
    return !content;
  }

  function show_empty(): boolean {
    return !!content && (!content.data || content.data.length === 0);
  }

  function showing_from(): number {
    if (!content) return 0;
    return (content.offset || 0) + 1;
  }

  function showing_to(): number {
    if (!content) return 0;
    return (content.offset || 0) + (content.data?.length || 0);
  }

  function sort_by(name: string): void {
    if (!name || !sortable_columns.includes(name)) return;

    let order: 'asc' | 'desc' | null = null;
    if (sort_column !== name) {
      order = 'asc';
    } else {
      order = sort_order === 'asc' ? 'desc' : sort_order === 'desc' ? null : 'asc';
    }

    sort_column = order ? name : null;
    sort_order = order;
    on_sort?.({ sort_by: order ? name : null, order });
  }

  function is_sortable(name: string): boolean {
    return !!name && sortable_columns.includes(name);
  }

  function field_sort_header_classes(field_name: string): string {
    const parts: string[] = [];
    if (is_sortable(field_name)) {
      parts.push('cursor-pointer', 'hover:text-primary');
    }
    if (sort_column === field_name && sort_order) {
      parts.push('text-primary');
    }
    return parts.join(' ');
  }

  function is_expanded(index: number): boolean {
    return expanded_rows.has(index);
  }

  function toggle_expanded(index: number): void {
    if (expanded_rows.has(index)) {
      expanded_rows.delete(index);
    } else {
      expanded_rows.add(index);
    }
    expanded_rows = expanded_rows;
  }

  function row_classes(row_idx: number): string {
    return is_expanded(row_idx) ? 'bg-base-200' : '';
  }

  function cell_classes(field: TableField<T>): string {
    const parts: string[] = [];
    if (field.options?.take_width) parts.push('w-full');
    if (field.onClick) parts.push('cursor-pointer');
    return parts.join(' ');
  }
</script>

<div class="flex flex-col gap-4">
  {#if pre_table}
    {@render pre_table()}
  {/if}

  {#if content}
    <span class="text-base-content/70 text-end text-sm">
      Showing <b>{showing_from()}</b>-<b>{showing_to()}</b> of <b>{content.count}</b> results
    </span>
  {/if}

  <div class={wrapper_classes}>
    <table class={table_classes}>
      <thead>
        <tr>
          {#if expandable}
            <th scope="col" class="w-10"></th>
          {/if}
          {#each fields as field}
            <th
              scope="col"
              class="px-6 py-3 font-medium text-base-content"
            >
              <button
                type="button"
                class={field_sort_header_classes(field.name ?? '')}
                onclick={() => sort_by(field.name ?? '')}
              >
                {field.label}
                {#if sort_column === field.name && sort_order}
                  <UiIcon
                    icon={sort_order === 'asc' ? 'chevron_up' : 'chevron_down'}
                    class="w-4 h-4 inline-block"
                  />
                {/if}
              </button>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        <!-- Loading -->
        {#if show_loading()}
          <tr>
            <td
              class="w-full p-12 text-center"
              colspan={fields.length + (expandable ? 1 : 0)}
            >
              <div class="flex flex-col items-center gap-3 py-6">
                <UiIcon icon="loading" class="text-4xl text-base-content/60 animate-spin" />
                <span class="text-base-content text-base font-medium">Loading data...</span>
                <span class="text-base-content/70 text-sm">Please wait while data is being loaded.</span>
              </div>
            </td>
          </tr>
        <!-- Empty -->
        {:else if show_empty()}
          <tr>
            <td
              class="w-full p-12 text-center"
              colspan={fields.length + (expandable ? 1 : 0)}
            >
              <div class="flex flex-col items-center gap-3 py-6">
                <UiIcon icon="table" class="text-3xl text-base-content/60" />
                <span class="text-base-content text-base font-medium">No records found</span>
                <span class="text-base-content/70 text-sm">No data matching the current criteria was found.</span>
              </div>
            </td>
          </tr>
        {:else}
          <!-- Data rows -->
          {#each content!.data as row, row_idx}
            <tr class="border-b border-base-200 {row_classes(row_idx)}">
              {#if expandable}
                <td class="px-6 py-4 whitespace-nowrap w-10">
                  <UiButton
                    icon={is_expanded(row_idx) ? 'chevron_up' : 'chevron_down'}
                    size="xs"
                    shape="circle"
                    variant="ghost"
                    onclick={() => toggle_expanded(row_idx)}
                  />
                </td>
              {/if}
              {#each fields as field}
                <td
                  class="px-6 py-4 whitespace-nowrap {cell_classes(field)}"
                  onclick={() => field.onClick?.(row)}
                >
                  {#if field.component}
                    {@const Comp = field.component}
                    <Comp {...(field.getInputs?.(row) ?? {})} />
                  {:else if field.isHtml}
                    {@html field.getValue?.(row) ?? ''}
                  {:else}
                    {field.getValue?.(row)}
                  {/if}
                </td>
              {/each}
            </tr>
            <!-- Expandable row -->
            {#if expandable && is_expanded(row_idx)}
              <tr class="bg-base-200">
                <td></td>
                <td colspan={fields.length} class="p-4">
                  <div class="flex flex-col gap-2 text-sm text-base-content/70">
                    <span class="text-base-content font-bold">{expandable.label}</span>
                    {#if expandable.isHtml}
                      {@html expandable.getValue?.(row) ?? ''}
                    {:else}
                      {expandable.getValue?.(row)}
                    {/if}
                  </div>
                </td>
              </tr>
            {/if}
          {/each}
        {/if}
      </tbody>
    </table>
  </div>

  {#if post_table}
    {@render post_table()}
  {/if}
</div>
