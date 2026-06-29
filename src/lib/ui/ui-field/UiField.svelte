<script lang="ts">
  import { setContext } from "svelte";
  import { FIELD_STATE_KEY, type FieldState } from "./ui-field-injection";

  let {
    label,
    id,
    error = null,
    touched = false,
    required = false,
    is_error_fixed = false,
    children,
    right,
  }: {
    label: string;
    id?: string;
    error?: string | null;
    touched?: boolean;
    required?: boolean;
    is_error_fixed?: boolean;
    children?: import("svelte").Snippet;
    right?: import("svelte").Snippet;
  } = $props();

  setContext<FieldState>(FIELD_STATE_KEY, {
    get id() {
      return id;
    },
  });
</script>

<fieldset class="fieldset">
  <div class="flex items-center justify-between">
    <label class="label font-semibold" for={id}>
      {label}
      {#if required}
        <span class="text-error font-bold">*</span>
      {/if}
    </label>
    {@render right?.()}
  </div>
  {@render children?.()}
  <div class={is_error_fixed ? "min-h-5" : ""}>
    {#if touched && error}
      <p class="text-error text-xs">{error}</p>
    {/if}
  </div>
</fieldset>
