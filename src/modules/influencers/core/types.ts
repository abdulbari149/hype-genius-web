import { ContractUploadFrequency } from '@/api/type'
import { PaymentStatusType } from '@/modules/settings/components/PaymentStatus'

export type TagType = {
	text: string
	color: string
}

export interface InfluencerData {
	id: number
	influencer: {
		name: string
	} & (
		| { circle: true; circleColor: string }
		| { circle: false; circleColor?: unknown }
	)
	tags?: TagType[]
	currentDeal?: {
		perVideo: string
		perMonth: string
	}
	paymentStatus?: PaymentStatusType
	alert?: TagType & { priority: number }
}

export type PanelType = 'detail' | 'payment'

export type ContractState = {
	is_one_time: 'yes' | 'no'
	upload_frequency: ContractUploadFrequency
	amount: number
	currency_id: number
	onboarding_id: number | null
	note: string
	budget: number
}

export type HandleChangeType = (
	key: keyof ContractState,
	value: string | number,
) => void | Promise<void>
