<script lang="ts">
  import UiInputfile from "$lib/ui/ui-inputfile/UiInputfile.svelte";
  import type { InputfileSize } from "$lib/ui/ui-inputfile/ui-inputfile-properties";

  const colors = [
    "neutral",
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
    "ghost",
  ] as const;
  const sizes: InputfileSize[] = ["xs", "sm", "md", "lg", "xl"];
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">File Input</h2>
    <p class="text-base-content/70 mb-6">
      The <code>ui-inputfile</code> component is a file selection field with DaisyUI
      styles.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiInputfile />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Sizes</h2>
    <p class="text-base-content/70 mb-6">
      Sizes available: <code>xs</code>, <code>sm</code>, <code>md</code>,
      <code>lg</code>
      and <code>xl</code>.
    </p>
    <div class="flex flex-col gap-4 max-w-sm">
      {#each sizes as s}
        <div class="flex flex-col gap-1">
          <span class="text-xs text-base-content/60">Size: {s}</span>
          <UiInputfile size={s} />
        </div>
      {/each}
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Colors</h2>
    <p class="text-base-content/70 mb-6">
      Use the <code>color</code> prop to switch between the available colors.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
      {#each colors as c}
        <div class="flex flex-col gap-1">
          <span class="text-xs text-base-content/60">Color: {c}</span>
          <UiInputfile color={c} />
        </div>
      {/each}
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Filter by file type</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>accept</code> to restrict the allowed file types.
    </p>
    <div class="flex flex-col gap-4 max-w-sm">
      <div class="flex flex-col gap-1">
        <span class="text-xs text-base-content/60">Images only</span
        ><UiInputfile accept="image/*" />
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-xs text-base-content/60">PDF only</span><UiInputfile
          accept=".pdf"
        />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Multiple files</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>:multiple="true"</code> to allow selecting multiple files.
    </p>
    <div class="flex flex-col gap-1 max-w-sm">
      <span class="text-xs text-base-content/60">Multiple files</span>
      <UiInputfile multiple={true} />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Disabled</h2>
    <p class="text-base-content/70 mb-6">
      The input can be disabled with the <code>disabled</code> prop.
    </p>
    <div class="flex flex-col gap-1 max-w-sm">
      <span class="text-xs text-base-content/60">Disabled</span>
      <UiInputfile disabled />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Combined</h2>
    <p class="text-base-content/70 mb-6">All properties combined.</p>
    <div class="flex flex-col gap-1 max-w-sm">
      <span class="text-xs text-base-content/60">Avatar upload</span>
      <UiInputfile color="primary" size="lg" accept="image/*" />
    </div>
  </div>
</section>
