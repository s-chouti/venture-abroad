<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
</script>

<div class="mx-auto flex max-w-screen-xl flex-col">
	<div class="mx-auto max-w-5xl text-center">
		<h4 class="text-xl font-bold tracking-tight text-black">
			Frequently Asked Questions
		</h4>
	</div>
</div>

<Accordion.Root class="mx-auto mt-16 w-full items-center justify-center sm:max-w-[70%]">
	<Accordion.Item value="item-1">
		<Accordion.Trigger>Which regions do you cover?</Accordion.Trigger>
		<Accordion.Content>
			We work with a global network of real estate partners. Whether you’re interested in beachfront condos in Latin America or rental properties in Europe, we can deliver region-specific research.
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Trigger>How accurate are the research reports?</Accordion.Trigger>
		<Accordion.Content>
			We combine local market data, on-the-ground insights, and expert opinions. While no forecast can be guaranteed, our goal is to provide you with the most current and reliable information possible.
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-3">
		<Accordion.Trigger>How do I connect with real estate professionals through your platform?</Accordion.Trigger>
		<Accordion.Content>
			After receiving your research report, we’ll introduce you to vetted agents, property managers, and other professionals who can help with everything from property viewings to final negotiations.
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-4">
		<Accordion.Trigger>What about financing options?</Accordion.Trigger>
		<Accordion.Content>
			We collaborate with lenders experienced in international real estate. They’ll work with you to find the best financing solutions for your situation—no extra cost or hidden fees from us.
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-5">
		<Accordion.Trigger>How much does this service cost?</Accordion.Trigger>
		<Accordion.Content>
			Our service is completely free. You get your custom research report and access to our network of professionals at no charge.
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-6">
		<Accordion.Trigger>Is there support after I purchase a property?</Accordion.Trigger>
		<Accordion.Content>
			Absolutely. We’re here to help ensure you have a smooth ownership experience. From property management recommendations to ongoing market updates, our support doesn’t end at closing.
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
