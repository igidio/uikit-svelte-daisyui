<script lang="ts">
  import UiBreadcrumbs from '$lib/ui/ui-breadcrumbs/UiBreadcrumbs.svelte';
  import type { UiBreadcrumbsItem } from '$lib/ui/ui-breadcrumbs/ui-breadcrumbs-properties';

  const basic_data: UiBreadcrumbsItem[] = [
    { label: 'Home', route: '/' },
    { label: 'Documents', route: '/documents' },
    { label: 'Add Document', route: '/documents/add' },
  ];

  const icon_data: UiBreadcrumbsItem[] = [
    { label: 'Home', route: '/', icon: 'home' },
    { label: 'Library', route: '/library', icon: 'search' },
    { label: 'Books', route: '/library/books', icon: 'stock' },
    { label: 'The Great Gatsby', route: '/library/books/gatsby' },
  ];

  const mixed_data: UiBreadcrumbsItem[] = [
    { label: 'Home', route: '/' },
    { label: 'Settings', route: '/settings', icon: 'menu' },
    { label: 'Profile', route: '/settings/profile', icon: 'home' },
    { label: 'Edit', route: '/settings/profile/edit' },
  ];
</script>

<section class="space-y-12">
  <!-- Basic Breadcrumbs -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Breadcrumbs</h2>
    <p class="text-base-content/70 mb-6">
      Default breadcrumbs with labels and routes. The last item is rendered as plain text (current page).
    </p>
    <UiBreadcrumbs data={basic_data} />
  </div>

  <hr class="border-base-300" />

  <!-- Breadcrumbs with Icons -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Breadcrumbs with Icons</h2>
    <p class="text-base-content/70 mb-6">
      Use the <code>icon</code> field to add a <code>UiIcon</code> next to each label.
    </p>
    <UiBreadcrumbs data={icon_data} />
  </div>

  <hr class="border-base-300" />

  <!-- Mixed Breadcrumbs -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Mixed Breadcrumbs</h2>
    <p class="text-base-content/70 mb-6">
      Some items with icons, some without — the component adapts automatically.
    </p>
    <UiBreadcrumbs data={mixed_data} />
  </div>
</section>
