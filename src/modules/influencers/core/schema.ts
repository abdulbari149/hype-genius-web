import { addNoteSchema } from '@/modules/dashboard/core/schema';
import { z } from 'zod';

export const createActivitySchema = addNoteSchema.extend({
	pinned: z.boolean(),
});

export const createPaymentSchema =  z.object({
	video_id: z.number().optional(),
	business_amount: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive()
  ),
	channel_amount: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive()
  ),
	business_currency_id: z.number().optional(),
	channel_currency_id: z.number().optional()
})
export const paymentDataSchema = createPaymentSchema.required()

export type CreatePaymentData = z.infer<typeof createPaymentSchema>

export type CreateActivityData = z.infer<typeof createActivitySchema>;