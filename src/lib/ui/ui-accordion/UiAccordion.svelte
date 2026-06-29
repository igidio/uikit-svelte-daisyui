<script lang="ts">
  import { setContext } from 'svelte';

  let {
    value = $bindable(''),
    name = 'ui-accordion',
    arrow_icon = false,
    join = false,
    children,
  }: {
    value?: string;
    name?: string;
    arrow_icon?: boolean;
    join?: boolean;
    children?: import('svelte').Snippet;
  } = $props();

  function select(item_value: string) {
    value = item_value;
  }

  setContext('accordion', {
    get name() { return name; },
    get arrow_icon() { return arrow_icon; },
    get join() { return join; },
    get selected_value() { return value; },
    select,
  });
</script>

{#if join}
  <div class="join join-vertical bg-base-100 w-full">
    {@render children?.()}
  </div>
{:else}
  {@render children?.()}
{/if}
