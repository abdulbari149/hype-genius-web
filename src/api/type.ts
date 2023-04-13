import { Response } from '@/core/axios'
import {
	BusinessSignupData,
	RoleType,
	LoginData as AuthLoginData,
	SignupData,
	ChannelSignupData,
} from '@/modules/auth/core/types'
import {
	UploadVideoData,
	AddNoteData as VideoNote,
} from '@/modules/dashboard/core/type'
import { PaymentStatusType } from '@/modules/settings/components/PaymentStatus'
import { Alerts } from '@/modules/influencers/core/constants'
import { ReportState } from '@/modules/reports/core/slice'
import { ReportsData } from '@/modules/reports/core/type'

export type IBase = {
	id: number
	createdAt: Date | null
	updatedAt: Date | null
	deletedAt: Date | null
}

export type IUser = Omit<SignupData, 'passwordAgain'> & {
	roleId: number
	role: RoleType
} & IBase

export type IBusiness = {
	name: string
	link: string
	onboardingLink: string
	adminId: number
	default_currency_id: number | null
	customer_ltv: number | null
	acrvv: number | null
} & IBase

export type IChannel = {
	name: string
	link: string
	influencer_id: number
} & IBase

export type IPayment = Omit<CreatePaymentData, 'video_id'> & IBase

export type IVideo = {
	link: string
	title: string
	views: number
	is_payment_due: boolean
	payment_id: number | null
	business_channel_id: number
} & IBase

export type INote = {
	body: string
} & IBase

export type ICurrency = {
	name: string
} & IBase

export type ContractUploadFrequency =
	| '1x'
	| '2x'
	| '3x'
	| '4x'
	| '5x'
	| '6x'
	| '7x'
	| '8x'
	| '9x'
	| '10x'
	| 'unlimited'

export type ContractDataFields =
	| 'amount'
	| 'currency_id'
	| 'is_one_time'
	| 'upload_frequency'

export type ContractData = {
	amount: number
	currency_id: number
	is_one_time: boolean
	upload_frequency: ContractUploadFrequency
}
export type IContract = ContractData & IBase

export type Empty<T> = {
	[P in keyof T]?: T[P] | null | undefined
}
type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
	? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}`
	: S

type SnakeToCamelCaseNested<T> = T extends object
	? {
			[K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<
				T[K]
			>
	  }
	: T

type NullableContract = Empty<Pick<IContract, ContractDataFields>>

export interface Partnership {
	id: number
	name: string
}

export type IOnboardRequest = {
	link: string
	business_id: number
	data: {
		contract?: NullableContract
	}
} & IBase

export type IAlert = {
	businessChannelId: number
	priority: number
	name: Alerts
	color: string
} & IBase

export type ITag = IBase & {
	name: string
	color: string
	businessChannelId: number
}

export interface GetInfluencerData {
	id: number
	business_id: number
	channel_id: number
	influencer: Omit<IUser, 'password' | 'roleId' | 'role'>
	alert: IAlert | null
	tags: Array<ITag> | null
	contract:
		| (IBase &
				SnakeToCamelCaseNested<
					Pick<
						IContract,
						'amount' | 'currency_id' | 'is_one_time' | 'upload_frequency'
					>
				>)
		| null
	channel: Omit<IChannel, 'influencer_id'> & { influencerId: number }
	paymentStatus: PaymentStatusType
}

interface TokenType {
	access_token: string
	refresh_token: string
}

interface BusinessSignupApiData extends TokenType {
	user: IUser
	business: IBusiness
}

interface ChannelSignupApiData extends TokenType {
	user: IUser
	channel: IChannel
}

interface LoginApiData extends TokenType {
	user: IUser
}

export type GetReportData = Pick<
	ReportState,
	'business_channel_id' | 'page' | 'report_for_all' | 'size'
>

export type RegisterBusinessData = Omit<BusinessSignupData, 'passwordAgain'>
export type LoginData = AuthLoginData
export type RegisterChannelData = Omit<ChannelSignupData, 'passwordAgain'> & {
	token: string
}
export type CreateVideoData = UploadVideoData & { businessId: number }
export type AddNoteData = VideoNote
export type UpdateOnboardingRequestData = {
	onboarding_id: number
	note?: string
} & NullableContract
export type CreateContractData = ContractData & { business_channel_id: number }
export type UpdateContractData = Empty<ContractData> & {
	business_channel_id: number
	id: number
}
export type CreatePaymentData = {
	video_id: number
	business_channel_id: number
	channel_currency_id: number
	business_currency_id: number
	business_amount: number
	channel_amount: number
}
export type UpdateBusinessData = Partial<
	Pick<IBusiness, 'acrvv' | 'customer_ltv' | 'default_currency_id'>
>

export type RegisterBusiness = Response<BusinessSignupApiData>
export type RegisterChannel = Response<ChannelSignupApiData>
export type Login = Response<LoginApiData>
export type Me = Response<Pick<LoginApiData, 'user'>>
export type GetMyBusiness = Response<
	IBusiness & { default_currency: ICurrency }
>
export type UpdateBusiness = Response<IBusiness>
export type GetAllBusineess = Response<IBusiness[]>
export type GetInfluencers = Response<GetInfluencerData[]>
export type GetVideos = Response<
	Array<
		IVideo & { payment: IPayment | undefined; influencer: IUser | undefined }
	>
>
export type CreateVideo = Response<IVideo>
export type AddNote = Response<INote>
export type CreateActivity = Response<INote & { pinned: boolean }>
export type GetActivityList = Response<Array<INote & { pinned: boolean }>>
export type GetNotes = Response<INote[]>
export type CreateOnboardingRequest = Response<IOnboardRequest>
export type GetCurrencyList = Response<ICurrency[]>
export type UpdateOnboardingRequest = Response<IOnboardRequest>
export type CreateContract = Response<IContract>
export type GetAlerts = Response<Array<IAlert & { alertId: number }>>

export type GetBusinessReport = Response<{
	reports: Array<ReportsData>
	metadata: {
		totalNoOfPages: number
		page: number
		size: number
		offset: number
	}
}>
export type GetBusinessAnalytics = Response<{
	no_of_uploads: number
	total_views: number
	spent: number
	roas: number
	active_partners: number
}>
export type GetInfluencerOnboarding = Response<{
	currentPartnerShips: Partnership[]
	newPartnerShip: Partnership
}>
