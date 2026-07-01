<script lang="ts">
  import UiDivider from '$lib/ui/ui-divider/UiDivider.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Default Divider</h2>
    <p class="text-base-content/70 mb-6">
      A simple divider without text separating two content blocks.
    </p>
    <div>
      <div class="bg-base-200 rounded-box p-4">Content section above</div>
      <UiDivider />
      <div class="bg-base-200 rounded-box p-4">Content section below</div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Divider with Text</h2>
    <p class="text-base-content/70 mb-6">
      Use the <code>text</code> input to display a label in the middle.
    </p>
    <div>
      <div class="bg-base-200 rounded-box p-4">Content above</div>
      <UiDivider text="OR" />
      <div class="bg-base-200 rounded-box p-4">Content below</div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Vertical Orientation</h2>
    <p class="text-base-content/70 mb-6">
      Set <code>orientation="vertical"</code> to create a vertical divider line between horizontal
      elements. Use a flex container with <code>flex-row</code> to see the effect.
    </p>
    <div class="flex flex-row items-stretch">
      <div class="bg-base-200 rounded-box p-4 flex-1 h-30">Section A</div>
      <UiDivider orientation="vertical" />
      <div class="bg-base-200 rounded-box p-4 flex-1 h-30">Section B</div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Vertical Divider with Text</h2>
    <p class="text-base-content/70 mb-6">Vertical divider with a label in the middle.</p>
    <div class="flex flex-row items-stretch">
      <div class="bg-base-200 rounded-box p-4 flex-1">Left content</div>
      <UiDivider orientation="vertical" text="VS" />
      <div class="bg-base-200 rounded-box p-4 flex-1">Right content</div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Colors</h2>
    <p class="text-base-content/70 mb-6">Dividers support all daisyUI semantic colors.</p>
    <div class="space-y-4">
      <div>
        <div class="bg-base-200 rounded-box p-4">Content A</div>
        <UiDivider color="neutral" text="Neutral" />
        <div class="bg-base-200 rounded-box p-4">Content B</div>
      </div>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content A</div>
        <UiDivider color="primary" text="Primary" />
        <div class="bg-base-200 rounded-box p-4">Content B</div>
      </div>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content A</div>
        <UiDivider color="secondary" text="Secondary" />
        <div class="bg-base-200 rounded-box p-4">Content B</div>
      </div>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content A</div>
        <UiDivider color="accent" text="Accent" />
        <div class="bg-base-200 rounded-box p-4">Content B</div>
      </div>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content A</div>
        <UiDivider color="info" text="Info" />
        <div class="bg-base-200 rounded-box p-4">Content B</div>
      </div>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content A</div>
        <UiDivider color="success" text="Success" />
        <div class="bg-base-200 rounded-box p-4">Content B</div>
      </div>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content A</div>
        <UiDivider color="warning" text="Warning" />
        <div class="bg-base-200 rounded-box p-4">Content B</div>
      </div>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content A</div>
        <UiDivider color="error" text="Error" />
        <div class="bg-base-200 rounded-box p-4">Content B</div>
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Positions</h2>
    <p class="text-base-content/70 mb-6">
      The <code>position</code> input controls where the label appears: <code>start</code>,
      <code>center</code> (default), or <code>end</code>.
    </p>
    <div>
      <div class="bg-base-200 rounded-box p-4">Content above</div>
      <UiDivider text="Start" position="start" />
      <div class="bg-base-200 rounded-box p-4">Content below</div>
    </div>
    <div class="mt-4">
      <div class="bg-base-200 rounded-box p-4">Content above</div>
      <UiDivider text="Center" position="center" />
      <div class="bg-base-200 rounded-box p-4">Content below</div>
    </div>
    <div class="mt-4">
      <div class="bg-base-200 rounded-box p-4">Content above</div>
      <UiDivider text="End" position="end" />
      <div class="bg-base-200 rounded-box p-4">Content below</div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Responsive</h2>
    <p class="text-base-content/70 mb-6">
      The <code>responsive</code> input sets a breakpoint in pixels where a vertical divider
      switches to horizontal. Resize the viewport to see the effect — the divider below is vertical
      on narrow screens and horizontal on wide screens (<code>responsive="768"</code>).
    </p>
    <div class="flex flex-row items-stretch">
      <div class="bg-base-200 rounded-box p-4 flex-1">Left panel</div>
      <UiDivider orientation="vertical" text="↔" responsive={768} />
      <div class="bg-base-200 rounded-box p-4 flex-1">Right panel</div>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Combined Example</h2>
    <p class="text-base-content/70 mb-6">
      All features together: vertical orientation, primary color, text, start position, and
      responsive breakpoint.
    </p>
    <div class="flex flex-row items-stretch">
      <div class="bg-base-200 rounded-box p-4 flex-1 h-20">Column 1</div>
      <UiDivider
        orientation="vertical"
        text="vs"
        color="primary"
        position="start"
        responsive={768}
      />
      <div class="bg-base-200 rounded-box p-4 flex-1 h-20">Column 2</div>
    </div>
  </div>
</section>
