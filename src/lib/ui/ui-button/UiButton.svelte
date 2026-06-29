<script lang="ts">
  import type { IconValue } from "$lib/data/icons";
  import UiIcon from "$lib/ui/ui-icon/UiIcon.svelte";
  import {
    button_sizes,
    button_variants,
    button_styles,
    button_shapes,
    type UiButtonSize,
    type UiButtonStyle,
    type UiButtonShape,
  } from "./ui-button-properties";
  import type { UiColors } from "$lib/ui/ui-types";

  let {
    size = "md",
    variant = "neutral",
    type = "button",
    style_type = null,
    disabled = false,
    shape = null,
    icon = null,
    label = null,
    spin = false,
    block = false,
    children,
  }: {
    size?: UiButtonSize;
    variant?: UiColors;
    type?: "button" | "submit" | "reset";
    style_type?: UiButtonStyle | null;
    disabled?: boolean;
    shape?: UiButtonShape | null;
    icon?: IconValue | null;
    label?: string | null;
    spin?: boolean;
    block?: boolean;
    children?: import("svelte").Snippet;
  } = $props();

  let static_classes = $derived(
    (() => {
      const c: string[] = ["btn"];
      c.push(button_sizes[size]);
      if (style_type) c.push(button_styles[style_type]);
      if (shape) c.push(button_shapes[shape]);
      if (block) c.push("btn-block");
      return c.filter(Boolean).join(" ");
    })(),
  );

  let variant_class = $derived(variant ? button_variants[variant] : "");
</script>

<button {disabled} {type} class="{static_classes} {variant_class}">
  {#if children}
    {@render children()}
  {:else if icon || label}
    <div class="flex items-center gap-2">
      {#if icon}
        <UiIcon {icon} class={spin ? "animate-spin" : ""} />
      {/if}
      {#if label}
        <span>{label}</span>
      {/if}
    </div>
  {/if}
</button>
