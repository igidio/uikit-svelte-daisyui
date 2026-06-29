<script lang="ts">
  let {
    value,
    title,
    name = "ui-accordion",
    checked = false,
    arrow_icon = false,
    class: className = "",
    children,
    onselect,
  }: {
    value: string;
    title: string;
    name?: string;
    checked?: boolean;
    arrow_icon?: boolean;
    class?: string;
    children?: import("svelte").Snippet;
    onselect?: (value: string) => void;
  } = $props();

  let collapse_class = $derived(
    [
      "collapse",
      "bg-base-100",
      "border",
      "border-base-300",
      arrow_icon ? "collapse-arrow" : "",
      className,
    ]
      .filter(Boolean)
      .join(" "),
  );
</script>

<div class={collapse_class}>
  <input
    type="radio"
    {name}
    {value}
    {checked}
    onchange={() => onselect?.(value)}
  />
  <div class="collapse-title font-semibold">{title}</div>
  <div class="collapse-content text-sm">
    {@render children?.()}
  </div>
</div>
