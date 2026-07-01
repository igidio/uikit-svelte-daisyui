<script lang="ts">
  import UiBadge from '$lib/ui/ui-badge/UiBadge.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Badge</h2>
    <p class="text-base-content/70 mb-6">Default badge with primary color.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiBadge label="Badge" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Sizes</h2>
    <p class="text-base-content/70 mb-6">Badges available in xs, sm, md, lg, and xl sizes.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiBadge size="xs" label="Xsmall" />
      <UiBadge size="sm" label="Small" />
      <UiBadge size="md" label="Medium" />
      <UiBadge size="lg" label="Large" />
      <UiBadge size="xl" label="Xlarge" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Variants (Colors)</h2>
    <p class="text-base-content/70 mb-6">Badges come in all daisyUI semantic colors.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiBadge variant="primary" label="Primary" />
      <UiBadge variant="secondary" label="Secondary" />
      <UiBadge variant="accent" label="Accent" />
      <UiBadge variant="neutral" label="Neutral" />
      <UiBadge variant="info" label="Info" />
      <UiBadge variant="success" label="Success" />
      <UiBadge variant="warning" label="Warning" />
      <UiBadge variant="error" label="Error" />
      <UiBadge variant="ghost" label="Ghost" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Soft Style</h2>
    <p class="text-base-content/70 mb-6">
      Badges with a soft background style using the <code>type</code> prop.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiBadge variant="primary" type="soft" label="Primary" />
      <UiBadge variant="secondary" type="soft" label="Secondary" />
      <UiBadge variant="accent" type="soft" label="Accent" />
      <UiBadge variant="info" type="soft" label="Info" />
      <UiBadge variant="success" type="soft" label="Success" />
      <UiBadge variant="warning" type="soft" label="Warning" />
      <UiBadge variant="error" type="soft" label="Error" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Outline Style</h2>
    <p class="text-base-content/70 mb-6">
      Badges with an outline style using the <code>type</code> prop.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiBadge variant="primary" type="outline" label="Primary" />
      <UiBadge variant="secondary" type="outline" label="Secondary" />
      <UiBadge variant="accent" type="outline" label="Accent" />
      <UiBadge variant="info" type="outline" label="Info" />
      <UiBadge variant="success" type="outline" label="Success" />
      <UiBadge variant="warning" type="outline" label="Warning" />
      <UiBadge variant="error" type="outline" label="Error" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Dash Style</h2>
    <p class="text-base-content/70 mb-6">
      Badges with a dashed outline using the <code>type</code> prop.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiBadge variant="primary" type="dash" label="Primary" />
      <UiBadge variant="secondary" type="dash" label="Secondary" />
      <UiBadge variant="accent" type="dash" label="Accent" />
      <UiBadge variant="info" type="dash" label="Info" />
      <UiBadge variant="success" type="dash" label="Success" />
      <UiBadge variant="warning" type="dash" label="Warning" />
      <UiBadge variant="error" type="dash" label="Error" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">With Icon</h2>
    <p class="text-base-content/70 mb-6">Badges can display an icon before the text.</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiBadge variant="info" icon="info" label="Info" />
      <UiBadge variant="success" icon="success" label="Success" />
      <UiBadge variant="warning" icon="warning" label="Warning" />
      <UiBadge variant="error" icon="danger" label="Error" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Complex Content</h2>
    <p class="text-base-content/70 mb-6">
      Badges can hold richer content via the default slot — like buttons, icons, or inline elements.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiBadge variant="accent">
        {#snippet children()}
          <span class="flex items-center gap-1">
            <span>🎉</span>
            <span>New</span>
            <span class="badge badge-xs badge-accent ml-1">v2.0</span>
          </span>
        {/snippet}
      </UiBadge>
      <UiBadge variant="neutral">
        {#snippet children()}
          <span class="flex items-center gap-1">
            <kbd class="kbd kbd-xs">⌘</kbd>
            <kbd class="kbd kbd-xs">K</kbd>
            <span class="ml-1">Quick search</span>
          </span>
        {/snippet}
      </UiBadge>
      <UiBadge variant="primary" icon="home">
        {#snippet children()}
          <span class="flex items-center gap-1">
            Dashboard
            <span class="text-xs opacity-60">(3)</span>
          </span>
        {/snippet}
      </UiBadge>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Empty Badge</h2>
    <p class="text-base-content/70 mb-6">A badge with no content (just the dot).</p>
    <div class="flex flex-wrap items-center gap-4">
      <UiBadge variant="primary" size="lg" />
      <UiBadge variant="primary" size="md" />
      <UiBadge variant="primary" size="sm" />
      <UiBadge variant="primary" size="xs" />
    </div>
  </div>
</section>
