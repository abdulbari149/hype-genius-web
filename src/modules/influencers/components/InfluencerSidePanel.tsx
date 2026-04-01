import Card from '@/components/Card'
import Close from '@/components/Close'
import React, { PropsWithChildren, Suspense } from 'react'
import { setInfluencer } from '../core/slice'
import { useDispatch } from 'react-redux'
import Loading from '@/components/Loading'

type Props = PropsWithChildren<{
	onClose?: () => void
}>

const InfluencerSidePanel: React.FC<Props> = ({ children, ...props }) => {
	const dispatch = useDispatch()
	function handleClose() {
		dispatch(setInfluencer({ influencer: null }))
		if (props.onClose) {
			props.onClose()
		}
	}
	return (
		<Card
			className="relative flex flex-col items-center h-full col-span-3 gap-4 overflow-hidden rounded-xl"
			style={{
				boxShadow:
					'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
			}}
		>
			<Suspense fallback={<Loading />}>
				<Close onClose={handleClose} />
				{children}
			</Suspense>
		</Card>
	)
}

export default InfluencerSidePanel
