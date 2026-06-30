<script lang="ts">
  import UiPagination from '$lib/ui/ui-pagination/UiPagination.svelte';

  let page1 = $state(1);
  let page2 = $state(3);
  let page3 = $state(1);
  let page4 = $state(5);
  let page5 = $state(42);
</script>

<section class="space-y-12">
  <!-- Basic Pagination -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Pagination</h2>
    <p class="text-base-content/70 mb-6">
      Default pagination with 100 items, 10 per page.
    </p>
    <p class="mb-2 text-sm">
      Current page: <strong>{page1}</strong>
    </p>
    <UiPagination bind:page={page1} total_items={100} items_per_page={10} />
  </div>

  <hr class="border-base-300" />

  <!-- Sizes -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Sizes</h2>
    <p class="text-base-content/70 mb-6">
      DaisyUI offers five sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      <code>lg</code> and <code>xl</code>.
    </p>
    <div class="space-y-6">
      <div>
        <p class="text-xs mb-1">xs</p>
        <UiPagination bind:page={page2} total_items={100} items_per_page={10} size="xs" />
      </div>
      <div>
        <p class="text-sm mb-1">sm</p>
        <UiPagination bind:page={page2} total_items={100} items_per_page={10} size="sm" />
      </div>
      <div>
        <p class="text-base mb-1">md (default)</p>
        <UiPagination bind:page={page2} total_items={100} items_per_page={10} size="md" />
      </div>
      <div>
        <p class="text-lg mb-1">lg</p>
        <UiPagination bind:page={page2} total_items={100} items_per_page={10} size="lg" />
      </div>
      <div>
        <p class="text-xl mb-1">xl</p>
        <UiPagination bind:page={page2} total_items={100} items_per_page={10} size="xl" />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Without Nav Buttons -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Without Navigation Buttons</h2>
    <p class="text-base-content/70 mb-6">
      Set <code>nav_buttons=false</code> to hide the prev/next arrows.
    </p>
    <p class="mb-2 text-sm">
      Current page: <strong>{page3}</strong>
    </p>
    <UiPagination bind:page={page3} total_items={50} items_per_page={5} nav_buttons={false} />
  </div>

  <hr class="border-base-300" />

  <!-- Small (Square) Buttons -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Small Square Buttons</h2>
    <p class="text-base-content/70 mb-6">
      Set <code>small_buttons=true</code> for compact <code>btn-square</code> page buttons.
    </p>
    <p class="mb-2 text-sm">
      Current page: <strong>{page4}</strong>
    </p>
    <UiPagination
      bind:page={page4}
      total_items={200}
      items_per_page={10}
      small_buttons={true}
      size="sm"
    />
  </div>

  <hr class="border-base-300" />

  <!-- Many Pages (Ellipsis) -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Many Pages (Ellipsis)</h2>
    <p class="text-base-content/70 mb-6">
      When there are more pages than <code>max_pages_to_show</code>, ellipsis markers appear. Click
      around to see the sliding window.
    </p>
    <p class="mb-2 text-sm">
      Current page: <strong>{page5}</strong>
    </p>
    <UiPagination
      bind:page={page5}
      total_items={1000}
      items_per_page={10}
      max_pages_to_show={7}
    />
  </div>
</section>
