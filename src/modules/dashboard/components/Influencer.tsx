import DashboardDatePicker from '@/modules/dashboard/components/DashboardDatePicker'
import VideoDetails from '@/modules/dashboard/components/VideoDetails'
import VideosTable from '@/modules/dashboard/components/VideosTable'
import UploadVideoModal from '@/modules/dashboard/components/UploadVideoModal'
import { Suspense, useState } from 'react'
import UploadVideoBtn from './UploadVideoBtn'
import { useDispatch, useSelector } from 'react-redux'
import { setIsDetailsOpen } from '../core/slice'
import { AppState } from '@/store'
import Loading from '@/components/Loading'
import ChannelAnalyticsList from './ChannelAnalyticsList'
const Influencer = () => {
	const [isUploadOpen, setIsUploadOpen] = useState(false)
	const isDetailsOpen = useSelector(
		(state: AppState) => state.dashboard.isDetailsOpen,
	)

	const dispatch = useDispatch()

	function openUpload() {
		setIsUploadOpen(true)
	}

	function closeUpload() {
		setIsUploadOpen(false)
	}

	return (
		<>
			<main className="flex flex-row w-full px-4 overflow-y-hidden gap-7">
				<div
					className={`flex flex-col ${
						isDetailsOpen ? 'max-w-[60%]' : 'max-w-[100%]'
					} w-full mt-[10px] space-y-[20px]`}
				>
					<div className="flex items-center justify-between">
						<UploadVideoBtn onClick={openUpload} />
						<DashboardDatePicker />
					</div>
					<VideosTable />
					<div
						className="w-full px-2 py-2 space-y-1"
						key={'action required div'}
					>
						<p className="text-[#272830] opacity-70 pb-1 font-light text-[13px] px-2">
							New Videos this month
						</p>
						<div className="w-full h-[2px] opacity-20 bg-[#272830]"></div>
					</div>
					<Suspense fallback={<Loading />}>
						<ChannelAnalyticsList />
					</Suspense>
				</div>

				{isDetailsOpen && (
					<Suspense fallback={<Loading />}>
						<div className="flex flex-col items-start gap-2 max-w-[40%] w-full pr-3">
							<VideoDetails
								handleClose={() => dispatch(setIsDetailsOpen(false))}
							/>
						</div>
					</Suspense>
				)}
			</main>

			<UploadVideoModal isOpen={isUploadOpen} handleClose={closeUpload} />
		</>
	)
}

export default Influencer
