<script lang="ts">
  import UiAccordion from '$lib/ui/ui-accordion/UiAccordion.svelte';
  import UiAccordionItem from '$lib/ui/ui-accordion/UiAccordionItem.svelte';

  let selected_value = $state('item-1');
  let selected_with_arrow = $state('item-a');
  let selected_joined = $state('item-x');
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Accordion</h2>
    <p class="text-base-content/70 mb-6">
      Default accordion using radio inputs. Only one item stays open at a time.
    </p>
    <UiAccordion bind:value={selected_value} name="accordion-basic">
      {#snippet children()}
        <UiAccordionItem value="item-1" title="How do I create an account?">
          Click the "Sign Up" button in the top right corner and follow the registration process.
        </UiAccordionItem>
        <UiAccordionItem value="item-2" title="I forgot my password. What should I do?">
          Click on "Forgot Password" on the login page and follow the instructions sent to your email.
        </UiAccordionItem>
        <UiAccordionItem value="item-3" title="How do I update my profile information?">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </UiAccordionItem>
      {/snippet}
    </UiAccordion>
    <p class="mt-2 text-sm text-base-content/60">Selected: {selected_value}</p>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Accordion with Arrow Icon</h2>
    <p class="text-base-content/70 mb-6">
      Each item shows an arrow icon indicating it can be expanded.
    </p>
    <UiAccordion bind:value={selected_with_arrow} arrow_icon={true} name="accordion-arrow">
      {#snippet children()}
        <UiAccordionItem value="item-a" title="How do I create an account?">
          Click the "Sign Up" button in the top right corner and follow the registration process.
        </UiAccordionItem>
        <UiAccordionItem value="item-b" title="I forgot my password. What should I do?">
          Click on "Forgot Password" on the login page and follow the instructions sent to your email.
        </UiAccordionItem>
        <UiAccordionItem value="item-c" title="How do I update my profile information?">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </UiAccordionItem>
      {/snippet}
    </UiAccordion>
    <p class="mt-2 text-sm text-base-content/60">Selected: {selected_with_arrow}</p>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Accordion with Join</h2>
    <p class="text-base-content/70 mb-6">
      Items joined together with automatic border radius handling.
    </p>
    <UiAccordion bind:value={selected_joined} arrow_icon={true} join={true} name="accordion-join">
      {#snippet children()}
        <UiAccordionItem value="item-x" title="How do I create an account?">
          Click the "Sign Up" button in the top right corner and follow the registration process.
        </UiAccordionItem>
        <UiAccordionItem value="item-y" title="I forgot my password. What should I do?">
          Click on "Forgot Password" on the login page and follow the instructions sent to your email.
        </UiAccordionItem>
        <UiAccordionItem value="item-z" title="How do I update my profile information?">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </UiAccordionItem>
      {/snippet}
    </UiAccordion>
    <p class="mt-2 text-sm text-base-content/60">Selected: {selected_joined}</p>
  </div>
</section>
