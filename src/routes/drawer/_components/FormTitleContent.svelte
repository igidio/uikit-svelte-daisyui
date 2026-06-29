<script lang="ts">
  import DrawerForm from '$lib/ui/ui-drawer/DrawerForm.svelte';
</script>

<DrawerForm title="Drawer with title" closable={true}>
  {#snippet children()}
    <div class="space-y-3 px-4">
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
