<script lang="ts">
	import UiAccordion from '$lib/ui/ui-accordion/UiAccordion.svelte';

	let selected_value = $state('item-1');
	let selected_with_arrow = $state('item-a');
	let selected_joined = $state('item-x');

	const basic_items = [
		{ value: 'item-1', title: 'How do I create an account?', content: 'Click the "Sign Up" button in the top right corner and follow the registration process.' },
		{ value: 'item-2', title: 'I forgot my password. What should I do?', content: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.' },
		{ value: 'item-3', title: 'How do I update my profile information?', content: 'Go to "My Account" settings and select "Edit Profile" to make changes.' },
	];

	const arrow_items = [
		{ value: 'item-a', title: 'How do I create an account?', content: 'Click the "Sign Up" button in the top right corner and follow the registration process.' },
		{ value: 'item-b', title: 'I forgot my password. What should I do?', content: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.' },
		{ value: 'item-c', title: 'How do I update my profile information?', content: 'Go to "My Account" settings and select "Edit Profile" to make changes.' },
	];

	const joined_items = [
		{ value: 'item-x', title: 'How do I create an account?', content: 'Click the "Sign Up" button in the top right corner and follow the registration process.' },
		{ value: 'item-y', title: 'I forgot my password. What should I do?', content: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.' },
		{ value: 'item-z', title: 'How do I update my profile information?', content: 'Go to "My Account" settings and select "Edit Profile" to make changes.' },
	];
</script>

<section class="space-y-12">
	<div>
		<h2 class="text-2xl font-bold mb-2">Basic Accordion</h2>
		<p class="text-base-content/70 mb-6">
			Default accordion using radio inputs. Only one item stays open at a time.
		</p>
		<UiAccordion bind:value={selected_value} name="accordion-basic" items={basic_items} />
		<p class="mt-2 text-sm text-base-content/60">Selected: {selected_value}</p>
	</div>

	<hr class="border-base-300" />

	<div>
		<h2 class="text-2xl font-bold mb-2">Accordion with Arrow Icon</h2>
		<p class="text-base-content/70 mb-6">
			Each item shows an arrow icon indicating it can be expanded.
		</p>
		<UiAccordion
			bind:value={selected_with_arrow}
			arrow_icon={true}
			name="accordion-arrow"
			items={arrow_items}
		/>
		<p class="mt-2 text-sm text-base-content/60">Selected: {selected_with_arrow}</p>
	</div>

	<hr class="border-base-300" />

	<div>
		<h2 class="text-2xl font-bold mb-2">Accordion with Join</h2>
		<p class="text-base-content/70 mb-6">
			Items joined together with automatic border radius handling.
		</p>
		<UiAccordion
			bind:value={selected_joined}
			arrow_icon={true}
			join={true}
			name="accordion-join"
			items={joined_items}
		/>
		<p class="mt-2 text-sm text-base-content/60">Selected: {selected_joined}</p>
	</div>
</section>
