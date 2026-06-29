<script lang="ts">
  import { getContext } from "svelte";
  import {
    FIELD_STATE_KEY,
    type FieldState,
  } from "$lib/ui/ui-field/ui-field-injection";
  import type { InputfileSize } from "./ui-inputfile-properties";
  import {
    inputfile_sizes,
    inputfile_color_classes,
  } from "./ui-inputfile-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    accept = "",
    multiple = false,
    color,
    size = "md",
    disabled = false,
    id: id_prop,
    value = $bindable(null),
  }: {
    accept?: string;
    multiple?: boolean;
    color?: UiColors;
    size?: InputfileSize;
    disabled?: boolean;
    id?: string;
    value?: string | null;
  } = $props();

  let inputfile_classes = $derived(
    [
      "file-input",
      "w-full",
      color ? inputfile_color_classes[color] : "",
      inputfile_sizes[size],
    ]
      .filter(Boolean)
      .join(" "),
  );

  const field_state = getContext<FieldState | undefined>(FIELD_STATE_KEY);
  let resolved_id = $derived(id_prop ?? field_state?.id);

  function on_file_change(e: Event) {
    const input = e.target as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0 && files[0]) {
      value = files[0].name;
    } else {
      value = null;
    }
  }
</script>

<input
  id={resolved_id}
  type="file"
  {accept}
  {multiple}
  {disabled}
  class={inputfile_classes}
  onchange={on_file_change}
/>
