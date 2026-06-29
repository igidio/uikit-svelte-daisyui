<script lang="ts">
  import { getContext } from "svelte";
  import {
    FIELD_STATE_KEY,
    type FieldState,
  } from "$lib/ui/ui-field/ui-field-injection";
  import type { CalendarSize } from "./ui-calendar-properties";
  import { calendar_sizes, calendar_color_classes } from "./ui-calendar-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    placeholder = "",
    color,
    size = "md",
    min = "",
    max = "",
    disabled = false,
    id: id_prop,
    value = $bindable(""),
    ...rest
  }: {
    placeholder?: string;
    color?: UiColors;
    size?: CalendarSize;
    min?: string;
    max?: string;
    disabled?: boolean;
    id?: string;
    value?: string;
  } & Record<string, unknown> = $props();

  let color_class = $derived(color ? calendar_color_classes[color] : "");

  let size_class = $derived(calendar_sizes[size]);
  let input_classes = $derived(
    ["input", "w-full", color_class, size_class].filter(Boolean).join(" "),
  );

  const field_state = getContext<FieldState | undefined>(FIELD_STATE_KEY);
  let resolved_id = $derived(id_prop ?? field_state?.id);
</script>

<input
  id={resolved_id}
  type="date"
  {placeholder}
  {min}
  {max}
  {disabled}
  class={input_classes}
  bind:value
  {...rest}
/>
