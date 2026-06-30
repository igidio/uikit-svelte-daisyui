<script lang="ts">
  import { page } from '$app/stores';
  import { use_table_params } from './use-table-params.svelte';
  import UiButton from '$lib/ui/ui-button/UiButton.svelte';

  let {
    limits,
    label = 'Show:',
    use_params = false,
    current = $bindable(5),
  }: {
    limits: number[];
    label?: string;
    use_params?: boolean;
    current?: number;
  } = $props();

  const params = use_table_params(() => use_params);

  let initialized = $state(false);

  $effect(() => {
    if (use_params && !initialized) {
      const limit = $page.url.searchParams.get('limit');
      if (limit) current = Number(limit);
      initialized = true;
    }
  });

  $effect(() => {
    if (use_params && initialized) {
      const limit = $page.url.searchParams.get('limit');
      if (limit && Number(limit) !== current) {
        current = Number(limit);
      }
    }
  });

  function on_limit_changed(limit: number): void {
    params.set_param('limit', limit);
    current = limit;
  }
</script>

<div class="flex flex-row gap-2 items-center">
  <span class="text-base-content/70 text-sm">{label}</span>
  {#each limits as limit}
    <UiButton
      variant={String(current) === String(limit) ? 'primary' : 'ghost'}
      label={String(limit)}
      size="sm"
      onclick={() => on_limit_changed(limit)}
    />
  {/each}
</div>
