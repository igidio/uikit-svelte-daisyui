<script lang="ts">
  import { kbd_sizes, type UiKbdSize } from './ui-kbd-properties';

  let {
    value,
    size = 'md',
  }: {
    value: string;
    size?: UiKbdSize;
  } = $props();

  let kbd_classes = $derived(
    (() => {
      const c: string[] = ['kbd'];
      c.push(kbd_sizes[size]);
      return c.filter(Boolean).join(' ');
    })(),
  );
</script>

<kbd class={kbd_classes}>{value}</kbd>
