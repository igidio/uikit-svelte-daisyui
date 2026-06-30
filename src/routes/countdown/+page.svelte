<script lang="ts">
  import UiCountdown from '$lib/ui/ui-countdown/UiCountdown.svelte';
</script>

<section class="space-y-12">
  <!-- Basic Countdown -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Countdown</h2>
    <p class="text-base-content/70 mb-6">
      Simple countdown with default two-digit display. Uses <code>--digits: 2</code> by default.
    </p>
    <UiCountdown values={['99', '23', '59', '59']} />
  </div>

  <hr class="border-base-300" />

  <!-- Large text with 2 digits -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Large Text with 2 Digits</h2>
    <p class="text-base-content/70 mb-6">
      Countdown numbers with larger text size using custom styling.
    </p>
    <UiCountdown values={['99', '23', '59', '59']} />
  </div>

  <hr class="border-base-300" />

  <!-- Clock countdown with labels -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Clock Countdown with Labels</h2>
    <p class="text-base-content/70 mb-6">
      Labels displayed to the right of each value (default label position).
    </p>
    <UiCountdown
      values={['99', '23', '59', '59']}
      labels={['days', 'hours', 'minutes', 'sec']}
    />
  </div>

  <hr class="border-base-300" />

  <!-- Clock countdown with colons -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Clock Countdown with Colons</h2>
    <p class="text-base-content/70 mb-6">
      Colons displayed between each value for a traditional clock appearance.
    </p>
    <UiCountdown values={['99', '23', '59', '59']} colons={true} />
  </div>

  <hr class="border-base-300" />

  <!-- Large text with labels under -->
  <div>
    <h2 class="text-2xl font-bold mb-2">Large Text with Labels Under</h2>
    <p class="text-base-content/70 mb-6">
      Labels positioned below each value using <code>label_position="under"</code>.
    </p>
    <UiCountdown
      values={['99', '23', '59', '59']}
      labels={['days', 'hours', 'minutes', 'sec']}
      label_position="under"
    />
  </div>

  <hr class="border-base-300" />

  <!-- In boxes -->
  <div>
    <h2 class="text-2xl font-bold mb-2">In Boxes</h2>
    <p class="text-base-content/70 mb-6">
      Each value and label pair is displayed inside a styled box with neutral background.
    </p>
    <UiCountdown
      values={['99', '23', '59', '59']}
      labels={['days', 'hours', 'minutes', 'sec']}
      boxes={true}
    />
  </div>
</section>
