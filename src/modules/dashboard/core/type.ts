import { IBase } from "@/modules/auth/core/types";
import { TagType } from "@/modules/influencers/core/types";
import { z } from "zod";
import { uploadVideoSchema } from "./schema";

export type AnalyticsDataType = {
	id: number;
	influencer: string;
	views: number;
	totalSpent: number;
	roas: number;
};

export type VideoDataType = {
	id: number;
	title: string;
	paymentStatus: "paid" | "unpaid";
	url: string;
};

export type IVideo = {
	link: string;
	title: string;
	views: number;
	is_payment_due: boolean;
	payment_id: number | null;
	business_channel_id: number;
} & IBase;

export type UploadVideoData = z.infer<typeof uploadVideoSchema>;
