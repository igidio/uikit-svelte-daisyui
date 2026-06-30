<script lang="ts">
  import UiHover3dcard from '$lib/ui/ui-hover3dcard/UiHover3dcard.svelte';
</script>

<section class="space-y-12">
  <!-- Basic 3D Image Hover -->
  <div>
    <h2 class="text-2xl font-bold mb-2">3D Image Hover Effect</h2>
    <p class="text-base-content/70 mb-6">
      Hover over the image to see the 3D tilt effect provided by daisyUI's
      <code>hover-3d</code> class.
    </p>
    <div class="flex justify-center">
      <UiHover3dcard
        image_url="https://img.daisyui.com/images/stock/creditcard.webp"
        alt="Credit card 3D demo"
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- 3D Image wrapped in a link -->
  <div>
    <h2 class="text-2xl font-bold mb-2">3D Image wrapped in a Link</h2>
    <p class="text-base-content/70 mb-6">
      You can wrap <code>UiHover3dcard</code> in an <code>&lt;a&gt;</code> tag from the parent to
      make it clickable.
    </p>
    <div class="flex justify-center">
      <a href="/" class="block">
        <UiHover3dcard
          image_url="https://img.daisyui.com/images/stock/creditcard.webp"
          alt="Clickable 3D card"
        />
      </a>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Image Gallery with 3D Hover -->
  <div>
    <h2 class="text-2xl font-bold mb-2">3D Image Gallery</h2>
    <p class="text-base-content/70 mb-6">
      Multiple images with the 3D hover effect — perfect for image galleries.
    </p>
    <div class="flex max-sm:flex-col gap-10 justify-center">
      <UiHover3dcard
        image_url="https://img.daisyui.com/images/stock/card-1.webp?x"
        alt="Gallery image 1"
      />
      <UiHover3dcard
        image_url="https://img.daisyui.com/images/stock/card-2.webp?x"
        alt="Gallery image 2"
      />
      <UiHover3dcard
        image_url="https://img.daisyui.com/images/stock/card-3.webp?x"
        alt="Gallery image 3"
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Hard Shape (no border radius) -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Hard Shape (Square)</h2>
    <p class="text-base-content/70 mb-6">
      Using <code>shape="hard"</code> removes the rounded corners for a square image.
    </p>
    <div class="flex justify-center">
      <UiHover3dcard
        image_url="https://img.daisyui.com/images/stock/creditcard.webp"
        alt="Square 3D card"
        shape="hard"
      />
    </div>
  </div>
</section>
