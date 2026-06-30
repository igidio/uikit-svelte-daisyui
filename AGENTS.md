# Project Guidelines — uikit-svelte-daisyui

Port of [igidio/uikit-vue-daisyui](https://github.com/igidio/uikit-vue-daisyui) to SvelteKit + Svelte 5, leveraging runes and all Svelte-native patterns.

## Build & Test

```bash
npm run dev          # Vite dev server (usually localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Type-check with svelte-check
npm run check:watch  # Type-check in watch mode
```

## Svelte 5 Runes (Mandatory)

The project uses **runes mode** (enforced in `vite.config.ts`). Legacy `let` reactivity or `export let` is **not allowed**.

| Concept | Syntax |
|---------|--------|
| Component props | `let { prop, other = default } = $props()` |
| Local state | `let count = $state(0)` |
| Derived values | `let doubled = $derived(count * 2)` |
| Side effects | `$effect(() => { ... })` |
| Two-way binding | `let { value = $bindable() } = $props()` → used with `bind:value` |
| Reactive class | `$derived` expression or `(() => { ... })()` IIFE |

**Snippets over slots.** Use `{#snippet name(params)}...{/snippet}` + `{@render name(params)}` instead of `<slot>`. For default content, use `{@render children?.()}` where `children` is a snippet prop:

```svelte
<script>
	let { children, title } = $props();
</script>
<div class="card">
	{@render children?.()}
</div>
```

Used by parent:
```svelte
<Card title="Hello">
	{#snippet children()}
		<p>Content</p>
	{/snippet}
</Card>
```

## Component Architecture

Mirror the reference project's structure using Svelte 5 patterns:

```
src/lib/ui/ui-{component}/
├── Ui{Component}.svelte        # Main component
├── ui-{component}-properties.ts # Types, CSS class maps (optional)
└── Ui{Component}Item.svelte    # Child item (if needed, e.g. tabs, accordion)
```

### Properties File Pattern

Each `ui-{component}-properties.ts` exports:
- **Type aliases** as union of string literals for sizes/colors/styles
- **Record constants** mapping those types to daisyUI class strings
- **Interface definitions** for complex props

```ts
export type UiButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export const button_sizes: Record<UiButtonSize, string> = {
	xs: 'btn-xs', sm: 'btn-sm', md: '', lg: 'btn-lg', xl: 'btn-xl',
};
export type UiButtonVariant = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost';
```

**Color class maps always go in the properties file**, never as inline ternaries. Use a `Record<string, string>`:

```ts
// ui-button-properties.ts
export const button_color_classes: Record<string, string> = {
  neutral: 'btn-neutral',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  // ...
};
```

Then in the component, a single-line `$derived`:

```ts
let color_class = $derived(color ? button_color_classes[color] : '');
```

### Component Pattern

```svelte
<script lang="ts">
	import type { UiButtonSize } from './ui-button-properties';
	import { button_sizes } from './ui-button-properties';

	let {
		size = 'md',
		variant = 'neutral',
		label,
		disabled = false,
		children,
	}: {
		size?: UiButtonSize;
		variant?: string;
		label?: string;
		disabled?: boolean;
		children?: import('svelte').Snippet;
	} = $props();

	let classes = $derived(
		['btn', button_sizes[size], variant !== 'neutral' ? `btn-${variant}` : '']
			.filter(Boolean)
			.join(' ')
	);
</script>

<button {disabled} {class}>
	{@render children?.()}
	{#if label}<span>{label}</span>{/if}
</button>
```

### Two-way Binding

Use `$bindable()` for form inputs:

```svelte
<script lang="ts">
	let { value = $bindable(''), ...rest } = $props();
</script>
<input bind:value {...rest} />
```

Parent: `<UiInput bind:value={myVar} />`

### Slot Children Extraction (for compound components)

Use Svelte 5 snippet props instead of slot extraction:

```svelte
<!-- Parent passes items as snippets -->
<UiTabs>
	{#snippet item({ label, content })}
		<button>{label}</button>
		{@render content()}
	{/snippet}
</UiTabs>
```

For data-driven components, accept an array and render with `{#each}`.

### Children Iteration via Context (setContext/getContext)

When a parent component needs to iterate over **child component instances** passed declaratively via snippet (like Vue's `use_slot_children` pattern), the `UiAccordion` + `UiAccordionItem` pattern is the reference:

**Parent** (`UiAccordion.svelte`):
```svelte
<script lang="ts">
	import { setContext } from 'svelte';

	let {
		value = $bindable(''),
		name = 'ui-accordion',
		arrow_icon = false,
		join = false,
		children,
	}: {
		value?: string;
		name?: string;
		arrow_icon?: boolean;
		join?: boolean;
		children?: import('svelte').Snippet;
	} = $props();

	function select(item_value: string) {
		value = item_value;
	}

	setContext('accordion', {
		get name() { return name; },
		get arrow_icon() { return arrow_icon; },
		get join() { return join; },
		get selected_value() { return value; },
		select,
	});
</script>

{#if join}
	<div class="join join-vertical bg-base-100 w-full">
		{@render children?.()}
	</div>
{:else}
	{@render children?.()}
{/if}
```

**Child** (`UiAccordionItem.svelte`):
```svelte
<script lang="ts">
	import { getContext } from 'svelte';

	let {
		value: item_value,
		title,
		class: className = '',
		children,
	}: {
		value: string;
		title: string;
		class?: string;
		children?: import('svelte').Snippet;
	} = $props();

	const ctx = getContext('accordion') as {
		name: string;
		arrow_icon: boolean;
		join: boolean;
		selected_value: string;
		select: (v: string) => void;
	};

	let classes = $derived(
		[
			'collapse',
			'bg-base-100',
			'border',
			'border-base-300',
			ctx.arrow_icon ? 'collapse-arrow' : '',
			ctx.join ? 'join-item' : '',
			className,
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes}>
	<input type="radio" name={ctx.name} value={item_value}
		checked={ctx.selected_value === item_value}
		onchange={() => ctx.select(item_value)} />
	<div class="collapse-title font-semibold">{title}</div>
	<div class="collapse-content text-sm">
		{@render children?.()}
	</div>
</div>
```

**Usage** (page/consumer):
```svelte
<UiAccordion bind:value={selected} name="accordion-basic">
	{#snippet children()}
		<UiAccordionItem value="item-1" title="How do I create an account?">
			Click the "Sign Up" button...
		</UiAccordionItem>
		<UiAccordionItem value="item-2" title="I forgot my password?">
			Click on "Forgot Password"...
		</UiAccordionItem>
	{/snippet}
</UiAccordion>
```

**Key rules:**
- The context object must use **getters** (`get name() { return name; }`) so child components react to the parent's rune changes.
- The child receives only its own **instance props** (`value`, `title`, etc.) via `$props()`, and reads **shared config** (`name`, `arrow_icon`, `join`, `selected_value`) from `getContext`.
- The parent renders the snippet with `{@render children?.()}` — the children are not iterated programmatically; they render themselves with the context they receive.
- For the Vue `defineModel` / `v-model` equivalent, use `$bindable()` on the parent value prop.
- Type the context object with an explicit `as` cast for safety.

## Naming & Conventions

- **Indentation**: 2 spaces. No tabs.
- **Variables and constants**: Always use **snake_case** (e.g., `button_sizes`, `is_open`, `selected_value`, `modal_service`). No camelCase for data.
- **Types/interfaces**: PascalCase (e.g., `UiButtonSize`, `UiPaginationPageItem`).
- **Prefix**: `Ui` (e.g., `UiButton`, `UiAlert`, `UiModal`) — same as reference project
- **Files**: `Ui{Component}.svelte`, `ui-{component}-properties.ts`
- **Sub-components**: `Ui{Component}Item.svelte` (e.g., `UiAccordionItem`, `UiTabsItem`)
- **Stores**: `{name}.svelte.ts` (Svelte 5 rune-based stores, see below)
- **Features/pages**: `src/routes/{component}/+page.svelte` (SvelteKit file-based routing)
- **Shared types**: `src/lib/ui/ui-types.ts` — `UiColors`, `MessageColors`

## Stores (Reactivity)

Use Svelte 5 `.svelte.ts` files with runes instead of Pinia/composables.

**Pattern** (e.g., `src/lib/stores/modal.svelte.ts`):
```ts
// Singleton pattern using module-level $state
let isOpen = $state(false);
let options = $state({ size: 'md', backdrop: 'dynamic', closable: true });

export function useModal() {
	function open() { isOpen = true; }
	function close() { isOpen = false; }
	function toggle() { isOpen = !isOpen; }
	function configure(config: Partial<typeof options>) { Object.assign(options, config); }

	return {
		get isOpen() { return isOpen; },
		get options() { return options; },
		open, close, toggle, configure,
	};
}
```

**Stores to port from reference project:**
- `modal.svelte.ts` — open/close/toggle, dynamic content via components, backdrop/size/closable config, callbacks
- `drawer.svelte.ts` — same pattern as modal, side start/end
- `toast.svelte.ts` — message queue with auto-dismiss, types (info/success/warning/error)
- `theme.svelte.ts` — light/dark toggle, localStorage persistence, `data-theme` attribute

## Snippet Teleport Pattern (Drawer / Modal)

**Purpose:** Allows a page to declare content inline (via `{#snippet}`) and "teleport" it into a global overlay component (drawer, modal, etc.) — same concept as Angular's `TemplateRef` + `ngTemplateOutlet`.

### 1. Store holds a `Snippet` reference

The store exposes an `open_with_content()` method that accepts a snippet plus config options. The snippet is stored as module-level `$state` and `close()` resets it to `null`.

```ts
// src/lib/stores/drawer.svelte.ts
import type { Snippet } from 'svelte';

let is_open = $state(false);
let content_snippet = $state<Snippet | null>(null);

export function useDrawer() {
  function open(): void { is_open = true; }
  function close(): void { is_open = false; content_snippet = null; }

  function open_with_content(config: { snippet: Snippet; side?: 'start' | 'end' }): void {
    if (config.side !== undefined) side = config.side;
    content_snippet = config.snippet;
    open();
  }

  return {
    get is_open() { return is_open; },
    get content_snippet() { return content_snippet; },
    open, close, open_with_content,
    // ...
  };
}
```

### 2. Overlay component renders the snippet with `{@render}`

The shell component (`UiDrawer`) reads `content_snippet` from the store and renders it inside the overlay panel using `{@render}`.

```svelte
<!-- src/lib/ui/ui-drawer/UiDrawer.svelte -->
<script lang="ts">
  import { useDrawer } from '$lib/stores/drawer.svelte';
  let { children } = $props();
  const drawer_service = useDrawer();
</script>

<div class="drawer">
  <input type="checkbox" class="drawer-toggle" checked={drawer_service.is_open} />
  <div class="drawer-content">
    {@render children?.()}
  </div>
  <div class="drawer-side">
    <div class="bg-base-200 w-80 h-screen">
      {#if drawer_service.content_snippet}
        {@render drawer_service.content_snippet()}
      {/if}
    </div>
  </div>
</div>
```

### 3. Page defines snippets and passes them on interaction

Content is declared inline as `{#snippet}` in the page template. When the user clicks a button, the snippet reference is passed to `open_with_content()`.

```svelte
<!-- src/routes/drawer/+page.svelte -->
<script lang="ts">
  import { useDrawer } from '$lib/stores/drawer.svelte';
  import UiButton from '$lib/ui/ui-button/UiButton.svelte';
  import DrawerForm from '$lib/ui/ui-drawer/DrawerForm.svelte';

  const drawer_service = useDrawer();
</script>

{#snippet content_basic()}
  <ul class="menu">
    <li><button onclick={() => drawer_service.close()}>Home</button></li>
  </ul>
{/snippet}

{#snippet content_form()}
  <DrawerForm title="Hello">
    {#snippet children()}
      <p>Content teleported into the drawer</p>
    {/snippet}
  </DrawerForm>
{/snippet}

<UiButton label="Open" onclick={() => drawer_service.open_with_content({ snippet: content_basic, side: 'start' })} />
<UiButton label="Open form" onclick={() => drawer_service.open_with_content({ snippet: content_form, side: 'start' })} />
```

### 4. Key rules

- The store stores a `Snippet` (not a component constructor). This avoids `<svelte:component>` deprecation warnings and keeps the content reactive in its original scope.
- **Each page owns its snippets.** Snippets have access to the page's local state — no need to pass data through the store.
- `close()` **must** reset `content_snippet = null` to ensure the old snippet is cleaned up and doesn't flash on next open.
- For overlays that need a **wrapped layout** (header, body, footer with buttons), create a wrapper component like `DrawerForm.svelte` that receives a `children` snippet prop.
- This pattern is identical for modal: a `modal.svelte.ts` store with `content_snippet: Snippet | null` and a `UiModal.svelte` that renders it.

## CSS / Tailwind

- **Tailwind CSS v4** (`@import 'tailwindcss'`) — no `tailwind.config.js`
- **daisyUI v5** — themes: light (default), dark (prefers-dark)
- **Icons**: Use `@iconify/tailwind4` plugin with Remix Icons (`@iconify-json/ri`)
- **File**: `src/routes/layout.css` — main stylesheet, already has:
  ```css
  @import 'tailwindcss';
  @plugin '@tailwindcss/forms';
  @plugin '@tailwindcss/typography';
  ```
  Add daisyUI and Iconify plugins here.

## Icons

Iconify with semantic name map:

```ts
// src/lib/data/icons.ts
export const available_icons = {
	eye: 'icon-[ri--eye-line]',
	close: 'icon-[ri--close-large-line]',
	success: 'icon-[ri--checkbox-circle-line]',
	sun: 'icon-[ri--sun-fill]',
	moon: 'icon-[ri--moon-fill]',
	search: 'icon-[ri--search-line]',
	// ... ~60+ icons
} as const;

export type IconValue = keyof typeof available_icons;
```

`UiIcon.svelte` component renders `<span class={iconClass} />`.

## Routing

SvelteKit file-based routing (no manual router config):

```
src/routes/
├── +layout.svelte       # App shell (header, sidebar, drawer, modal, toast)
├── +page.svelte         # Home/welcome page
├── layout.css           # Global styles
└── {component}/
    └── +page.svelte     # Demo page for each component (accordion/, alert/, button/, etc.)
```

The layout renders the sidebar navigation + main content area + global UI (modal, drawer, toast).

## Component Porting Inventory (43 components)

Port from `src/shared/ui/` in the reference project to `src/lib/ui/`:

accordion, alert, aura, avatar, badge, breadcrumbs, button, calendar, carousel, checkbox, collapse, countdown, divider, drawer, dropdown, field, hover3dcard, hovergallery, icon, input, inputfile, kbd, loading, modal, pagination, progress, radialprogress, radio, range, rating, select, status, steps, swap, table, tabs, textarea, textrotate, themecontroller, timeline, toast, toggle, tooltip

## Shared Components

Reference project has shared wrappers in `src/shared/components/`:
- `sidebar/` — navigation menu with links
- `drawer-form/DrawerForm.svelte` — reusable drawer content wrapper (title + close button header, scrollable body, footer with action buttons, async button support)
  - Location: `src/lib/ui/ui-drawer/DrawerForm.svelte`
  - Props: `title`, `closable`, `buttons: DrawerFormButton[]`, `show_footer`, `children` snippet
- `modal-form/ModalForm.svelte` — reusable modal content wrapper (same structure as drawer-form: header with title + close, scrollable body, footer with buttons, async actions)
  - Location: `src/lib/ui/ui-modal/ModalForm.svelte`
  - Props: `title`, `closable`, `buttons: ModalFormButton[]`, `show_footer`, `children` snippet
  - Button interface (`ModalFormButton`) mirrors `UiButton` props plus an optional `action` callback
  - Async actions automatically disable all footer buttons while executing
