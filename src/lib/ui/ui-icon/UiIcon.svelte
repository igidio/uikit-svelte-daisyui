<script lang="ts">
  import { available_icons, type IconValue } from "$lib/data/icons";
  import { icon_sizes, type UiIconSize } from "./ui-icon-properties";

  let {
    icon,
    size = "md",
  }: {
    icon: IconValue;
    size?: UiIconSize;
  } = $props();

  let icon_class = $derived(available_icons[icon]);
  let size_class = $derived(icon_sizes[size]);
</script>

<span class="flex {icon_class} {size_class}"></span>
