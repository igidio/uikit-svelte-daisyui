<script lang="ts">
  import UiCollapse from '$lib/ui/ui-collapse/UiCollapse.svelte';
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Collapse with Checkbox (Click Again)</h2>
    <p class="text-base-content/70 mb-6">Click to toggle content. Click again to close.</p>
    <UiCollapse title="How do I create an account?" click_type="again" icons="arrow">
      Click the "Sign Up" button in the top right corner and follow the registration process.
    </UiCollapse>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Collapse with Close on Click Outside</h2>
    <p class="text-base-content/70 mb-6">Click to toggle content. Click outside to close.</p>
    <UiCollapse title="How do I create an account?" click_type="outside" icons="arrow">
      Click the "Sign Up" button in the top right corner and follow the registration process.
    </UiCollapse>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Without Border and Background</h2>
    <p class="text-base-content/70 mb-6">
      Collapse with no border or background color using the <code>unwrap</code> option.
    </p>
    <UiCollapse title="How do I create an account?" unwrap={true} icons="arrow">
      Click the "Sign Up" button in the top right corner and follow the registration process.
    </UiCollapse>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">With Arrow Icon</h2>
    <p class="text-base-content/70 mb-6">Default icon style showing an arrow indicator.</p>
    <UiCollapse title="How do I create an account?" icons="arrow">
      Click the "Sign Up" button in the top right corner and follow the registration process.
    </UiCollapse>
    <div class="mt-4">
      <UiCollapse title="I forgot my password. What should I do?" icons="arrow">
        Click on "Forgot Password" on the login page and follow the instructions sent to your email.
      </UiCollapse>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">With Plus/Minus Icon</h2>
    <p class="text-base-content/70 mb-6">Alternative icon style showing a plus/minus indicator.</p>
    <UiCollapse title="How do I create an account?" icons="mathsigns">
      Click the "Sign Up" button in the top right corner and follow the registration process.
    </UiCollapse>
    <div class="mt-4">
      <UiCollapse title="I forgot my password. What should I do?" icons="mathsigns">
        Click on "Forgot Password" on the login page and follow the instructions sent to your email.
      </UiCollapse>
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Icon at Start Position</h2>
    <p class="text-base-content/70 mb-6">
      Icon positioned at the start of the title instead of the end.
    </p>
    <UiCollapse title="How do I create an account?" icons="arrow" icon_position="start">
      Click the "Sign Up" button in the top right corner and follow the registration process.
    </UiCollapse>
    <div class="mt-4">
      <UiCollapse title="I forgot my password. What should I do?" icons="mathsigns" icon_position="start">
        Click on "Forgot Password" on the login page and follow the instructions sent to your email.
      </UiCollapse>
    </div>
  </div>
</section>
