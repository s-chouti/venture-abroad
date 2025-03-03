import { formSchema } from '$lib/schema/schema';
import type { Actions } from '@sveltejs/kit';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import nodemailer from 'nodemailer';

export const load = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		try {
			const form = await superValidate(event, zod(formSchema));
			if (!form.valid) {
				return fail(400, {
					form
				});
			}

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'simdefenseapp@gmail.com',
					pass: 'vuig iwrg meob ozkk'
				}
			});
			console.log('form.email', form);
			const mailOptions = {
				from: 'simdefenseapp@gmail.com',
				to: 'kanwar@ratiopayments.com',
				subject: 'New User Signup - Venture Abroad',
				text: `A new user has signed up with the details:
						Full Name: ${form.data.fullName}, 
					   	Email: ${form.data.email}, 
					    Phone Number: ${form.data.phoneNumber}`
			};

			const info = await transporter.sendMail(mailOptions);
			console.log('Email sent: ' + info.response);
			return {
				form,
				result: {
					status: 200
				}
			};
		} catch (error) {
			return fail(500, {
				error: 'Internal server error'
			});
		}
	}
};
