<script lang="ts">
  import UiTextrotate from '$lib/ui/ui-textrotate/UiTextrotate.svelte';
  import UiTextrotateItem from '$lib/ui/ui-textrotate/UiTextrotateItem.svelte';
</script>

<section class="space-y-12">
  <!-- Basic Text Rotate -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Text Rotate</h2>
    <p class="text-base-content/70 mb-6">Rotates through 3 words by default in 10 seconds.</p>
    <div class="flex justify-center">
      <UiTextrotate>
        {#snippet children()}
          <UiTextrotateItem>ONE</UiTextrotateItem>
          <UiTextrotateItem>TWO</UiTextrotateItem>
          <UiTextrotateItem>THREE</UiTextrotateItem>
        {/snippet}
      </UiTextrotate>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Rotating 6 words -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Rotating 6 Words</h2>
    <p class="text-base-content/70 mb-6">Big font size, horizontally centered.</p>
    <div class="flex justify-center">
      <UiTextrotate>
        {#snippet children()}
          <UiTextrotateItem>DESIGN</UiTextrotateItem>
          <UiTextrotateItem>DEVELOP</UiTextrotateItem>
          <UiTextrotateItem>DEPLOY</UiTextrotateItem>
          <UiTextrotateItem>SCALE</UiTextrotateItem>
          <UiTextrotateItem>MAINTAIN</UiTextrotateItem>
          <UiTextrotateItem>REPEAT</UiTextrotateItem>
        {/snippet}
      </UiTextrotate>
    </div>
  </div>

  <hr class="border-base-300" />

  <!-- Rotating words in a sentence -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Rotating Words in a Sentence</h2>
    <p class="text-base-content/70 mb-6">
      Different colors for each word using custom <code>class</code> attributes on items.
    </p>
    <div class="flex justify-center">
      <span>
        Providing AI Agents for
        <UiTextrotate>
          {#snippet children()}
            <UiTextrotateItem>
              <span class="bg-teal-400 text-teal-800 px-2">Designers</span>
            </UiTextrotateItem>
            <UiTextrotateItem>
              <span class="bg-red-400 text-red-800 px-2">Developers</span>
            </UiTextrotateItem>
            <UiTextrotateItem>
              <span class="bg-blue-400 text-blue-800 px-2">Managers</span>
            </UiTextrotateItem>
          {/snippet}
        </UiTextrotate>
      </span>
    </div>
  </div>
</section>
