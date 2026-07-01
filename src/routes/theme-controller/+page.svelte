<script lang="ts">
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
  import UiThemeController from '$lib/ui/ui-themecontroller/UiThemeController.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Theme Controller using a toggle</h2>
    <p class="text-base-content/70 mb-6">
      A toggle switch that changes the page theme to the specified value when checked.
    </p>
    <UiThemeController type="toggle" />
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Theme Controller using a checkbox</h2>
    <p class="text-base-content/70 mb-6">
      A checkbox that changes the page theme to the specified value when checked.
    </p>
    <UiThemeController type="checkbox" />
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Theme Controller using a swap</h2>
    <p class="text-base-content/70 mb-6">
      A swap component with rotating sun/moon icons that toggles the theme.
    </p>
    <UiThemeController type="swap" />
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Theme Controller with icons inside</h2>
    <p class="text-base-content/70 mb-6">
      A toggle with sun and moon icons rendered inside the toggle track.
    </p>
    <UiThemeController type="icon_inside" />
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Toggle with text labels</h2>
    <p class="text-base-content/70 mb-6">
      A theme controller toggle labeled with text on each side using DaisyUI's label-text class.
    </p>
    <label class="flex cursor-pointer gap-2">
      <span class="label-text">Default</span>
      <UiThemeController type="toggle" />
      <span class="label-text">Synthwave</span>
    </label>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Toggle with icons on sides</h2>
    <p class="text-base-content/70 mb-6">
      A theme controller toggle with sun and moon icons placed on each side of the toggle.
    </p>
    <label class="flex cursor-pointer flex-row items-center gap-2">
      <UiIcon icon="sun" />
      <UiThemeController type="toggle" />
      <UiIcon icon="moon" />
    </label>
  </div>
</section>
