import { Response } from "@/core/axios";
import {
	BusinessSignupData,
	RoleType,
	LoginData as AuthLoginData,
	SignupData,
	ChannelSignupData,
} from "@/modules/auth/core/types";
import {
	UploadVideoData,
	AddNoteData as VideoNote,
} from "@/modules/dashboard/core/type";

export type IBase = {
	id: number;
	createdAt: Date | null;
	updatedAt: Date | null;
	deletedAt: Date | null;
};

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

export type IVideo = {
	link: string;
	title: string;
	views: number;
	is_payment_due: boolean;
	payment_id: number | null;
	business_channel_id: number;
} & IBase;

export type INote = {
	body: string;
} & IBase;

interface GetInfluencerData {
	business_channel_id: number;
	business_id: number;
	channel_id: number;
	influencer_name: string;
	alert: {
		business_channel_id: number;
		alert_id: number;
		priority: number;
		name: string;
		color: string;
		createdAt: string;
		updatedAt: string;
		deletedAt: string;
	} | null;
}

interface TokenType {
	access_token: string;
	refresh_token: string;
}

interface BusinessSignupApiData extends TokenType {
	user: IUser;
	business: IBusiness;
}

interface ChannelSignupApiData extends TokenType {
	user: IUser;
	channel: IChannel;
}

interface LoginApiData extends TokenType {
	user: IUser;
}

export type RegisterBusinessData = Omit<BusinessSignupData, "passwordAgain">;
export type LoginData = AuthLoginData;
export type RegisterChannelData = Omit<ChannelSignupData, "passwordAgain"> & {
	token: string;
};
export type CreateVideoData = UploadVideoData & { businessId: number };
export type AddNoteData = VideoNote;

export type RegisterBusiness = Response<BusinessSignupApiData>;
export type RegisterChannel = Response<ChannelSignupApiData>;
export type Login = Response<LoginApiData>;
export type Me = Response<Pick<LoginApiData, "user">>;
export type GetMyBusiness = Response<IBusiness>;
export type GetAllBusineess = Response<IBusiness[]>;
export type GetInfluencers = Response<GetInfluencerData[]>;
export type GetVideos = Response<IVideo[]>;
export type CreateVideo = Response<IVideo>;
export type AddNote = Response<INote>;
export type GetNotes = Response<INote[]>;
export type GetURLToAddInfluencer = Response<{ url: string }>;
