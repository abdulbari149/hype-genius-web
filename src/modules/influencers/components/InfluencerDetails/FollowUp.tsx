import Card from '@/components/Card'
import IconSelector, { ItemIcon } from '@/components/Selector/IconSelector'
import { DateCalendar } from '@mui/x-date-pickers'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useCreateFollowUp } from '../../hooks/useCreateFollowUp'
import { useSelector } from 'react-redux'
import { AppState } from '@/store'
import { MdOutlineEmail, MdPhone } from 'react-icons/md'

const dateOptions = [
	{ value: 'tomorrow', label: 'Tomorrow' },
	{ label: 'Next Week', value: 'next-week' },
	{ label: 'Next Month', value: 'next-month' },
	{ label: 'Custom', value: 'custom' },
]

const items = [
	{ label: 'email', value: <MdOutlineEmail /> },
	{ label: 'phone', value: <MdPhone /> },
]

const FollowUp = () => {
	// eslint-disable-next-line @typescript-eslint/ban-types
	const [option, selectOption] = useState<ItemIcon | {}>({})
	const [info, setInfo] = useState('')
	const [dateSelected, setDateSelected] = useState('')
	const [calendarOpen, setCalendarOpen] = useState(false)
	const [dateValue, setDateValue] = useState<moment.Moment>(moment(new Date()))

	const influencer = useSelector(
		(state: AppState) => state.influencers.influencer,
	)

	useEffect(() => {
		if (influencer) {
			selectOption(items[0])
			setInfo('')
			setDateSelected('')
			setCalendarOpen(false)
			setDateValue(moment(new Date()))
		}
	}, [influencer])

	const createFollowUp = useCreateFollowUp()
	const handleSubmit = async () => {
		if (dateSelected === '' || info === '') return
		if (
			Object.keys(option).length == 0 ||
			!('label' in option) ||
			!('value' in option) ||
			typeof option.label !== 'string'
		)
			return

		let schedule_at = ''

		const format = 'YYYY-MM-DD'

		switch (dateSelected) {
			case 'tomorrow':
				schedule_at = moment().add('1', 'days').format(format)
				break
			case 'next-week':
				schedule_at = moment().add('1', 'weeks').format(format)
				break
			case 'next-month':
				schedule_at = moment().add('1', 'months').format(format)
				break
			case 'custom':
				schedule_at = dateValue.format(format)
				break
		}

		await createFollowUp.mutateAsync({
			info,
			schedule_at,
			send_to: option.label as 'email' | 'phone',
		})
		setInfo('')
		setDateSelected('')
		setCalendarOpen(false)
		setDateValue(moment(new Date()))
	}

	return (
		<Card
			className="relative py-[20px] rounded-xl flex flex-col justify-center items-center max-w-[400px] w-full"
			style={{ backgroundColor: '#ECF0F4' }}
			as="form"
			onSubmit={(e) => {
				e.preventDefault()
				return handleSubmit()
			}}
		>
			<h3 className="text-[18px] text-[#272830] py-1 font-[600] text-center">
				Follow Up
			</h3>
			<div className="flex flex-row w-full pl-[15px] pr-[30px] gap-2 items-center">
				<div className="flex flex-row items-center gap-1">
					<IconSelector
						selectedIcon={option}
						setSelectedIcon={selectOption}
						items={items}
					/>
				</div>

				<input
					value={info}
					type="text"
					onChange={(e) => setInfo(e.target.value)}
					placeholder="info here..."
					className={`rounded-xl text-[14px] max-w-md w-full px-3 py-1 h-fit outline-none focus:out-of-range: focus-within:out-of-range: hover:outline-none`}
				/>
			</div>

			<div className="flex self-start ml-8 gap-1 my-5 w-fit pl-[35px]">
				{dateOptions.map((date) => {
					if (date.value === 'custom') {
						return (
							<div
								onClick={() => {
									setDateSelected(date.value)
									setCalendarOpen((prevOpen) => !prevOpen)
								}}
								className={`${
									date.value === dateSelected
										? 'bg-[#EF539E] text-white'
										: 'bg-white text-black'
								} px-[10px] py-[5px] relative rounded-lg text-[10px] w-fit cursor-pointer font-light tracking-wide`}
								key={date.value}
							>
								{date.label}
								{calendarOpen && (
									<div className="absolute -translate-x-[80%] mt-4 z-[50] bg-white text-black">
										<DateCalendar
											value={dateValue}
											disablePast={false}
											onChange={(value) =>
												setDateValue(value ?? moment(new Date()))
											}
											minDate={moment(new Date())}
										/>
									</div>
								)}
							</div>
						)
					}

					return (
						<div
							onClick={() => setDateSelected(date.value)}
							className={`${
								date.value === dateSelected
									? 'bg-[#EF539E] text-white'
									: 'bg-white text-black'
							} px-[10px] py-[5px] rounded-lg text-[10px] w-fit cursor-pointer font-light tracking-wide`}
							key={date.value}
						>
							{date.label}
						</div>
					)
				})}
			</div>
		</Card>
	)
}

export default FollowUp
