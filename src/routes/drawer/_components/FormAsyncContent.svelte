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
      label: 'Saving...',
      icon: 'loading',
      variant: 'primary',
      size: 'sm',
      spin: true,
      disabled: true,
    },
  ];
</script>

<DrawerForm title="Save changes" {buttons}>
  {#snippet children()}
    <div class="space-y-3 px-4">
      <p class="text-sm text-base-content/70">
        Example with a button showing loading state (<code>spin</code> + <code>disabled</code>).
      </p>
    </div>
  {/snippet}
</DrawerForm>
