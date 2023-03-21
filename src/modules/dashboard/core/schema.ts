import { z } from "zod";

export const uploadVideoSchema = z.object({
	title: z.string(),
	link: z.string(),
});
