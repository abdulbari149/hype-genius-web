import { IBase } from '@/modules/auth/core/types'
import { TagType } from '@/modules/influencers/core/types'
import { z } from 'zod'
import { addNoteSchema, uploadVideoSchema } from './schema'

export type AnalyticsDataType = {
	id: number
	influencer: string
	views: number
	totalSpent: number
	roas: number
}

export type UploadVideoData = z.infer<typeof uploadVideoSchema>
export type AddNoteData = z.infer<typeof addNoteSchema>
