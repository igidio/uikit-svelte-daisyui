<script lang="ts">
  import { use_theme } from '$lib/stores/theme.svelte';
  import UiSwap from '$lib/ui/ui-swap/UiSwap.svelte';
  import UiSwapItem from '$lib/ui/ui-swap/UiSwapItem.svelte';
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';

  let selected_text = $state('on');
  let selected_icon = $state('sun');
  let selected_effect = $state('😈');
</script>

<section class="space-y-12">
  <!-- Default Swap (Text) -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Default Swap (Text)</h2>
    <p class="text-base-content/70 mb-6">
      Basic swap toggling between two text values: ON and OFF.
    </p>
    <UiSwap bind:value={selected_text}>
      {#snippet children()}
        <UiSwapItem value="on">ON</UiSwapItem>
        <UiSwapItem value="off">OFF</UiSwapItem>
      {/snippet}
    </UiSwap>
    <p class="mt-2 text-sm text-base-content/60">Selected: {selected_text}</p>
  </div>

  <hr class="border-base-300" />

  <!-- Swap Icons -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Swap Icons</h2>
    <p class="text-base-content/70 mb-6">Swap between sun and moon icons.</p>
    <UiSwap bind:value={selected_icon}>
      {#snippet children()}
        <UiSwapItem value="sun">
          <UiIcon icon="sun" />
        </UiSwapItem>
        <UiSwapItem value="moon">
          <UiIcon icon="moon" />
        </UiSwapItem>
      {/snippet}
    </UiSwap>
    <p class="mt-2 text-sm text-base-content/60">Selected: {selected_icon}</p>
  </div>

  <hr class="border-base-300" />

  <!-- Swap with Rotate Effect -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Swap with Rotate Effect</h2>
    <p class="text-base-content/70 mb-6">Icons swap with a rotate animation.</p>
    <UiSwap bind:value={selected_icon} rotate={true}>
      {#snippet children()}
        <UiSwapItem value="sun">
          <UiIcon icon="sun" />
        </UiSwapItem>
        <UiSwapItem value="moon">
          <UiIcon icon="moon" />
        </UiSwapItem>
      {/snippet}
    </UiSwap>
    <p class="mt-2 text-sm text-base-content/60">Selected: {selected_icon}</p>
  </div>

  <hr class="border-base-300" />

  <!-- Hamburger Button -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Hamburger Button</h2>
    <p class="text-base-content/70 mb-6">Classic hamburger menu icon with rotate effect.</p>
    <UiSwap bind:value={selected_icon} rotate={true}>
      {#snippet children()}
        <UiSwapItem value="menu">
          <UiIcon icon="menu" />
        </UiSwapItem>
        <UiSwapItem value="close">
          <UiIcon icon="close" />
        </UiSwapItem>
      {/snippet}
    </UiSwap>
    <p class="mt-2 text-sm text-base-content/60">Selected: {selected_icon}</p>
  </div>

  <hr class="border-base-300" />

  <!-- Swap with Flip Effect -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Swap with Flip Effect</h2>
    <p class="text-base-content/70 mb-6">Emoji swap with a flip animation.</p>
    <UiSwap bind:value={selected_effect} flip={true}>
      {#snippet children()}
        <UiSwapItem value="😈">
          <span class="text-2xl">😈</span>
        </UiSwapItem>
        <UiSwapItem value="😇">
          <span class="text-2xl">😇</span>
        </UiSwapItem>
      {/snippet}
    </UiSwap>
    <p class="mt-2 text-sm text-base-content/60">Selected: {selected_effect}</p>
  </div>
</section>
