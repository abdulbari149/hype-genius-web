import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string(),
	password: z.string(),
})

export const signupSchema = z.object({
	email: z.string(),
	password: z
		.string()
		.regex(
			new RegExp(
				'^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$',
			),
			{
				message: 'Password is not strong.',
			},
		),
	passwordAgain: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	phoneNumber: z.string(),
})

export const businessSignupSchema = signupSchema.extend({
	businessName: z.string(),
	businessLink: z.string(),
})

export const channelSignupSchema = signupSchema.extend({
	channelName: z.string(),
	channelLink: z.string(),
})
