<script lang="ts">
  import { getContext } from "svelte";
  import {
    FIELD_STATE_KEY,
    type FieldState,
  } from "$lib/ui/ui-field/ui-field-injection";
  import type { SelectSize, SelectOption } from "./ui-select-properties";
  import { select_sizes, select_color_classes } from "./ui-select-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    options,
    placeholder = "",
    color,
    size = "md",
    disabled = false,
    id: id_prop,
    value = $bindable(""),
    ...rest
  }: {
    options: SelectOption[];
    placeholder?: string;
    color?: UiColors;
    size?: SelectSize;
    disabled?: boolean;
    id?: string;
    value?: string | number;
  } & Record<string, unknown> = $props();

  let select_classes = $derived(
    [
      "select",
      "w-full",
      color ? select_color_classes[color] : "",
      select_sizes[size],
    ]
      .filter(Boolean)
      .join(" "),
  );

  const field_state = getContext<FieldState | undefined>(FIELD_STATE_KEY);
  let resolved_id = $derived(id_prop ?? field_state?.id);
</script>

<select id={resolved_id} {disabled} class={select_classes} bind:value {...rest}>
  <option value="" disabled selected>{placeholder}</option>
  {#each options as opt (opt.value)}
    <option value={opt.value}>{opt.label}</option>
  {/each}
</select>
