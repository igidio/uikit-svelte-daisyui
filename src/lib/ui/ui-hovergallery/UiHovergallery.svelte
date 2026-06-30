<script lang="ts">
  let {
    images,
    alt = 'Hover gallery image',
  }: {
    images: string[];
    alt?: string;
  } = $props();
</script>

<figure class="hover-gallery w-full h-full">
  {#each images as img (img)}
    <img src={img} {alt} class="object-cover w-full h-full" />
  {/each}
</figure>
