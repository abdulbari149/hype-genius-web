import Change from '@/components/Change'
import React, { useMemo, useState } from 'react'
import { useGetMetrics } from '../../hooks/useGetMetrics'
import Loading from '@/components/Loading'
import DateSelector from '@/components/Selector/DateSelector'
import { useSelector } from 'react-redux'
import { AppState } from '@/store'
type DateFilter = {
	start_date: string
	end_date: string
}

const Metrics = () => {
	const [values, setValues] = useState<DateFilter>({
		start_date: '',
		end_date: '',
	})
	const { data: metrics } = useGetMetrics(values)
	const contract = useSelector(
		(state: AppState) => state.influencers.influencer?.contract,
	)

	const overallGoal = useMemo(() => {
		if (!metrics || !metrics.data || !contract) return 0

		let normalized_upload_frequency =
			contract.uploadFrequency === 'unlimited'
				? 0
				: parseInt(contract.uploadFrequency.toLowerCase().replace('x', ''))
		normalized_upload_frequency /= 4
		const normalized_roas =
			metrics.data.roas >= 1 ? (metrics.data.roas - 1) / 5 : 0

		console.log({
			normalized_upload_frequency,
			normalized_roas,
		})
		return Math.round(
			(0.3 * normalized_upload_frequency + 0.7 * normalized_roas) * 100,
			2,
		)
	}, [metrics?.data, contract])

	return (
		<div className="flex flex-col w-full">
			<div className="flex items-center gap-2 mb-[3px]">
				<p className="text-[18px] text-[#272830] font-[600]">Metrics</p>
				<DateSelector
					dateFrom="start"
					value={values.start_date}
					onChange={(value) => {
						setValues((prevState) => ({ ...prevState, start_date: value }))
					}}
					className={{
						container: (prev) => prev + 'pr-5 pl-4 mb-1 py-2 bg-[#ECF0F4]',
						option: (prev) => prev + ' bg-[#ECF0F4] z-[100] hover:bg-[#fff]',
					}}
					style={{
						container: {
							backgroundColor: '#ECF0F4',
							backgroundPosition: 'calc(100% - 8px) center',
						},
					}}
				/>

				<p className="font-light text-[12px] px-1">Compare to</p>

				<DateSelector
					className={{
						container: (prev) => prev + ' pr-5 pl-4 mb-1 py-2 bg-[#ECF0F4]',
						option: (prev) => prev + ' bg-[#ECF0F4] z-[100] hover:bg-[#fff]',
					}}
					style={{
						container: {
							backgroundPosition: 'calc(100% - 8px) center',
							backgroundColor: '#ECF0F4',
						},
					}}
					value={values.end_date}
					dateFrom="end"
					onChange={(value) => {
						setValues((prevState) => ({ ...prevState, end_date: value }))
					}}
				/>
			</div>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>

			{!metrics ? (
				<Loading />
			) : (
				<div className="grid gap-x-2 gap-y-5 mt-[15px] w-full xl:grid-cols-[180px_repeat(2,1fr)] lg:grid-cols-2">
					<div className="w-full ">
						<p className="flex flex-wrap w-full">
							Total Spent:
							<Change variant="decrease">+20.0% Over</Change>
						</p>
						<p className="text-[#1C921A] text-[16px]">
							{metrics.data.total_spent
								? (+parseFloat(metrics.data.total_spent.toString()).toFixed(
										2,
								  )).toLocaleString('en-US', {
										currency: 'usd',
										style: 'currency',
								  })
								: '$0'}
						</p>
					</div>
					<div className="w-full">
						<p className="">
							Budget:
							<Change variant="increase">+50.0%</Change>
						</p>
						<p className="text-[#1C921A] text-[16px]">
							$
							{metrics?.data.budget
								? parseFloat(metrics?.data.budget.toString()).toLocaleString(
										'en-US',
								  )
								: '0'}
						</p>
					</div>
					<div className="flex flex-col w-full">
						<div>
							<p>Overall Score</p>
						</div>
						<div className="flex flex-row items-center gap-2">
							<span className="rounded-full bg-[#F3EA02] w-[20px] h-[20px] inline-block"></span>
							<span className="text-[16px] text-[#272830]">
								Gold | {overallGoal}
							</span>
						</div>
					</div>
					<div className="w-full ">
						<p>
							Uploads:
							<Change variant="netural">0.0%</Change>
						</p>
						<p className="text-[#3BACFE] text-[16px]">
							{metrics?.data.no_of_uploads
								? metrics?.data.no_of_uploads.toLocaleString('en-US')
								: '0'}
						</p>
					</div>
					<div className="w-full ">
						<p>
							Views:
							<Change variant="increase">+13%</Change>
						</p>
						<p className="text-[#3BACFE] text-[16px]">
							{metrics?.data.total_views
								? parseInt(metrics?.data.total_views.toString()).toLocaleString(
										'en-US',
								  )
								: '0'}
						</p>
					</div>
					<div className="w-full ">
						<p>
							ROAS:
							<Change variant="decrease">-5%</Change>
						</p>
						<p className="text-[#3BACFE] text-[16px]">
							{metrics?.data.roas ?? '0'}
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default Metrics
