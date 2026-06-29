<script lang="ts">
  import { getContext } from "svelte";
  import {
    FIELD_STATE_KEY,
    type FieldState,
  } from "$lib/ui/ui-field/ui-field-injection";
  import type { ToggleSize } from "./ui-toggle-properties";
  import { toggle_sizes, toggle_color_classes } from "./ui-toggle-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    color,
    size = "md",
    disabled = false,
    id: id_prop,
    checked = $bindable(false),
  }: {
    color?: UiColors;
    size?: ToggleSize;
    disabled?: boolean;
    id?: string;
    checked?: boolean;
  } = $props();

  let toggle_classes = $derived(
    ["toggle", color ? toggle_color_classes[color] : "", toggle_sizes[size]]
      .filter(Boolean)
      .join(" "),
  );

  const field_state = getContext<FieldState | undefined>(FIELD_STATE_KEY);
  let resolved_id = $derived(id_prop ?? field_state?.id);
</script>

<input
  id={resolved_id}
  type="checkbox"
  {disabled}
  class={toggle_classes}
  bind:checked
/>
