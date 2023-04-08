import { z } from "zod";

export const uploadVideoSchema = z.object({
	link: z.string(),
});

export const addNoteSchema = z.object({ body: z.string().nonempty() });
