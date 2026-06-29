<script lang="ts">
  import { useDrawer } from '$lib/stores/drawer.svelte';
  import UiButton from '$lib/ui/ui-button/UiButton.svelte';

  import BasicContent from './_components/BasicContent.svelte';
  import FormTitleContent from './_components/FormTitleContent.svelte';
  import FormButtonsContent from './_components/FormButtonsContent.svelte';
  import FormAsyncContent from './_components/FormAsyncContent.svelte';
  import FormScrollableContent from './_components/FormScrollableContent.svelte';

  const drawer_service = useDrawer();
</script>

<section class="space-y-12">
  <!-- Basic Drawer -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Drawer</h2>
    <p class="text-base-content/70 mb-6">
      Side drawer with content loaded from the global
      <code>DrawerService</code>.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open left drawer"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ component: BasicContent, side: 'start' })}
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
        onclick={() => drawer_service.open_with_content({ component: BasicContent, side: 'end' })}
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
        onclick={() => drawer_service.open_with_content({ component: FormTitleContent, side: 'start' })}
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- DrawerForm with buttons in footer -->
  <div>
    <h2 class="text-2xl font-bold mb-2">DrawerForm with buttons in footer</h2>
    <p class="text-base-content/70 mb-6">
      Use <code>DrawerForm</code> with <code>title</code> + <code>buttons</code>. Each button accepts
      all props from <code>ui-button</code>.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open with buttons"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ component: FormButtonsContent, side: 'start' })}
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- DrawerForm with async action -->
  <div>
    <h2 class="text-2xl font-bold mb-2">DrawerForm with async action</h2>
    <p class="text-base-content/70 mb-6">
      Button with async <code>action</code>. The buttons are disabled while the action is
      in progress.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open with async action"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ component: FormAsyncContent, side: 'start' })}
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Scrollable DrawerForm -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Scrollable DrawerForm</h2>
    <p class="text-base-content/70 mb-6">
      If the drawer content is too long, scroll is automatically shown in the body
      area.
    </p>
    <div class="flex gap-2">
      <UiButton
        label="Open drawer with scroll"
        variant="primary"
        onclick={() => drawer_service.open_with_content({ component: FormScrollableContent, side: 'start' })}
      />
    </div>
  </div>
</section>
