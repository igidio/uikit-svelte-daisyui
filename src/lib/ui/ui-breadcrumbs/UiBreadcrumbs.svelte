<script lang="ts">
  import UiIcon from '$lib/ui/ui-icon/UiIcon.svelte';
  import type { UiBreadcrumbsItem } from './ui-breadcrumbs-properties';

  let {
    data,
  }: {
    data: UiBreadcrumbsItem[];
  } = $props();
</script>

<div class="breadcrumbs text-sm">
  <ul>
    {#each data as item, index}
      <li>
        {#if index === data.length - 1}
          <span class="inline-flex items-center gap-2">
            {#if item.icon}
              <UiIcon icon={item.icon} />
            {/if}
            {item.label}
          </span>
        {:else}
          <a href={item.route} class="inline-flex items-center gap-2">
            {#if item.icon}
              <UiIcon icon={item.icon} />
            {/if}
            {item.label}
          </a>
        {/if}
      </li>
    {/each}
  </ul>
</div>
