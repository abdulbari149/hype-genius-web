import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string(),
	password: z.string(),
})

export const signupSchema = z.object({
	email: z.string(),
	password: z.string().min(6, {
		message: 'Password cannot be less than 6 characters.',
	}),
	passwordAgain: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	phoneNumber: z.string(),
})

export const businessSignupSchema = signupSchema
	.extend({
		businessName: z.string(),
		businessLink: z.string(),
	})
	.refine((data) => data.password === data.passwordAgain, {
		message: "Passwords don't match",
		path: ['passwordAgain'],
	})

export const channelSignupSchema = signupSchema
	.extend({
		channelName: z.string(),
		channelLink: z.string(),
	})
	.refine((data) => data.password === data.passwordAgain, {
		message: "Passwords don't match",
		path: ['passwordAgain'],
	})
