<script lang="ts">
  import { getContext } from "svelte";
  import {
    FIELD_STATE_KEY,
    type FieldState,
  } from "$lib/ui/ui-field/ui-field-injection";
  import type { TextareaSize } from "./ui-textarea-properties";
  import {
    textarea_sizes,
    textarea_color_classes,
  } from "./ui-textarea-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    placeholder = "",
    color,
    size = "md",
    rows = 4,
    resizable = true,
    readonly = false,
    disabled = false,
    id: id_prop,
    value = $bindable(""),
    ...rest
  }: {
    placeholder?: string;
    color?: UiColors;
    size?: TextareaSize;
    rows?: number;
    resizable?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    id?: string;
    value?: string;
  } & Record<string, unknown> = $props();

  let textarea_classes = $derived(
    [
      "textarea",
      "w-full",
      color ? textarea_color_classes[color] : "",
      textarea_sizes[size],
      !resizable ? "resize-none" : "",
    ]
      .filter(Boolean)
      .join(" "),
  );

  const field_state = getContext<FieldState | undefined>(FIELD_STATE_KEY);
  let resolved_id = $derived(id_prop ?? field_state?.id);
</script>

<textarea
  id={resolved_id}
  {rows}
  {placeholder}
  {readonly}
  {disabled}
  class={textarea_classes}
  bind:value
  {...rest}
></textarea>
