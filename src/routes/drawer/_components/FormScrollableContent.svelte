<script lang="ts">
  import DrawerForm from '$lib/ui/ui-drawer/DrawerForm.svelte';
</script>

<DrawerForm title="Drawer with scroll" closable={true} show_footer={false}>
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
