<script lang="ts">
  import UiCarousel from '$lib/ui/ui-carousel/UiCarousel.svelte';
  import UiCarouselItem from '$lib/ui/ui-carousel/UiCarouselItem.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Snap to Start</h2>
    <p class="text-base-content/70 mb-6">
      Default snap behavior — items snap to the start of the container.
    </p>
    <UiCarousel snap="start">
      {#snippet children()}
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
      {/snippet}
    </UiCarousel>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Snap to Center</h2>
    <p class="text-base-content/70 mb-6">Items snap to the center of the container.</p>
    <UiCarousel snap="center">
      {#snippet children()}
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
      {/snippet}
    </UiCarousel>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Snap to End</h2>
    <p class="text-base-content/70 mb-6">Items snap to the end of the container.</p>
    <UiCarousel snap="end">
      {#snippet children()}
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="carousel slider"
              class="w-80"
            />
          {/snippet}
        </UiCarouselItem>
      {/snippet}
    </UiCarousel>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Vertical Carousel</h2>
    <p class="text-base-content/70 mb-6">Carousel with vertical scrolling direction.</p>
    <div class="flex justify-center">
      <UiCarousel vertical={true} snap="start">
        {#snippet children()}
          <UiCarouselItem>
            {#snippet children()}
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                alt="carousel slider"
                class="h-48 w-full object-cover"
              />
            {/snippet}
          </UiCarouselItem>
          <UiCarouselItem>
            {#snippet children()}
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                alt="carousel slider"
                class="h-48 w-full object-cover"
              />
            {/snippet}
          </UiCarouselItem>
          <UiCarouselItem>
            {#snippet children()}
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                alt="carousel slider"
                class="h-48 w-full object-cover"
              />
            {/snippet}
          </UiCarouselItem>
          <UiCarouselItem>
            {#snippet children()}
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                alt="carousel slider"
                class="h-48 w-full object-cover"
              />
            {/snippet}
          </UiCarouselItem>
          <UiCarouselItem>
            {#snippet children()}
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                alt="carousel slider"
                class="h-48 w-full object-cover"
              />
            {/snippet}
          </UiCarouselItem>
        {/snippet}
      </UiCarousel>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Carousel with Indicator Buttons</h2>
    <p class="text-base-content/70 mb-6">
      Navigate slides using numbered indicator buttons. Each button scrolls to the corresponding
      slide via anchor links.
    </p>
    <UiCarousel indicator={true} snap="start">
      {#snippet children()}
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              alt="carousel gallery"
              class="w-full"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              alt="carousel gallery"
              class="w-full"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              alt="carousel gallery"
              class="w-full"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              alt="carousel gallery"
              class="w-full"
            />
          {/snippet}
        </UiCarouselItem>
      {/snippet}
    </UiCarousel>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Carousel with Next/Prev Buttons</h2>
    <p class="text-base-content/70 mb-6">
      Navigate between slides using overlaid prev/next buttons.
    </p>
    <UiCarousel prevnext={true} snap="start">
      {#snippet children()}
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              alt="carousel slide"
              class="w-full"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              alt="carousel slide"
              class="w-full"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              alt="carousel slide"
              class="w-full"
            />
          {/snippet}
        </UiCarouselItem>
        <UiCarouselItem>
          {#snippet children()}
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              alt="carousel slide"
              class="w-full"
            />
          {/snippet}
        </UiCarouselItem>
      {/snippet}
    </UiCarousel>
  </div>
</section>
