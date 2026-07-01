<script lang="ts">
  import { useToast } from '$lib/stores/toast.svelte';
  import UiButton from '$lib/ui/ui-button/UiButton.svelte';
  import type { MessageColors } from '$lib/ui/ui-types';

  const toast_service = useToast();

  function show_toast(type: MessageColors, label: string, position?: string): void {
    toast_service.show({ message: `${label} toast message`, type, position });
  }
</script>

<section class="space-y-12">
  <div>
    <h2 class="text-2xl font-bold mb-2">Basic Toast</h2>
    <p class="text-base-content/70 mb-6">
      Click a button to show a toast notification.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton onclick={() => show_toast('info', 'Info')} variant="info" label="Show Info" />
      <UiButton onclick={() => show_toast('success', 'Success')} variant="success" label="Show Success" />
      <UiButton onclick={() => show_toast('warning', 'Warning')} variant="warning" label="Show Warning" />
      <UiButton onclick={() => show_toast('error', 'Error')} variant="error" label="Show Error" />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Multiple Toasts</h2>
    <p class="text-base-content/70 mb-6">
      Toasts stack automatically in the container.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <UiButton onclick={() => show_toast('info', 'Info #1')} variant="info" label="Toast 1" />
      <UiButton onclick={() => show_toast('success', 'Success #2')} variant="success" label="Toast 2" />
      <UiButton onclick={() => show_toast('warning', 'Warning #3')} variant="warning" label="Toast 3" />
      <UiButton onclick={() => show_toast('error', 'Error #4')} variant="error" label="Toast 4" />
      <UiButton
        variant="neutral"
        label="All at once"
        onclick={() => {
          show_toast('info', 'Info #5');
          show_toast('success', 'Success #6');
          show_toast('warning', 'Warning #7');
          show_toast('error', 'Error #8');
        }}
      />
    </div>
  </div>

  <hr class="border-base-300" />

  <div>
    <h2 class="text-2xl font-bold mb-2">Positions</h2>
    <p class="text-base-content/70 mb-6">
      Toast notifications can appear in different positions using the <code>position</code> option.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <UiButton onclick={() => show_toast('info', 'Top-Start', 'toast-top toast-start')} variant="info" label="Top Start" class="w-fit" />
      <UiButton onclick={() => show_toast('success', 'Top-Center', 'toast-top toast-center')} variant="success" label="Top Center" class="w-fit" />
      <UiButton onclick={() => show_toast('warning', 'Top-End', 'toast-top toast-end')} variant="warning" label="Top End" class="w-fit" />
      <UiButton onclick={() => show_toast('info', 'Middle-Start', 'toast-middle toast-start')} variant="info" label="Middle Start" class="w-fit" />
      <UiButton onclick={() => show_toast('success', 'Middle-Center', 'toast-middle toast-center')} variant="success" label="Middle Center" class="w-fit" />
      <UiButton onclick={() => show_toast('warning', 'Middle-End', 'toast-middle toast-end')} variant="warning" label="Middle End" class="w-fit" />
      <UiButton onclick={() => show_toast('info', 'Bottom-Start', 'toast-bottom toast-start')} variant="info" label="Bottom Start" class="w-fit" />
      <UiButton onclick={() => show_toast('success', 'Bottom-Center', 'toast-bottom toast-center')} variant="success" label="Bottom Center" class="w-fit" />
      <UiButton onclick={() => show_toast('error', 'Bottom-End', 'toast-bottom toast-end')} variant="error" label="Bottom End" class="w-fit" />
    </div>
  </div>
</section>
