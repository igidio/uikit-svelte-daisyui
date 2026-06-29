<script lang="ts">
  import UiCalendar from "$lib/ui/ui-calendar/UiCalendar.svelte";
  import type { UiColors } from "$lib/ui/ui-types";

  const min_date = "2026-06-01";
  const max_date = "2026-06-30";
  let interactive_value = $state("2026-06-15");

  const colors: UiColors[] = [
    "neutral",
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
  ];
</script>

<div class="space-y-10">
  <h1 class="text-2xl font-bold">Calendar Component</h1>

  <section>
    <h2 class="text-xl font-semibold mb-4">Variants</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <span class="label"><span class="label-text">Default</span></span>
        <UiCalendar value="2026-06-15" />
      </div>
      <div>
        <span class="label"><span class="label-text">Disabled</span></span>
        <UiCalendar value="2026-06-15" disabled />
      </div>
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Colors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each colors as color}
        <div>
          <span class="label"
            ><span class="label-text capitalize">Color: {color}</span></span
          >
          <UiCalendar value="2026-06-15" {color} />
        </div>
      {/each}
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Sizes</h2>
    <div class="flex flex-col gap-4">
      <div>
        <span class="label"><span class="label-text">Extra Small</span></span
        ><UiCalendar value="2026-06-15" size="xs" />
      </div>
      <div>
        <span class="label"><span class="label-text">Small</span></span
        ><UiCalendar value="2026-06-15" size="sm" />
      </div>
      <div>
        <span class="label"
          ><span class="label-text">Medium (default)</span></span
        ><UiCalendar value="2026-06-15" size="md" />
      </div>
      <div>
        <span class="label"><span class="label-text">Large</span></span
        ><UiCalendar value="2026-06-15" size="lg" />
      </div>
      <div>
        <span class="label"><span class="label-text">Extra Large</span></span
        ><UiCalendar value="2026-06-15" size="xl" />
      </div>
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">With Min / Max range</h2>
    <div>
      <span class="label"
        ><span class="label-text">Pick a date (Jun 1–30, 2026)</span></span
      >
      <UiCalendar value="2026-06-15" min={min_date} max={max_date} />
    </div>
  </section>

  <hr class="border-base-300" />

  <section>
    <h2 class="text-xl font-semibold mb-4">Interactive</h2>
    <div>
      <span class="label"
        ><span class="label-text">Selected date: {interactive_value}</span
        ></span
      >
      <UiCalendar bind:value={interactive_value} />
    </div>
  </section>
</div>
