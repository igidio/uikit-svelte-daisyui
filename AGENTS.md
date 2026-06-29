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
- `drawer-form/DrawerForm.svelte` — reusable drawer content wrapper (title, buttons, scrollable body, async actions)
- `modal-form/ModalForm.svelte` — reusable modal content wrapper (same as drawer-form)
