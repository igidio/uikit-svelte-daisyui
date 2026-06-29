<script lang="ts">
  import { available_icons, type IconValue } from "$lib/data/icons";
  import { icon_sizes, type UiIconSize } from "./ui-icon-properties";

  let {
    icon,
    size = "md",
    class: className = "",
    ...rest
  }: {
    icon: IconValue;
    size?: UiIconSize;
    class?: string;
  } & Record<string, unknown> = $props();

  let icon_class = $derived(available_icons[icon]);
  let size_class = $derived(icon_sizes[size]);

  let merged_class = $derived(
    ["flex", icon_class, size_class, className].filter(Boolean).join(" "),
  );
</script>

<span class={merged_class} {...rest}></span>
