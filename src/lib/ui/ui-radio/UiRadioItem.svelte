<script lang="ts">
  import { getContext } from "svelte";

  let {
    value: item_value,
    children,
  }: {
    value: string | number;
    children?: import("svelte").Snippet;
  } = $props();

  const ctx = getContext("radio-group") as {
    name: string;
    radio_classes: string;
    disabled: boolean;
    selected_value: string | number;
    onselect: (v: string | number) => void;
  };
</script>

<label class="flex items-center gap-2 cursor-pointer">
  <input
    type="radio"
    name={ctx.name}
    class={ctx.radio_classes}
    value={item_value}
    checked={ctx.selected_value === item_value}
    disabled={ctx.disabled}
    onchange={() => ctx.onselect(item_value)}
  />
  <span class="label-text">{@render children?.()}</span>
</label>
