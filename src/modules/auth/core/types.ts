import {
	businessSignupSchema,
	loginSchema,
	channelSignupSchema,
} from "./schema";
import { z } from "zod";

export type LoginData = z.infer<typeof loginSchema>;
export type BusinessSignupData = z.infer<typeof businessSignupSchema>;
export type ChannelSignupData = z.infer<typeof channelSignupSchema>;
