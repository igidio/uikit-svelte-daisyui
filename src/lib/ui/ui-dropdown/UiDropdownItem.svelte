<script lang="ts">
  let {
    children,
  }: {
    children?: import('svelte').Snippet;
  } = $props();
</script>

<li>
  {@render children?.()}
</li>
