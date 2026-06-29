<script lang="ts">
  import type { UiRatingSize, UiRatingColor } from "./ui-rating-properties";
  import { rating_sizes, rating_color_classes } from "./ui-rating-properties";

  let {
    _name = "rating",
    readonly = false,
    color = "warning",
    multiple_colors = [],
    size = "md",
    half = false,
    quantity = 5,
    icon = "mask-star",
    value = $bindable(3),
  }: {
    _name?: string;
    readonly?: boolean;
    color?: UiRatingColor;
    multiple_colors?: UiRatingColor[];
    size?: UiRatingSize;
    half?: boolean;
    quantity?: number;
    icon?: string;
    value?: number;
  } = $props();

  let slots = $derived(
    Array.from({ length: half ? quantity * 2 : quantity }, (_, i) => i),
  );

  let size_class = $derived(rating_sizes[size]);

  function star_index(idx: number): number {
    return half ? Math.floor(idx / 2) : idx;
  }

  function get_color_class(index: number): string {
    if (multiple_colors.length > 0) {
      const color_key =
        multiple_colors[Math.min(index, multiple_colors.length - 1)] ??
        "warning";
      return rating_color_classes[color_key] ?? "bg-warning";
    }
    return rating_color_classes[color] ?? "bg-warning";
  }

  function mask_class(): string[] {
    return ["mask", icon];
  }

  function select_rating(val: number) {
    if (readonly) return;
    value = val;
  }

  function clear_rating() {
    if (readonly) return;
    value = 0;
  }

  function is_checked(idx: number): boolean {
    return half ? (idx + 1) / 2 === value : idx + 1 === value;
  }
</script>

<div class="rating {size_class}" class:rating-half={half}>
  {#if half}
    <input
      type="radio"
      name={_name}
      class="rating-hidden"
      checked={value === 0}
      onclick={clear_rating}
    />
  {/if}
  {#each slots as _, idx}
    <input
      type="radio"
      name={_name}
      class={[
        ...mask_class(),
        get_color_class(star_index(idx)),
        half && idx % 2 === 1 ? "mask-half-2" : half ? "mask-half-1" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={readonly}
      checked={is_checked(idx)}
      onchange={() => select_rating(half ? (idx + 1) / 2 : idx + 1)}
    />
  {/each}
</div>
