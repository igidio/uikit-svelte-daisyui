<script lang="ts">
  import UiTabs from '$lib/ui/ui-tabs/UiTabs.svelte';
  import UiTabsItem from '$lib/ui/ui-tabs/UiTabsItem.svelte';
</script>

<section class="space-y-12">
  <!-- Default Tabs -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Default Tabs</h2>
    <p class="text-base-content/70 mb-6">
      Default style with no modifier, using radio inputs. Content appears below the tabs.
    </p>
    <UiTabs name="tabs-default">
      {#snippet children()}
        <UiTabsItem label="Tab 1">
          <p>Content for tab 1. This is the default tab style without any modifier.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 2">
          <p>Content for tab 2. Click the tabs to switch between them using radio inputs.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 3">
          <p>Content for tab 3. The active state is handled purely by CSS.</p>
        </UiTabsItem>
      {/snippet}
    </UiTabs>
  </div>

  <hr class="border-base-300" />

  <!-- Styles -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Styles</h2>
    <p class="text-base-content/70 mb-6">
      Choose from <code>border</code>, <code>lift</code>, or <code>box</code> styles.
    </p>

    <h3 class="text-lg font-semibold mb-2">tabs-border</h3>
    <UiTabs name="tabs-border" type="border">
      {#snippet children()}
        <UiTabsItem label="Tab 1">
          <p>Border style with a bottom border on the active tab.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 2">
          <p>Content for tab 2 with the border style.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 3">
          <p>Content for tab 3 with the border style.</p>
        </UiTabsItem>
      {/snippet}
    </UiTabs>

    <h3 class="text-lg font-semibold mt-6 mb-2">tabs-lift</h3>
    <UiTabs name="tabs-lift" type="lift">
      {#snippet children()}
        <UiTabsItem label="Tab 1">
          <p>Lift style gives a raised appearance to the active tab.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 2">
          <p>Content for tab 2 with the lift style.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 3">
          <p>Content for tab 3 with the lift style.</p>
        </UiTabsItem>
      {/snippet}
    </UiTabs>

    <h3 class="text-lg font-semibold mt-6 mb-2">tabs-box</h3>
    <UiTabs name="tabs-box" type="box">
      {#snippet children()}
        <UiTabsItem label="Tab 1">
          <p>Box style puts the tabs inside a rounded container.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 2">
          <p>Content for tab 2 with the box style.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 3">
          <p>Content for tab 3 with the box style.</p>
        </UiTabsItem>
      {/snippet}
    </UiTabs>
  </div>

  <hr class="border-base-300" />

  <!-- Sizes -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Sizes</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>size</code> to control the tab size: <code>xs</code>, <code>sm</code>,
      <code>md</code> (default), <code>lg</code>, <code>xl</code>.
    </p>

    <div class="space-y-6">
      <div>
        <p class="text-xs mb-1">xs</p>
        <UiTabs name="tabs-xs" type="lift" size="xs">
          {#snippet children()}
            <UiTabsItem label="XS"><p>Extra small tabs.</p></UiTabsItem>
            <UiTabsItem label="Tab"><p>Content for XS.</p></UiTabsItem>
          {/snippet}
        </UiTabs>
      </div>
      <div>
        <p class="text-sm mb-1">sm</p>
        <UiTabs name="tabs-sm" type="lift" size="sm">
          {#snippet children()}
            <UiTabsItem label="Small"><p>Small tabs.</p></UiTabsItem>
            <UiTabsItem label="Tab"><p>Content for small.</p></UiTabsItem>
          {/snippet}
        </UiTabs>
      </div>
      <div>
        <p class="text-base mb-1">md (default)</p>
        <UiTabs name="tabs-md" type="lift" size="md">
          {#snippet children()}
            <UiTabsItem label="Medium"><p>Medium tabs.</p></UiTabsItem>
            <UiTabsItem label="Tab"><p>Content for medium.</p></UiTabsItem>
          {/snippet}
        </UiTabs>
      </div>
      <div>
        <p class="text-lg mb-1">lg</p>
        <UiTabs name="tabs-lg" type="lift" size="lg">
          {#snippet children()}
            <UiTabsItem label="Large"><p>Large tabs.</p></UiTabsItem>
            <UiTabsItem label="Tab"><p>Content for large.</p></UiTabsItem>
          {/snippet}
        </UiTabs>
      </div>
      <div>
        <p class="text-xl mb-1">xl</p>
        <UiTabs name="tabs-xl" type="lift" size="xl">
          {#snippet children()}
            <UiTabsItem label="XLarge"><p>Extra large tabs.</p></UiTabsItem>
            <UiTabsItem label="Tab"><p>Content for XL.</p></UiTabsItem>
          {/snippet}
        </UiTabs>
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Content on Top -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Content on Top</h2>
    <p class="text-base-content/70 mb-6">
      Set <code>content="top"</code> to place the tab content above the tab buttons.
    </p>
    <UiTabs name="tabs-top" type="lift" content="top">
      {#snippet children()}
        <UiTabsItem label="Tab 1">
          <p>This content appears above the tabs because <code>content="top"</code> is set.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 2">
          <p>Tab 2 content shown above the tab buttons.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 3">
          <p>Tab 3 content shown above the tab buttons.</p>
        </UiTabsItem>
      {/snippet}
    </UiTabs>
  </div>

  <hr class="border-base-300" />

  <!-- Custom Content -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Custom Content</h2>
    <p class="text-base-content/70 mb-6">
      Each tab can contain any content &mdash; text, lists, images, or other components.
    </p>
    <UiTabs name="tabs-custom" type="box">
      {#snippet children()}
        <UiTabsItem label="List">
          <ul class="list-disc pl-5 space-y-1">
            <li>First item in the list</li>
            <li>Second item in the list</li>
            <li>Third item in the list</li>
          </ul>
        </UiTabsItem>
        <UiTabsItem label="Alert">
          <div role="alert" class="alert alert-info">
            <span>This is an info alert inside a tab.</span>
          </div>
        </UiTabsItem>
        <UiTabsItem label="Text">
          <p class="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </UiTabsItem>
      {/snippet}
    </UiTabs>
  </div>
</section>
