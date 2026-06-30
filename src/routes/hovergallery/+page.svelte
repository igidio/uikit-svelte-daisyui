<script lang="ts">
  import UiHovergallery from '$lib/ui/ui-hovergallery/UiHovergallery.svelte';

  const hat_images: string[] = [
    'https://img.daisyui.com/images/stock/daisyui-hat-1.webp',
    'https://img.daisyui.com/images/stock/daisyui-hat-2.webp',
    'https://img.daisyui.com/images/stock/daisyui-hat-3.webp',
    'https://img.daisyui.com/images/stock/daisyui-hat-4.webp',
  ];

  const gallery_images: string[] = [
    'https://img.daisyui.com/images/stock/card-1.webp?x',
    'https://img.daisyui.com/images/stock/card-2.webp?x',
    'https://img.daisyui.com/images/stock/card-3.webp?x',
  ];
</script>

<section class="space-y-12">
  <!-- Basic Hover Gallery -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Hover Gallery</h2>
    <p class="text-base-content/70 mb-6">
      Move your mouse horizontally over the image to reveal the other images.
    </p>
    <div class="flex justify-center">
      <div class="w-60">
        <UiHovergallery images={hat_images} />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Hover Gallery with 3 images -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Three Images</h2>
    <p class="text-base-content/70 mb-6">
      Hover gallery works with any number of images (up to 10).
    </p>
    <div class="flex justify-center">
      <div class="w-60">
        <UiHovergallery images={gallery_images} />
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Hover Gallery in a Card -->
  <div>
    <h2 class="text-2xl font-bold mb-2">In a Card</h2>
    <p class="text-base-content/70 mb-6">
      The hover gallery adapts to the container size thanks to <code>object-cover</code>.
    </p>
    <div class="flex justify-center">
      <div class="card card-sm bg-base-200 w-60 shadow">
        <UiHovergallery images={hat_images} />
        <div class="card-body">
          <h2 class="card-title flex justify-between">
            daisyUI Hat
            <span class="font-normal">$25</span>
          </h2>
          <p>High Quality classic cap hat with stitch logo</p>
        </div>
      </div>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Custom size container -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Custom Container Size</h2>
    <p class="text-base-content/70 mb-6">
      The parent controls the size — <code>w-80</code> in this example.
    </p>
    <div class="flex justify-center">
      <div class="w-80">
        <UiHovergallery images={hat_images} />
      </div>
    </div>
  </div>
</section>
