<script lang="ts">
  import { hover3dcard_shapes, type UiHover3dcardShapes } from './ui-hover3dcard-properties';

  let {
    image_url,
    alt = 'Hover 3D image',
    shape = 'soft',
  }: {
    image_url: string;
    alt?: string;
    shape?: UiHover3dcardShapes;
  } = $props();

  let shape_class = $derived(hover3dcard_shapes[shape]);
</script>

<div class="hover-3d">
  <figure class={shape_class}>
    <img src={image_url} alt={alt} />
  </figure>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
