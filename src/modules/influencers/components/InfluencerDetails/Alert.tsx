import Tag from '@/components/Tag'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Alerts } from '../../core/constants'
import { showIsEdit, showPanel } from '../../core/slice'
import { useGetAlerts } from '../../hooks/useGetAlerts'

type ALERT_NAMES = `${Alerts}`

const Alert = () => {
	const { data: alerts } = useGetAlerts()
	const dispatch = useDispatch()

	const alertActions: Record<ALERT_NAMES, (() => void) | null> = {
		payment_due: () => {
			dispatch(showPanel({ panel: 'payment' }))
		},
		follow_up: null,
		missing_deal: () => {
			dispatch(showIsEdit())
		},
		new_video_upload: null,
		upload_frequency: null,
	}

	const alertSubtitles: Record<ALERT_NAMES, string> = {
		follow_up: '',
		missing_deal: 'Add current deal with influencer',
		new_video_upload: 'Influencer uploaded a new video',
		payment_due: 'Payment is Due',
		upload_frequency: '',
	}

	return (
		<div className="flex flex-col w-full">
			<p className="text-[18px] text-[#272830] font-[600]">Alert</p>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>
			{alerts?.data.map((alert) => (
				<div key={alert.id} className="flex flex-row items-center mt-2">
					<Tag
						text={alert.name
							.replace('_', ' ')
							.split(' ')
							.map((i) => `${i.charAt(0).toUpperCase()}${i.substring(1)}`)
							.join(' ')}
						color={alert.color}
					/>
					<p className="font-[600] text-[15px] text-[#272830] ml-6">
						{alertSubtitles[alert.name]} |{' '}
						<span
							className="px-1 text-[#697AFF] cursor-pointer"
							onClick={() => {
								const fn = alertActions[alert.name]
								if (fn) {
									fn()
								}
							}}
						>
							Click here
						</span>{' '}
					</p>
				</div>
			))}
		</div>
	)
}

export default Alert
