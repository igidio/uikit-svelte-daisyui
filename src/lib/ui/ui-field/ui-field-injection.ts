import type { SvelteComponent } from "svelte";

export const FIELD_STATE_KEY = "field-state";

export interface FieldState {
  id: string | undefined;
}
