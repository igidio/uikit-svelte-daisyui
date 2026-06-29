<script lang="ts">
	import UiAlert from '$lib/ui/ui-alert/UiAlert.svelte';
</script>

<section class="space-y-12">
	<!-- Basic Alert -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Basic Alert</h2>
		<p class="text-base-content/70 mb-6">Default alert with info variant.</p>
		<div class="flex flex-col gap-4">
			<UiAlert label="This is a default alert message." />
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Variants -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Variants (Colors)</h2>
		<p class="text-base-content/70 mb-6">Alerts come in all daisyUI semantic colors.</p>
		<div class="flex flex-col gap-4">
			<UiAlert label="Alert" />
			<UiAlert variant="info" label="Info alert" />
			<UiAlert variant="success" label="Success alert" />
			<UiAlert variant="warning" label="Warning alert" />
			<UiAlert variant="error" label="Error alert" />
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Type: Soft -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Soft Style</h2>
		<p class="text-base-content/70 mb-6">
			Alerts with a soft background style using the <code>type</code> prop.
		</p>
		<div class="flex flex-col gap-4">
			<UiAlert variant="info" type="soft" label="Info" />
			<UiAlert variant="success" type="soft" label="Success" />
			<UiAlert variant="warning" type="soft" label="Warning" />
			<UiAlert variant="error" type="soft" label="Error" />
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Type: Outline -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Outline Style</h2>
		<p class="text-base-content/70 mb-6">
			Alerts with an outline style using the <code>type</code> prop.
		</p>
		<div class="flex flex-col gap-4">
			<UiAlert variant="info" type="outline" label="Info" />
			<UiAlert variant="success" type="outline" label="Success" />
			<UiAlert variant="warning" type="outline" label="Warning" />
			<UiAlert variant="error" type="outline" label="Error" />
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Type: Dash -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Dash Style</h2>
		<p class="text-base-content/70 mb-6">
			Alerts with a dashed outline using the <code>type</code> prop.
		</p>
		<div class="flex flex-col gap-4">
			<UiAlert variant="info" type="dash" label="Info" />
			<UiAlert variant="success" type="dash" label="Success" />
			<UiAlert variant="warning" type="dash" label="Warning" />
			<UiAlert variant="error" type="dash" label="Error" />
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- With Icon -->
	<div>
		<h2 class="text-2xl font-bold mb-2">With Icon</h2>
		<p class="text-base-content/70 mb-6">Alerts can display an icon before the text.</p>
		<div class="flex flex-col gap-4">
			<UiAlert variant="info" icon="info" label="Info alert" />
			<UiAlert variant="success" icon="success" label="Success alert" />
			<UiAlert variant="warning" icon="warning" label="Warning alert" />
			<UiAlert variant="error" icon="danger" label="Error alert" />
		</div>
	</div>

	<hr class="border-base-300" />

	<!-- Complex Content (slot) -->
	<div>
		<h2 class="text-2xl font-bold mb-2">Complex Content</h2>
		<p class="text-base-content/70 mb-6">
			Alerts can hold richer content via the default slot — like buttons or inline elements.
		</p>
		<div class="flex flex-col gap-4">
			<UiAlert variant="warning">
				{#snippet children()}
					<div class="flex w-full items-center justify-between">
						<span>We use cookies for no reason.</span>
						<div class="flex gap-2">
							<button class="btn btn-sm">Deny</button>
							<button class="btn btn-sm btn-primary">Accept</button>
						</div>
					</div>
				{/snippet}
			</UiAlert>
			<UiAlert variant="success">
				{#snippet children()}
					<div class="flex flex-col">
						<span class="font-bold">Purchase confirmed!</span>
						<span class="text-sm">Your order has been shipped and will arrive in 3-5 business days.</span>
					</div>
				{/snippet}
			</UiAlert>
		</div>
	</div>
</section>
