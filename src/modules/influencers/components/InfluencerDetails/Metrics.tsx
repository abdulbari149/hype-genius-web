import Change from '@/components/Change'
import React, { useMemo, useState } from 'react'
import Selector from '@/components/Selector'
import { useGetMetrics } from '../../hooks/useGetMetrics'
import { useDateValues } from '@/modules/dashboard/hooks/useDateValues'
import { DateOptionType } from '@/modules/dashboard/core/type'
import Loading from '@/components/Loading'
type DateFilter = {
	start_date: DateOptionType
	end_date: DateOptionType
}

const Metrics = () => {
	const dateValues = useDateValues()

	const [values, setValues] = useState<DateFilter>({
		start_date: 'this-month',
		end_date: 'this-month',
	})

	const dateFilter = useMemo(() => {
		if (!dateValues.data) return {}
		const data = {
			start_date: dateValues.data['start'][values.start_date],
			end_date: dateValues.data['end'][values.end_date],
		}
		return data
	}, [values, dateValues.data])

	const { data: metrics } = useGetMetrics(dateFilter)

	if (!metrics) return <Loading />

	return (
		<div className="flex flex-col w-full">
			<div className="flex items-center gap-2 mb-[3px]">
				<p className="text-[18px] text-[#272830] font-[600]">Metrics</p>

				<Selector
					value={values.start_date}
					onChange={(value) => {
						if (
							value === 'this-month' ||
							value === 'prev-month' ||
							value === 'next-month'
						) {
							setValues((prevState) => ({ ...prevState, start_date: value }))
						}
					}}
					type="time"
					customClassName="bg-[#ECF0F4] pr-5 pl-3 mb-1 py-2 rounded-xl text-[13px]"
					style={{ backgroundPosition: 'calc(100% - 8px) center' }}
				/>

				<p className="font-light text-[12px] px-1">Compare to</p>

				<Selector
					type="time"
					customClassName="bg-[#ECF0F4] pr-5 pl-3 mb-1 py-2 rounded-xl text-[13px]"
					style={{ backgroundPosition: 'calc(100% - 8px) center' }}
					value={values.end_date}
					onChange={(value) => {
						if (
							value === 'this-month' ||
							value === 'prev-month' ||
							value === 'next-month'
						) {
							setValues((prevState) => ({ ...prevState, end_date: value }))
						}
					}}
				/>
			</div>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>

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
						<span className="text-[16px] text-[#272830]">Gold | 8.63</span>
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
		</div>
	)
}

export default Metrics
