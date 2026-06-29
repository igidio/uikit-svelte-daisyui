<script lang="ts">
  import { getContext } from "svelte";
  import {
    FIELD_STATE_KEY,
    type FieldState,
  } from "$lib/ui/ui-field/ui-field-injection";
  import type { CheckboxSize, CheckboxOption } from "./ui-checkbox-properties";
  import { checkbox_sizes, checkbox_color_classes } from "./ui-checkbox-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    name = "checkbox",
    color,
    size = "md",
    disabled = false,
    data,
    id: id_prop,
    value = $bindable([]),
  }: {
    name?: string;
    color?: UiColors;
    size?: CheckboxSize;
    disabled?: boolean;
    data: CheckboxOption[];
    id?: string;
    value?: any[];
  } = $props();

  let color_class = $derived(color ? checkbox_color_classes[color] : "");

  let size_class = $derived(checkbox_sizes[size]);
  let checkbox_classes = $derived(
    ["checkbox", color_class, size_class].filter(Boolean).join(" "),
  );

  const field_state = getContext<FieldState | undefined>(FIELD_STATE_KEY);
  let resolved_id = $derived(id_prop ?? field_state?.id);

  function is_checked(val: any): boolean {
    return Array.isArray(value) && value.includes(val);
  }

  function toggle_value(val: any) {
    if (!Array.isArray(value)) value = [];
    if (value.includes(val)) {
      value = value.filter((v: any) => v !== val);
    } else {
      value = [...value, val];
    }
  }
</script>

<div class="flex flex-wrap items-center gap-4">
  {#each data as item, index}
    <label class="flex items-center gap-2 cursor-pointer">
      <input
        id={index === 0
          ? resolved_id
          : resolved_id
            ? `${resolved_id}-${index}`
            : undefined}
        type="checkbox"
        {name}
        class={checkbox_classes}
        checked={is_checked(item.value)}
        {disabled}
        onchange={() => toggle_value(item.value)}
      />
      <span class="label-text">{item.label}</span>
    </label>
  {/each}
</div>
