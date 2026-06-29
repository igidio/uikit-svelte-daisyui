<script lang="ts">
  import { setContext, getContext } from "svelte";
  import {
    FIELD_STATE_KEY,
    type FieldState,
  } from "$lib/ui/ui-field/ui-field-injection";
  import type { RadioSize } from "./ui-radio-properties";
  import { radio_sizes, radio_color_classes } from "./ui-radio-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    name = "radio",
    color,
    size = "md",
    disabled = false,
    id: id_prop,
    value = $bindable(""),
    children,
  }: {
    name?: string;
    color?: UiColors;
    size?: RadioSize;
    disabled?: boolean;
    id?: string;
    value?: string | number;
    children?: import("svelte").Snippet;
  } = $props();

  let radio_classes = $derived(
    ["radio", color ? radio_color_classes[color] : "", radio_sizes[size]].join(
      " ",
    ),
  );

  const field_state = getContext<FieldState | undefined>(FIELD_STATE_KEY);
  let resolved_id = $derived(id_prop ?? field_state?.id);

  setContext("radio-group", {
    get name() {
      return name;
    },
    get radio_classes() {
      return radio_classes;
    },
    get disabled() {
      return disabled;
    },
    get resolved_id() {
      return resolved_id;
    },
    get selected_value() {
      return value;
    },
    onselect(v: string | number) {
      value = v;
    },
  });
</script>

<div id={resolved_id} class="flex flex-wrap items-center gap-4">
  {@render children?.()}
</div>
