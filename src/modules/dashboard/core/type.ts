import { TagType } from "@/modules/influencers/core/types";

export type AnalyticsDataType = {
  id: number;
  influencer: string;
  views: number;
  totalSpent: number;
  roas: number;
}

export type VideoDataType = {
  id: number;
  title: string;
  paymentStatus: "paid" | "unpaid";
  url: string;
}