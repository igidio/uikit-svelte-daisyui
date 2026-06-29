<script lang="ts">
  import { useToast } from "$lib/stores/toast.svelte";
  import { toast_color_classes } from "./ui-toast-properties";
  import { fade } from "svelte/transition";

  const toast_service = useToast();

  let toast_groups = $derived(
    (() => {
      const groups = new Map<string, typeof toast_service.toasts>();
      for (const item of toast_service.toasts) {
        const pos = item.position;
        if (!groups.has(pos)) groups.set(pos, []);
        groups.get(pos)!.push(item);
      }
      return Array.from(groups.entries());
    })(),
  );

  function alert_class(type: string): string {
    const color_class =
      toast_color_classes[type as keyof typeof toast_color_classes];
    return ["alert", color_class ?? "alert-info"].join(" ");
  }
</script>

{#each toast_groups as [position, items]}
  <div
    class="toast pointer-events-none z-50 {position}"
    out:fade={{ duration: 400 }}
  >
    {#each items as item (item.id)}
      <div class="{alert_class(item.type)} pointer-events-auto">
        <span>{item.message}</span>
      </div>
    {/each}
  </div>
{/each}

<style>
  .toast-enter {
    animation: slideInUp 1000ms cubic-bezier(0.2, 1, 0.2, 1) forwards;
  }

  .toast-leave {
    animation: shrinkOut 500ms ease-in forwards;
  }

  @keyframes slideInUp {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes shrinkOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }
</style>
