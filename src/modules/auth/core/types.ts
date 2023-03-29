import {
	businessSignupSchema,
	loginSchema,
	channelSignupSchema,
	signupSchema,
} from "./schema";
import { z } from "zod";

export type LoginData = z.infer<typeof loginSchema>;
export type BusinessSignupData = z.infer<typeof businessSignupSchema>;
export type ChannelSignupData = z.infer<typeof channelSignupSchema>;
export type SignupData = z.infer<typeof signupSchema>;

export type IBase = {
	id: number;
	createdAt: Date | null;
	updatedAt: Date | null;
	deletedAt: Date | null;
};

export type RoleType = "business_admin" | "influencer" | "superadmin";

export type IUser = Omit<SignupData, "passwordAgain"> & {
	roleId: number;
	role: RoleType;
} & IBase;

export type IBusiness = {
	name: string;
	link: string;
	onboardingLink: string;
	adminId: number;
} & IBase;

export type IChannel = {
	name: string;
	link: string;
	influencer_id: number;
} & IBase;



