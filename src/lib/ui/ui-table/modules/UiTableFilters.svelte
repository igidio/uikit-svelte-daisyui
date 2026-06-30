<script lang="ts">
  import { page } from '$app/stores';
  import { use_table_params } from './use-table-params.svelte';
  import UiBadge from '$lib/ui/ui-badge/UiBadge.svelte';
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';

  export interface FilterBy {
    name: string;
    label: string;
    options: { label: string; value: unknown }[];
    only_cancellable?: boolean;
    show_value_on_badge?: boolean;
  }

  let {
    filters,
    label = 'Filter by:',
    use_params = false,
    active = $bindable<Record<string, unknown>>({}),
  }: {
    filters: FilterBy[];
    label?: string;
    use_params?: boolean;
    active?: Record<string, unknown>;
  } = $props();

  const params = use_table_params(() => use_params);

  let initialized = $state(false);

  $effect(() => {
    if (use_params && !initialized) {
      const active_filters: Record<string, unknown> = {};
      for (const filter of filters) {
        const val = $page.url.searchParams.get(filter.name);
        if (val !== null) {
          active_filters[filter.name] = val;
        }
      }
      if (Object.keys(active_filters).length > 0) {
        active = active_filters;
      }
      initialized = true;
    }
  });

  function is_active(filter_name: string): boolean {
    return filter_name in active;
  }

  function get_badge_label(filter: FilterBy): string {
    const val = active[filter.name];
    if (filter.show_value_on_badge && val !== undefined) {
      const option = filter.options.find((o) => o.value === val);
      return `${filter.label}: ${option?.label ?? val}`;
    }
    return filter.label;
  }

  function select_filter(filter_name: string, value: unknown): void {
    params.set_param(filter_name, value);
    params.reset_page();
    active = { ...active, [filter_name]: value };
  }

  function clear_filter(filter_name: string): void {
    params.remove_param(filter_name);
    params.reset_page();
    const next = { ...active };
    delete next[filter_name];
    active = next;
  }
</script>

<div class="flex flex-wrap gap-2 items-center w-full">
  <span class="text-base-content/70 text-sm">{label}</span>
  {#each filters as filter (filter.name)}
    {#if is_active(filter.name)}
      <div class="flex items-center gap-0">
        <UiBadge
          label={get_badge_label(filter)}
          variant="primary"
          size="sm"
          on_dismiss={() => clear_filter(filter.name)}
        />
      </div>
    {:else}
      <details class="dropdown">
        <summary class="btn btn-ghost btn-sm">
          {filter.label}
          <UiIcon icon="chevron_down" class="h-4 w-4 ml-1" />
        </summary>
        <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {#each filter.options as option}
            <li>
              <button type="button" onclick={() => select_filter(filter.name, option.value)}>
                {option.label}
              </button>
            </li>
          {/each}
        </ul>
      </details>
    {/if}
  {/each}
</div>
