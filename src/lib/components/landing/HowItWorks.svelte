<script>
	import { fade } from 'svelte/transition';
	import HeroLightImg from '$lib/imgs/pexels.jpg';
</script>

<div class="flex items-center justify-center gap-4 md:gap-8 mt-12">
	<div class="w-full items-center rounded-lg bg-white p-4 p-4 shadow-lg md:w-1/3 md:w-1/3">
		<img src={HeroLightImg} alt="HeroLightImage" class="h-auto w-full rounded-lg" />
	</div>
	<div
		class="align-center flex w-full flex-col items-center rounded-lg bg-white p-4 shadow-lg md:w-1/3"
	>
		<h2 class="mb-4 text-2xl font-bold">How It Works</h2>
		<div class="flex flex-col space-y-4">
			<div>
				<strong>Step 1: Tell Us Where You Want to Invest</strong> <br />Choose the geographic region that sparks your interest. We’ll compile a detailed research report - covering market trends, neighborhood insights, and property values—at no charge.
			</div>
			<div>
				<strong>Step 2: Review Your Custom Report and Connect with Experts</strong><br />Once your personalized report is ready, you’ll also get connected to our network of local real estate pros, ensuring you have the right on-the-ground guidance every step of the way.
			</div>
			<div>
				<strong>Step 3: Secure Financing and Complete the Deal</strong><br />We partner with lenders who specialize in cross-border transactions. From handling legal complexities to closing the sale, our connections help you streamline the entire process -without hidden fees.
			</div>
		</div>
	</div>
</div>
