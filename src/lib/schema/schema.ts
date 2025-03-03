import z from 'zod';
import type { DetailedValue, CountryCode, E164Number } from 'svelte-tel-input/types';

export const formSchema = z.object({
	fullName: z.string().min(3),
	email: z.string().email(),
	phoneNumber: z.string(),
});

export type FormSchema = typeof formSchema;
