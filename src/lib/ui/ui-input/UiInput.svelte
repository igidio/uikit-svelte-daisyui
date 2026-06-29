<script lang="ts">
  import { getContext } from "svelte";
  import {
    FIELD_STATE_KEY,
    type FieldState,
  } from "$lib/ui/ui-field/ui-field-injection";
  import type { InputSize, InputType } from "./ui-input-properties";
  import { input_sizes, input_color_classes } from "./ui-input-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    placeholder = "",
    type = "text",
    color,
    size = "md",
    readonly = false,
    disabled = false,
    id: id_prop,
    value = $bindable(""),
    ...rest
  }: {
    placeholder?: string;
    type?: InputType;
    color?: UiColors;
    size?: InputSize;
    readonly?: boolean;
    disabled?: boolean;
    id?: string;
    value?: string | number;
  } & Record<string, unknown> = $props();

  let input_classes = $derived(
    [
      "input",
      "w-full",
      color ? input_color_classes[color] : "",
      input_sizes[size],
    ]
      .filter(Boolean)
      .join(" "),
  );

  const field_state = getContext<FieldState | undefined>(FIELD_STATE_KEY);
  let resolved_id = $derived(id_prop ?? field_state?.id);
</script>

<input
  id={resolved_id}
  {type}
  {placeholder}
  {readonly}
  {disabled}
  class={input_classes}
  bind:value
  {...rest}
/>
