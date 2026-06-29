<script lang="ts">
  import UiAccordionItem from "./UiAccordionItem.svelte";
  import type { AccordionItemData } from "./ui-accordion-properties";

  let {
    value = $bindable(""),
    name = "ui-accordion",
    arrow_icon = false,
    join = false,
    items = [],
  }: {
    value?: string;
    name?: string;
    arrow_icon?: boolean;
    join?: boolean;
    items: AccordionItemData[];
  } = $props();

  function select(item_value: string) {
    value = item_value;
  }
</script>

{#if join}
  <div class="join join-vertical bg-base-100 w-full">
    {#each items as item (item.value)}
      <UiAccordionItem
        value={item.value}
        title={item.title}
        {name}
        checked={value === item.value}
        {arrow_icon}
        class="join-item"
        onselect={select}
      >
        {item.content}
      </UiAccordionItem>
    {/each}
  </div>
{:else}
  {#each items as item (item.value)}
    <UiAccordionItem
      value={item.value}
      title={item.title}
      {name}
      checked={value === item.value}
      {arrow_icon}
      class="mb-2"
      onselect={select}
    >
      {item.content}
    </UiAccordionItem>
  {/each}
{/if}
