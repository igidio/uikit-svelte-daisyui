<script lang="ts">
  import UiTooltip from '$lib/ui/ui-tooltip/UiTooltip.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Tooltip</h2>
    <p class="text-base-content/70 mb-6">
      Simple tooltip that appears on hover using <code>data-tip</code>.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiTooltip tip="hello">
        {#snippet children()}
          <button class="btn">Hover me</button>
        {/snippet}
      </UiTooltip>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">With Content</h2>
    <p class="text-base-content/70 mb-6">
      Using a <code>{`{#snippet content()}`}</code> to customize the tooltip popup.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiTooltip tip="Wow!">
        {#snippet children()}
          <button class="btn">Hover me</button>
        {/snippet}
        {#snippet content()}
          <span class="text-sm"><b>Custom tooltip</b> content!</span>
        {/snippet}
      </UiTooltip>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Positions</h2>
    <p class="text-base-content/70 mb-6">
      Tooltips can be positioned on top (default), bottom, left, or right.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiTooltip tip="Top" position="top">
        {#snippet children()}
          <button class="btn">Top</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="Bottom" position="bottom">
        {#snippet children()}
          <button class="btn">Bottom</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="Left" position="left">
        {#snippet children()}
          <button class="btn">Left</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="Right" position="right">
        {#snippet children()}
          <button class="btn">Right</button>
        {/snippet}
      </UiTooltip>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Colors</h2>
    <p class="text-base-content/70 mb-6">Tooltips in daisyUI semantic colors.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiTooltip tip="primary" color="primary">
        {#snippet children()}
          <button class="btn">Primary</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="secondary" color="secondary">
        {#snippet children()}
          <button class="btn">Secondary</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="accent" color="accent">
        {#snippet children()}
          <button class="btn">Accent</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="neutral" color="neutral">
        {#snippet children()}
          <button class="btn">Neutral</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="info" color="info">
        {#snippet children()}
          <button class="btn">Info</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="success" color="success">
        {#snippet children()}
          <button class="btn">Success</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="warning" color="warning">
        {#snippet children()}
          <button class="btn">Warning</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="error" color="error">
        {#snippet children()}
          <button class="btn">Error</button>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="ghost" color="ghost">
        {#snippet children()}
          <button class="btn">Ghost</button>
        {/snippet}
      </UiTooltip>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Combined</h2>
    <p class="text-base-content/70 mb-6">
      Tooltip with position, color, and slot content all together.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiTooltip tip="Bottom primary" position="bottom" color="primary">
        {#snippet children()}
          <button class="btn btn-primary">Bottom + Primary</button>
        {/snippet}
        {#snippet content()}
          <span>Primary tooltip</span>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="Left success" position="left" color="success">
        {#snippet children()}
          <button class="btn btn-success">Left + Success</button>
        {/snippet}
        {#snippet content()}
          <span>Success tooltip</span>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="Right warning" position="right" color="warning">
        {#snippet children()}
          <button class="btn btn-warning">Right + Warning</button>
        {/snippet}
        {#snippet content()}
          <span>Warning tooltip</span>
        {/snippet}
      </UiTooltip>
      <UiTooltip tip="Top error" position="top" color="error">
        {#snippet children()}
          <button class="btn btn-error">Top + Error</button>
        {/snippet}
        {#snippet content()}
          <span>Error tooltip</span>
        {/snippet}
      </UiTooltip>
    </div>
  </div>
</section>
