<script lang="ts">
  import { useDrawer } from '$lib/stores/drawer.svelte';

  const drawer_service = useDrawer();
</script>

<ul class="menu p-4 w-60 md:w-80">
  <li class="menu-title"><span>Menu</span></li>
  <li>
    <button class="btn btn-ghost justify-start" onclick={() => drawer_service.close()}>
      Home
    </button>
  </li>
  <li><button class="btn btn-ghost justify-start">Profile</button></li>
  <li><button class="btn btn-ghost justify-start">Settings</button></li>
  <li><button class="btn btn-ghost justify-start">Help</button></li>
</ul>
