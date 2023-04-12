import { IUser, IVideo } from "@/api/type";

export type ReportsData = {
	id: number;
	business_id: number;
	channel_id: number;
	influencer: IUser
	videos: Array<IVideo & { roas: number; amount: number }>
	total: {
		views: number;
		amount: number;
		roas: number | string
	}
}