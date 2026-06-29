<script lang="ts">
  import UiRating from "$lib/ui/ui-rating/UiRating.svelte";
  import type { UiRatingColor } from "$lib/ui/ui-rating/ui-rating-properties";

  const colors: UiRatingColor[] = [
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
  ];

  const multi_colors_1: UiRatingColor[] = [
    "error",
    "warning",
    "info",
    "success",
  ];
  const multi_colors_2: UiRatingColor[] = ["error", "warning", "success"];

  let interactive_value = $state(3);
  let half_value = $state(2.5);
</script>

<div class="space-y-10">
  <h1 class="text-2xl font-bold">Rating Component</h1>

  <section>
    <h2 class="text-xl font-semibold mb-4">Default</h2>
    <UiRating _name="demo-rating" bind:value={interactive_value} />
    <p class="text-sm mt-1">Value: <strong>{interactive_value}</strong></p>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-4">Readonly</h2>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-4">
        <span class="text-sm w-20">1 star</span><UiRating
          _name="readonly-1"
          value={1}
          readonly
        />
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm w-20">3 stars</span><UiRating
          _name="readonly-3"
          value={3}
          readonly
        />
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm w-20">5 stars</span><UiRating
          _name="readonly-5"
          value={5}
          readonly
        />
      </div>
    </div>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-4">Colors</h2>
    <div class="flex flex-col gap-3">
      {#each colors as c}
        <div class="flex items-center gap-4">
          <span class="text-sm w-24 capitalize">{c}</span>
          <UiRating _name="color-{c}" value={4} color={c} readonly />
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-4">Multiple Colors</h2>
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-4">
        <span class="text-sm w-24">4 colors</span>
        <UiRating
          _name="multi-1"
          value={4}
          multiple_colors={multi_colors_1}
          readonly
        />
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm w-24">3 colors</span>
        <UiRating
          _name="multi-2"
          value={5}
          multiple_colors={multi_colors_2}
          readonly
        />
      </div>
    </div>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-4">Sizes</h2>
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-4">
        <span class="text-sm w-10">xs</span><UiRating
          _name="size-xs"
          value={3}
          size="xs"
          readonly
        />
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm w-10">sm</span><UiRating
          _name="size-sm"
          value={3}
          size="sm"
          readonly
        />
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm w-10">md</span><UiRating
          _name="size-md"
          value={3}
          size="md"
          readonly
        />
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm w-10">lg</span><UiRating
          _name="size-lg"
          value={3}
          size="lg"
          readonly
        />
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm w-10">xl</span><UiRating
          _name="size-xl"
          value={3}
          size="xl"
          readonly
        />
      </div>
    </div>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-4">Half Stars</h2>
    <UiRating _name="half-demo" bind:value={half_value} half />
    <p class="text-sm mt-1">Value: <strong>{half_value}</strong></p>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-4">Custom Quantity (10)</h2>
    <UiRating
      _name="custom-qty"
      value={7}
      quantity={10}
      color="accent"
      readonly
    />
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-4">Heart Shape</h2>
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-4">
        <span class="text-sm w-20">Default</span>
        <UiRating
          _name="heart-1"
          value={4}
          icon="mask-heart"
          color="error"
          readonly
        />
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm w-20">Multi color</span>
        <UiRating
          _name="heart-multi"
          value={4}
          icon="mask-heart"
          multiple_colors={["error", "warning", "success", "info"]}
          readonly
        />
      </div>
    </div>
  </section>
</div>
