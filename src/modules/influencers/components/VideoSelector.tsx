import Selector from '@/components/Selector'
import { useField } from 'formik'
import React, { useMemo } from 'react'
import { useVideoUploads } from '../hooks/useVideoUploads'
import { QUERY_KEYS } from '@/core/constants'
import { useSelector } from 'react-redux'
import { AppState } from '@/store'

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
	name: string
	value: string | number
}

const { GET_UPLOADS } = QUERY_KEYS

const VideoSelector: React.FC<Props> = (props) => {
	const [field, _helpers, meta] = useField(props)
	const businessChannelId = useSelector(
		(state: AppState) => state.influencers?.influencer?.id ?? NaN,
	)
	const { data } = useVideoUploads(
		[GET_UPLOADS, businessChannelId],
		{ is_payment_due: true, businessChannelId },
		{
			refetchOnMount: 'always',
			onSuccess(data) {
				meta.setValue(data?.data[0].id)
			},
		},
	)
	const options = useMemo(() => {
		if (!data?.data || data.data.length === 0) {
			return []
		}
		const options = data.data
			.filter((item) => item.is_payment_due)
			.map((item) => ({
				id: item.id,
				label: item.title,
				value: item.id.toString(),
			}))
		return options
	}, [data?.data])

	return (
		<Selector
			type="option"
			value={field.value}
			name={field.name}
			onChange={(value, e) => {
				const id = parseInt(value)
				if (isNaN(id)) {
					field.onChange(e)
				} else {
					meta.setValue(id)
				}
			}}
			options={options}
			style={{
				background: '#ECF0F4',
				fontSize: 17,
			}}
			className="focus:outline-none focus-within:outline-none"
		/>
	)
}

export default VideoSelector
