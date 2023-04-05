import { addNoteSchema } from '@/modules/dashboard/core/schema';
import { z } from 'zod';

export const createActivitySchema = addNoteSchema.extend({
	pinned: z.boolean(),
});

export type CreateActivityData = z.infer<typeof createActivitySchema>;