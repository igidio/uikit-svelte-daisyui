<script lang="ts">
  import { useDrawer } from '$lib/stores/drawer.svelte';
  import DrawerForm from '$lib/ui/ui-drawer/DrawerForm.svelte';
  import type { DrawerFormButton } from '$lib/ui/ui-drawer/DrawerForm.svelte';

  const drawer_service = useDrawer();

  const buttons: DrawerFormButton[] = [
    {
      label: 'Cancel',
      variant: 'secondary',
      size: 'sm',
      action: () => drawer_service.close(),
    },
    {
      label: 'Save',
      variant: 'primary',
      size: 'sm',
      icon: 'success',
    },
  ];
</script>

<DrawerForm title="Drawer with action buttons" {buttons}>
  {#snippet children()}
    <div class="space-y-3 px-4">
      <p class="text-sm text-base-content/70">
        The footer buttons are defined using the <code>buttons</code> input, which accepts an
        array with the same props as <code>UiButton</code> plus an optional
        <code>action</code> callback.
      </p>
    </div>
  {/snippet}
</DrawerForm>
