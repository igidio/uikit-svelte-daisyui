<script lang="ts">
  import UiTimeline from '$lib/ui/ui-timeline/UiTimeline.svelte';
  import type { UiTimelineItem } from '$lib/ui/ui-timeline/ui-timeline-properties';

  const basic_data: UiTimelineItem[] = [
    { text: 'First Macintosh computer' },
    { text: 'iMac' },
    { text: 'iPod' },
    { text: 'iPhone' },
    { text: 'Apple Watch' },
  ];

  const dated_data: UiTimelineItem[] = [
    { subtitle: '1984', text: 'First Macintosh computer' },
    { subtitle: '1998', text: 'iMac' },
    { subtitle: '2001', text: 'iPod' },
    { subtitle: '2007', text: 'iPhone' },
    { subtitle: '2015', text: 'Apple Watch' },
  ];

  const colorful_data: UiTimelineItem[] = [
    { subtitle: '1984', text: 'First Macintosh computer', color: 'primary' },
    { subtitle: '1998', text: 'iMac', color: 'primary' },
    { subtitle: '2001', text: 'iPod', color: 'primary' },
    { text: 'iPhone' },
    { text: 'Apple Watch' },
  ];

  const vertical_data: UiTimelineItem[] = [
    { subtitle: '1984', text: 'First Macintosh computer', icon: 'home' },
    { subtitle: '1998', text: 'iMac', icon: 'home' },
    { subtitle: '2001', text: 'iPod', icon: 'menu' },
    { subtitle: '2007', text: 'iPhone', icon: 'appointment' },
    { subtitle: '2015', text: 'Apple Watch', icon: 'appointment' },
  ];

  const described_data: UiTimelineItem[] = [
    {
      subtitle: '1984',
      text: 'First Macintosh computer',
      icon: 'home',
      description: 'The original Apple Macintosh personal computer.',
    },
    {
      subtitle: '2007',
      text: 'iPhone',
      icon: 'appointment',
      description: "Apple's first-generation smartphone.",
    },
    {
      subtitle: '2015',
      text: 'Apple Watch',
      icon: 'appointment',
      description: 'Smartwatch with fitness tracking and health capabilities.',
    },
  ];
</script>

<section class="space-y-12">
  <!-- Basic Timeline -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Timeline</h2>
    <p class="text-base-content/70 mb-6">Default horizontal timeline with text on both sides.</p>
    <div class="overflow-x-auto py-4">
      <UiTimeline data={basic_data} />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Timeline with Dated Items -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Timeline with Dates</h2>
    <p class="text-base-content/70 mb-6">
      Horizontal timeline with year labels on the <code>timeline-start</code> side.
    </p>
    <div class="overflow-x-auto py-4">
      <UiTimeline data={dated_data} />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Timeline with Colorful Lines -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Colorful Lines</h2>
    <p class="text-base-content/70 mb-6">
      Using <code>color</code> to tint the icon and the connecting <code>&lt;hr&gt;</code> line.
    </p>
    <div class="overflow-x-auto py-4">
      <UiTimeline data={colorful_data} />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Vertical Timeline with Custom Icons -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Vertical Timeline with Icons</h2>
    <p class="text-base-content/70 mb-6">
      Set <code>disposition="vertical"</code> and provide icons via the <code>icon</code> field.
    </p>
    <div class="flex justify-center py-4">
      <UiTimeline data={vertical_data} disposition="vertical" />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Timeline with Description -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Timeline with Descriptions</h2>
    <p class="text-base-content/70 mb-6">
      Each item can include a <code>description</code> for additional context.
    </p>
    <div class="flex justify-center py-4">
      <UiTimeline data={described_data} disposition="vertical" />
    </div>
  </div>
</section>
