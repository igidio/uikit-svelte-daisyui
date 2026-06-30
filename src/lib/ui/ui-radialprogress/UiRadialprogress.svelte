<script lang="ts">
  import { radialprogress_colors, radialprogress_backgrounds, type UiRadialprogressColors } from './ui-radialprogress-properties';

  let {
    value = 0,
    color = null,
    background = null,
    size = null,
    thickness = null,
  }: {
    value?: number;
    color?: UiRadialprogressColors | null;
    background?: UiRadialprogressColors | null;
    size?: number | null;
    thickness?: number | null;
  } = $props();

  let clamped_value = $derived(Math.max(0, Math.min(100, value)));

  let progress_style = $derived(
    (() => {
      const parts: string[] = [`--value: ${clamped_value}`];
      if (size !== null) {
        parts.push(`--size: ${size}rem`);
      }
      if (thickness !== null) {
        parts.push(`--thickness: ${thickness}rem`);
      }
      return parts.join('; ');
    })(),
  );

  let progress_classes = $derived(
    (() => {
      const classes: string[] = ['radial-progress'];
      if (color) {
        classes.push(radialprogress_colors[color]);
      }
      if (background) {
        classes.push(radialprogress_backgrounds[background]);
      }
      return classes.filter(Boolean).join(' ');
    })(),
  );
</script>

<div
  class={progress_classes}
  style={progress_style}
  role="progressbar"
  aria-valuenow={clamped_value}
  aria-valuemin="0"
  aria-valuemax="100"
>
  {clamped_value}%
</div>
