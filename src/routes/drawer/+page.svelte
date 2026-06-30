<script lang="ts">
  import { useDrawer } from '$lib/stores/drawer.svelte';
  import UiButton from '$lib/ui/ui-button/UiButton.svelte';
  import DrawerForm from '$lib/ui/ui-drawer/DrawerForm.svelte';
  import type { DrawerFormButton } from '$lib/ui/ui-drawer/DrawerForm.svelte';

  const drawer_service = useDrawer();

  function close_drawer(): void {
    drawer_service.close();
  }

  async function async_save(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const form_buttons: DrawerFormButton[] = [
    { label: 'Cancel', variant: 'secondary', size: 'sm', action: () => drawer_service.close() },
    { label: 'Save', variant: 'primary', size: 'sm', icon: 'success' },
  ];

  const async_buttons: DrawerFormButton[] = [
    { label: 'Cancel', variant: 'secondary', size: 'sm', action: () => drawer_service.close() },
    {
      label: 'Saving...',
      icon: 'loading',
      variant: 'primary',
      size: 'sm',
      spin: true,
      disabled: true,
    },
  ];
</script>

{#snippet content_basic()}
  <ul class="menu p-4 w-60 md:w-80">
    <li class="menu-title"><span>Menu</span></li>
    <li>
      <button class="btn btn-ghost justify-start" onclick={close_drawer}>
        Home
      </button>
    </li>
    <li><button class="btn btn-ghost justify-start">Profile</button></li>
    <li><button class="btn btn-ghost justify-start">Settings</button></li>
    <li><button class="btn btn-ghost justify-start">Help</button></li>
  </ul>
{/snippet}

{#snippet content_form_title()}
  <DrawerForm title="Drawer with title" closable={true}>
    {#snippet children()}
      <div class="space-y-3 px-4 menu">
        <p class="text-sm text-base-content/70">
          This drawer uses <code>DrawerForm</code> with the <code>title</code> and
          <code>closable</code> inputs.
        </p>
        <p class="text-sm text-base-content/70">
          The close button (X) calls <code>drawer_service.close()</code> automatically.
        </p>
      </div>
    {/snippet}
  </DrawerForm>
{/snippet}

{#snippet content_form_buttons()}
  <DrawerForm title="Drawer with action buttons" buttons={form_buttons}>
    {#snippet children()}
      <div class="space-y-3 px-4">
        <p class="text-sm text-base-content/70">
          The footer buttons are defined through the <code>buttons</code> input, which accepts an array
          with the same props as <code>UiButton</code> plus an optional
          <code>action</code> callback.
        </p>
      </div>
    {/snippet}
  </DrawerForm>
{/snippet}

{#snippet content_form_async()}
  <DrawerForm title="Save changes" buttons={async_buttons}>
    {#snippet children()}
      <div class="space-y-3 px-4">
        <p class="text-sm text-base-content/70">
          Example with a button showing loading state (<code>spin</code> + <code>disabled</code>).
        </p>
      </div>
    {/snippet}
  </DrawerForm>
{/snippet}

{#snippet content_form_scrollable()}
  <DrawerForm title="Scrollable drawer" closable={true} show_footer={false}>
    {#snippet children()}
      <div class="space-y-3 pb-4">
        {#each [1, 2, 3, 4, 5] as i}
          <div class="h-[40vh] bg-base-200 rounded-box flex items-center justify-center mx-4">
            <p class="text-sm text-base-content/70">
              Section {i} — very long content for scrolling
            </p>
          </div>
        {/each}
      </div>
    {/snippet}
  </DrawerForm>
{/snippet}

<section class="space-y-12">
  <!-- Basic Drawer (start) -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Drawer</h2>
    <p class="text-base-content/70 mb-6">
      Side drawer with content loaded via <code>snippet</code>. Controlled from the global
      <code>DrawerService</code>.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open left drawer"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ snippet: content_basic, side: 'start' })}
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Drawer from the right (end) -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Drawer from the right (end)</h2>
    <p class="text-base-content/70 mb-6">
      Using <code>side="end"</code> the drawer opens from the right side.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open right drawer"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ snippet: content_basic, side: 'end' })}
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- DrawerForm with title -->
  <div>
    <h2 class="text-2xl font-bold mb-2">DrawerForm with title</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>DrawerForm</code> with the <code>title</code> and <code>closable</code> inputs. The
      close button (X) calls <code>drawer_service.close()</code> automatically.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open with title"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ snippet: content_form_title, side: 'start' })}
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- DrawerForm with footer buttons -->
  <div>
    <h2 class="text-2xl font-bold mb-2">DrawerForm with footer buttons</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>DrawerForm</code> with <code>title</code> + <code>buttons</code>. Each button
      accepts all <code>UiButton</code> props.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open with buttons"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ snippet: content_form_buttons, side: 'start' })}
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- DrawerForm with async action -->
  <div>
    <h2 class="text-2xl font-bold mb-2">DrawerForm with async action</h2>
    <p class="text-base-content/70 mb-6">
      Button with async <code>action</code>. Buttons are disabled while the action is in progress.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open with async action"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ snippet: content_form_async, side: 'start' })}
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- DrawerForm scrollable -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Scrollable DrawerForm</h2>
    <p class="text-base-content/70 mb-6">
      If the drawer content is very long, scroll is automatically shown in the body area.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open drawer with scroll"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ snippet: content_form_scrollable, side: 'start' })}
      />
    </div>
  </div>
</section>
