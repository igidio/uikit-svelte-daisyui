<script lang="ts">
	import { useModal } from '$lib/stores/modal.svelte';
	import UiButton from '$lib/ui/ui-button/UiButton.svelte';
	import ModalForm from '$lib/ui/ui-modal/ModalForm.svelte';
	import type { ModalFormButton } from '$lib/ui/ui-modal/ModalForm.svelte';

	const modal_service = useModal();

	const size_map: Record<string, string> = {
		sm: 'max-w-md',
		md: 'max-w-lg',
		lg: 'max-w-4xl',
		xl: 'max-w-7xl',
	};

	function open_with_events(): void {
		modal_service.configure({
			on_show: () => console.log('Modal opened (onShow)'),
			on_hide: () => console.log('Modal closed (onHide)'),
			on_toggle: () => console.log('Modal toggled (onToggle)'),
		});
		modal_service.open_with_content({ snippet: events_content });
	}
</script>

{#snippet default_content()}
	<div>
		<h3 class="text-lg font-bold">Hello!</h3>
		<p class="py-4">Press ESC or click outside to close.</p>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
{/snippet}

{#snippet sizes_content()}
	<div>
		<h3 class="text-lg font-bold">Sizes</h3>
		<p class="py-4">
			Current size: <code>{modal_service.size}</code>
			({size_map[modal_service.size] ?? ''})
		</p>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
{/snippet}

{#snippet dynamic_backdrop_content()}
	<div>
		<h3 class="text-lg font-bold">Dynamic Backdrop</h3>
		<p class="py-4">You can close this modal by clicking outside the content.</p>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
{/snippet}

{#snippet static_backdrop_content()}
	<div>
		<h3 class="text-lg font-bold">Static Backdrop</h3>
		<p class="py-4">
			This modal has no external backdrop. You can only close it with ESC or the ✕ button.
		</p>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
{/snippet}

{#snippet not_closable_content()}
	<div>
		<h3 class="text-lg font-bold">Non-Closable Modal</h3>
		<p class="py-4">
			This modal cannot be closed with ESC or by clicking outside. Use the «Close modal» button on
			the page.
		</p>
	</div>
{/snippet}

{#snippet events_content()}
	<div>
		<h3 class="text-lg font-bold">Events</h3>
		<p class="py-4">
			Every time the modal is shown, hidden, or toggled, the registered callbacks are executed.
			Check the browser console (F12) to see the logs.
		</p>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
{/snippet}

{#snippet form_title_content()}
	<ModalForm title="Modal with title" closable={true}>
		{#snippet children()}
			<div class="space-y-3">
				<p class="text-sm text-base-content/70">
					This modal uses <code>modal-form</code> with the <code>title</code> and
					<code>closable</code> inputs. The default interface is rendered.
				</p>
				<p class="text-sm text-base-content/70">
					The close button (X) calls <code>modal_service.close()</code> automatically.
				</p>
			</div>
		{/snippet}
	</ModalForm>
{/snippet}

{#snippet form_buttons_content()}
	<ModalForm title="Modal with action buttons" buttons={[
		{
			label: 'Cancel',
			variant: 'secondary',
			size: 'sm',
			action: () => modal_service.close(),
		},
		{
			label: 'Save',
			variant: 'success',
			size: 'sm',
			icon: 'success',
		},
	] as ModalFormButton[]}>
		{#snippet children()}
			<div class="space-y-3">
				<p class="text-sm text-base-content/70">
					The footer buttons are defined using the <code>buttons</code> input, which accepts an
					array with the same props as <code>UiButton</code> plus an optional
					<code>action</code> callback.
				</p>
				<p class="text-sm text-base-content/70">
					TypeScript validates autocomplete thanks to the
					<code>ModalFormButton</code> helper type.
				</p>
			</div>
		{/snippet}
	</ModalForm>
{/snippet}

{#snippet form_async_content()}
	<ModalForm title="Save changes" buttons={[
		{
			label: 'Cancel',
			variant: 'secondary',
			size: 'sm',
			action: () => modal_service.close(),
		},
		{
			label: 'Saving...',
			icon: 'loading',
			variant: 'success',
			size: 'sm',
			spin: true,
			disabled: true,
		},
	] as ModalFormButton[]}>
		{#snippet children()}
			<div class="space-y-3">
				<p class="text-sm text-base-content/70">
					Example with a button showing loading state (<code>spin</code> + <code>disabled</code>).
				</p>
				<p class="text-sm text-base-content/70">
					When an action is async, all footer buttons are automatically disabled
					until the action completes.
				</p>
			</div>
		{/snippet}
	</ModalForm>
{/snippet}

{#snippet form_scrollable_content()}
	<ModalForm title="Modal with scroll" closable={true} show_footer={false}>
		{#snippet children()}
			<div class="space-y-3 pb-4">
				{#each Array(5) as _, i}
					<div
						class="h-[40vh] bg-base-200 rounded-box flex items-center justify-center"
					>
						<p class="text-sm text-base-content/70">
							Section {i + 1} — very long content for scrolling
						</p>
					</div>
				{/each}
			</div>
		{/snippet}
	</ModalForm>
{/snippet}

{#snippet custom_width_content()}
	<div>
		<h3 class="text-lg font-bold">Modal with Custom Width</h3>
		<p class="py-4">
			This modal uses <code>size='xl'</code> which applies <code>max-w-7xl</code>
			to the modal-box. You can use any <code>max-w-*</code> Tailwind class
			to customize the width.
		</p>
		<p class="py-2 text-sm text-base-content/70">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
			non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
			porttitor quam.
		</p>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
{/snippet}

<section class="space-y-12">
	<!-- Default -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Default Modal</h2>
		<p class="text-base-content/70 mb-6">
			Basic centered modal with sm size. Opens and closes through the
			<code>ModalService</code>.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open modal"
				variant="primary"
				onclick={() => modal_service.open_with_content({ snippet: default_content })}
			/>
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Sizes -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Sizes</h2>
		<p class="text-base-content/70 mb-6">
			The modal has four sizes: <code>sm</code> (max-w-md), <code>md</code> (max-w-lg),
			<code>lg</code> (max-w-4xl) and <code>xl</code> (max-w-7xl).
		</p>
		<div class="flex flex-wrap gap-2">
			<UiButton
				label="Small (sm)"
				variant="primary"
				onclick={() => modal_service.open_with_content({ snippet: sizes_content, size: 'sm' })}
			/>
			<UiButton
				label="Medium (md)"
				variant="primary"
				onclick={() => modal_service.open_with_content({ snippet: sizes_content, size: 'md' })}
			/>
			<UiButton
				label="Large (lg)"
				variant="primary"
				onclick={() => modal_service.open_with_content({ snippet: sizes_content, size: 'lg' })}
			/>
			<UiButton
				label="Extra Large (xl)"
				variant="primary"
				onclick={() => modal_service.open_with_content({ snippet: sizes_content, size: 'xl' })}
			/>
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Dynamic backdrop -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Dynamic Backdrop</h2>
		<p class="text-base-content/70 mb-6">
			With <code>backdrop='dynamic'</code> (default) the modal can be closed by clicking outside
			the content.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open with dynamic backdrop"
				variant="primary"
				onclick={() =>
					modal_service.open_with_content({
						snippet: dynamic_backdrop_content,
						backdrop: 'dynamic',
					})}
			/>
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Static backdrop -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Static Backdrop</h2>
		<p class="text-base-content/70 mb-6">
			With <code>backdrop='static'</code> the backdrop is not shown for closing by clicking
			outside. It can only be closed with ESC or the ✕ button.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open with static backdrop"
				variant="primary"
				onclick={() =>
					modal_service.open_with_content({
						snippet: static_backdrop_content,
						backdrop: 'static',
					})}
			/>
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- No closable -->
	<div>
		<h2 class="text-2xl font-bold mb-2">No Closable</h2>
		<p class="text-base-content/70 mb-6">
			With <code>closable=false</code> closing the modal with ESC or backdrop click is prevented, and
			the ✕ button is not shown. Use the external button to close.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open non-closable modal"
				variant="warning"
				onclick={() =>
					modal_service.open_with_content({
						snippet: not_closable_content,
						closable: false,
					})}
			/>
			<UiButton label="Close modal" variant="secondary" onclick={() => modal_service.close()} />
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Events -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Events</h2>
		<p class="text-base-content/70 mb-6">
			The <code>on_show</code>, <code>on_hide</code>, and <code>on_toggle</code> callbacks allow
			executing logic when the modal visibility changes. Check the browser console.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open modal with events"
				variant="primary"
				onclick={open_with_events}
			/>
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- ModalForm with title -->
	<div>
		<h2 class="text-2xl font-bold mb-2">ModalForm with title</h2>
		<p class="text-base-content/70 mb-6">
			Use <code>modal-form</code> with the <code>title</code> and <code>closable</code>
			(default true) inputs. No need to project content in header/footer.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open with title"
				variant="primary"
				onclick={() => modal_service.open_with_content({ snippet: form_title_content })}
			/>
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- ModalForm with buttons -->
	<div>
		<h2 class="text-2xl font-bold mb-2">ModalForm with buttons in footer</h2>
		<p class="text-base-content/70 mb-6">
			Use <code>modal-form</code> with <code>title</code> + <code>buttons</code>. Each button accepts
			all props from <code>ui-button</code>.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open with buttons"
				variant="primary"
				onclick={() => modal_service.open_with_content({ snippet: form_buttons_content })}
			/>
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- ModalForm with async action -->
	<div>
		<h2 class="text-2xl font-bold mb-2">ModalForm with async action</h2>
		<p class="text-base-content/70 mb-6">
			Button with async <code>action</code> that disables all buttons while the action
			is executing.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open with async action"
				variant="primary"
				onclick={() => modal_service.open_with_content({ snippet: form_async_content })}
			/>
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Scrollable ModalForm -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Scrollable ModalForm</h2>
		<p class="text-base-content/70 mb-6">
			If the modal content is too long, scroll is automatically shown in the body
			area.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open modal with scroll"
				variant="primary"
				onclick={() =>
					modal_service.open_with_content({ snippet: form_scrollable_content, size: 'lg' })}
			/>
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Custom width -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Custom Width</h2>
		<p class="text-base-content/70 mb-6">
			Any <code>max-w-*</code> class can be used to customize the width. This one uses
			<code>size='xl'</code>.
		</p>
		<div class="flex gap-2">
			<UiButton
				label="Open modal wide"
				variant="primary"
				onclick={() =>
					modal_service.open_with_content({ snippet: custom_width_content, size: 'xl' })}
			/>
		</div>
	</div>
</section>
