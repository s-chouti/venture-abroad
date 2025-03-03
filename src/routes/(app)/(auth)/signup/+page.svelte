<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ChevronLeftIcon } from 'lucide-svelte';

	import * as Form from '$lib/components/ui/form';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from '$lib/schema/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Loader } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	let isFormLoading = false;
	export let data;
	let dataForm: SuperValidated<Infer<FormSchema>> = data.form;
	let form = superForm(dataForm, {
		validators: zodClient(formSchema),
		onSubmit: () => {
			isFormLoading = true;
		},
		onUpdate: ({ result }) => {
			isFormLoading = false;
			if (result.status === 200) {
				toast.success('Thank you for signing up', {
					description: 'We have received your request and will reach out to you soon.'
				});
			} else {
				toast.error('Something went wrong', {
					description: 'Your sign in request failed. Please try again.'
				});
			}
		}
	});

	const { form: formData, enhance } = form;

	let loading = false;
</script>

<svelte:head>
	<title>Sign Up | Venture Abroad</title>
	<meta name="description" content="Sign Up for Venture Abroad" />
</svelte:head>

<div class="container flex h-screen w-screen flex-col items-center justify-center">
	<div class="flex w-full flex-col-reverse gap-8 md:flex-row md:gap-2">
		<div class="w-full md:w-1/2">
			<Button variant="ghost" href="/" class="absolute left-4 top-4 md:left-8 md:top-2">
				<ChevronLeftIcon class="mr-2 size-4" />
				Back
			</Button>
			<div
				class="align-center mt-[50px] flex w-full flex-col items-center rounded-lg bg-white p-4 pb-8 shadow-lg"
			>
				<h2 class="mb-4 text-lg font-bold">How It Works</h2>
				<div class="flex flex-col space-y-4 text-sm">
					<div class="text-xs">
						<strong>Step 1: Tell Us Where You Want to Invest</strong> <br />Choose the geographic region that sparks your interest. We’ll compile a detailed research report—covering market trends, neighborhood insights, and property values—at no charge.
					</div>
					<div class="text-xs">
						<strong>Step 2: Review Your Custom Report and Connect with Experts</strong><br />Once your personalized report is ready, you’ll also get connected to our network of local real estate pros, ensuring you have the right on-the-ground guidance every step of the way.
					</div>
					<div class="text-xs">
						<strong>Step 3: Secure Financing and Complete the Deal</strong><br />We partner with lenders who specialize in cross-border transactions. From handling legal complexities to closing the sale, our connections help you streamline the entire process—without hidden fees.
					</div>
				</div>
				<!-- <hr
					class="m-4 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0"
				/>
				<h2 class="text-lg font-bold">Pricing</h2>
				<h2 class="text-base font-semibold leading-7">Standard Coverage</h2>
				<p class="h-12 text-sm leading-5 text-black/70">
					Protect yourself again SIM swapping attacks
				</p>
				<span class="text-4xl font-bold text-black">
					$10
					<span class="text-xs"> / month (First 2 months free)</span>
				</span> -->
			</div>
		</div>
		<div class="mt-[280px] w-full md:mt-[50px] md:w-1/2">
			<div class="mx-auto flex w-full flex-col items-center justify-center gap-6">
				<div class="flex flex-col gap-2 text-center">
					<!-- {/* <Icons.logo class="mx-auto h-6 w-6" /> */} -->
					<h1 class="text-2xl font-semibold tracking-tight">Welcome to Venture Abroad</h1>
					<p class="text-sm text-muted-foreground">Sign up for an account</p>
				</div>
				<!-- Form -->
				<form method="POST" use:enhance class="w-full md:w-3/4">
					<Form.Field {form} name="fullName" class="mb-4">
						<Form.Control let:attrs>
							<Input placeholder="Full Name" {...attrs} bind:value={$formData.fullName} />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="email" class="mb-4">
						<Form.Control let:attrs>
							<Input placeholder="name@example.com" {...attrs} bind:value={$formData.email} />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="phoneNumber" class="mb-4">
						<Form.Control let:attrs>
							<Input placeholder="Phone Number" {...attrs} bind:value={$formData.phoneNumber} />
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Button size="sm" class="w-full" disabled={isFormLoading}>
						{#if isFormLoading}
							<Loader class="mr-2 size-4 animate-spin" />
						{/if}
						Sign Up with Email</Form.Button
					>
				</form>
			</div>
		</div>
	</div>
</div>
