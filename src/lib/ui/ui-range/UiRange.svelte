<script lang="ts">
  import { getContext } from "svelte";
  import {
    FIELD_STATE_KEY,
    type FieldState,
  } from "$lib/ui/ui-field/ui-field-injection";
  import type { RangeSize } from "./ui-range-properties";
  import { range_sizes, range_color_classes } from "./ui-range-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    min = 0,
    max = 100,
    step = 1,
    color,
    size = "md",
    disabled = false,
    id: id_prop,
    value = $bindable(0),
  }: {
    min?: number;
    max?: number;
    step?: number;
    color?: UiColors;
    size?: RangeSize;
    disabled?: boolean;
    id?: string;
    value?: number;
  } = $props();

  let range_classes = $derived(
    [
      "range",
      color ? range_color_classes[color] : "",
      range_sizes[size],
      "w-full",
    ]
      .filter(Boolean)
      .join(" "),
  );

  const field_state = getContext<FieldState | undefined>(FIELD_STATE_KEY);
  let resolved_id = $derived(id_prop ?? field_state?.id);
</script>

<input
  id={resolved_id}
  type="range"
  {min}
  {max}
  {step}
  {disabled}
  class={range_classes}
  bind:value
/>
