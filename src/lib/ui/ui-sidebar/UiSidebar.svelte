<script lang="ts">
  import { page } from "$app/stores";
  import { navigation_options } from "$lib/data/navigation-options";

  let {
    class: className = "",
  }: {
    class?: string;
  } = $props();

  let active_path = $derived($page.url.pathname.replace(/^\//, "") || "");
</script>

<aside
  class="bg-base-200 max-h-full w-full overflow-y-auto border-r border-base-300 {className}"
>
  <ul class="menu menu-sm p-4 w-full">
    {#each navigation_options as option (option.path)}
      <li>
        <a
          href="/{option.path}"
          class={active_path === option.path
            ? "active bg-neutral text-neutral-content"
            : ""}
        >
          {option.label}
        </a>
      </li>
    {/each}
  </ul>
</aside>
