import { PaymentStatusType } from "@/modules/settings/components/PaymentStatus";

export type TagType = {
	title: string;
	color: string;
};

export interface InfluencerData {
	id: number;
	influencer: {
		name: string;
	} & (
		| { circle: true; circleColor: string }
		| { circle: false; circleColor?: unknown }
	);
	tags: TagType[];
	currentDeal?: {
		perVideo: string;
		perMonth: string;
	};
	paymentStatus: PaymentStatusType;
	alert: TagType;
}
