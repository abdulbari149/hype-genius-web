import { useDateValues } from '@/modules/dashboard/hooks/useDateValues'
import { DateCalendar } from '@mui/x-date-pickers'
import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { MdDateRange } from 'react-icons/md'
import { useOnClickOutside } from 'usehooks-ts'

const options = [
	{
		id: 1,
		value: 'this-month',
		label: 'This Month',
	},
	{
		id: 2,
		value: 'next-month',
		label: 'Next Month',
	},
	{
		id: 3,
		value: 'prev-month',
		label: 'Prev Month',
	},
	{
		id: 4,
		value: 'custom',
		label: 'Custom',
	},
]

export type Option = {
	id: number | string
	value: string | number
	label: string
}

interface Props
	extends Omit<
		React.SelectHTMLAttributes<HTMLDivElement>,
		'onChange' | 'className' | 'style'
	> {
	value: string
	className?: {
		container?: string | ((prev: string) => string)
		option?: string | ((prev: string) => string)
	}
	onChange: (value: string, option?: Option) => void
	dateFrom: 'start' | 'end'
	style?: {
		container?: React.CSSProperties
		option?: React.CSSProperties
		calendarContainer?: React.CSSProperties
	}
}

const DateSelector: React.FC<Props> = ({
	style,
	className,
	onChange,
	value,
	dateFrom,
	...props
}) => {
	const dateValues = useDateValues()

	const [selectedItem, setSelectedItem] = useState<Option>(options[0])
	const [isOpen, setIsOpen] = useState(false)
	const [calendarOpen, setCalendarOpen] = useState(false)
	const [dateValue, setDateValue] = useState<moment.Moment | null>(null)
	const ref = useRef<HTMLDivElement>(null)
	useOnClickOutside(ref, () => {
		setIsOpen(false)
		setCalendarOpen(false)
	})

	const containerStyles: React.CSSProperties = {
		boxShadow:
			'0px 1.46939px 37.8367px rgba(50, 50, 71, 0.01), 0px 1.46939px 21.6735px rgba(50, 50, 71, 0.06)',
		appearance: 'none',
		MozAppearance: 'none',
		WebkitAppearance: 'none',
		backgroundImage: `url(/downArrow.png)`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'calc(100% - 15px) center',
		backgroundSize: '10px',
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		borderRadius: '10px',
	}

	const optionStyles: React.CSSProperties = {}

	if (style && style.container) {
		Object.assign(containerStyles, style.container)
	}
	if (style && style.option) {
		Object.assign(optionStyles, style.option)
	}

	let containerClassName = `bg-[#ffffff] z-[100] px-4 pr-7 py-2 rounded-t-lg text-[13px] ${
		!isOpen ? 'rounded-b-lg' : ''
	}`

	let optionClassName =
		'text-[13px] w-full py-2 text-left px-4 last:rounded-b-md hover:bg-[#f7f7f3]'

	if (className && className.container) {
		if (typeof className.container === 'string') {
			containerClassName = className.container
		}
		if (typeof className.container === 'function') {
			containerClassName = className.container(containerClassName)
		}
	}

	if (className && className.option) {
		if (typeof className.option === 'string') {
			optionClassName = className.option
		}
		if (typeof className.option === 'function') {
			optionClassName = className.option(optionClassName)
		}
	}

	const onOptionSelect = (option: Option) => {
		if (!dateValues || !dateValues.data) return
		setIsOpen(false)
		setSelectedItem(option)
		if (
			option.value === 'prev-month' ||
			option.value === 'this-month' ||
			option.value === 'next-month'
		) {
			const value = dateValues.data[dateFrom][option.value]
			onChange(value, option)
		}
		if (option.value === 'custom' && dateValue) {
			setCalendarOpen(true)
		}
	}

	useEffect(() => {
		if (!dateValues || !dateValues.data) return
		if (
			selectedItem.value === 'prev-month' ||
			selectedItem.value === 'this-month' ||
			selectedItem.value === 'next-month'
		) {
			const value = dateValues.data[dateFrom][selectedItem.value]
			onChange(value, selectedItem)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dateValues.data])

	return (
		<div
			className={`relative bg-white ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`}
			ref={ref}
		>
			<div
				className={containerClassName}
				style={containerStyles}
				{...props}
				onClick={() => {
					setIsOpen((prevIsOpen) => !prevIsOpen)
					setCalendarOpen(false)
				}}
			>
				<p>{selectedItem.label}</p>
				{selectedItem.value === 'custom' && (
					<MdDateRange
						onClick={(e) => {
							e.stopPropagation()
							setCalendarOpen((prevCalendarOpen) => !prevCalendarOpen)
						}}
						size={20}
					/>
				)}
			</div>

			{isOpen && (
				<div
					style={{
						boxShadow:
							'0px 2.56939px 37.8367px rgba(50, 50, 71, 0.05), 0px 1.46939px 21.6735px rgba(50, 50, 71, 0.06)',
					}}
					className={`bg-[#ffffff] absolute top-[2.1rem] w-full rounded-b-lg z-[50]`}
				>
					{options.map((option) => {
						return (
							<button
								onClick={() => onOptionSelect(option)}
								className={optionClassName}
								key={option.id}
								style={optionStyles}
							>
								{option.label}
							</button>
						)
					})}
				</div>
			)}

			{selectedItem.value === 'custom' && calendarOpen && (
				<div
					className="absolute max-w-[320px] rounded-md bg-white mt-4 z-[50] text-black"
					style={{
						boxShadow:
							'0px 1.46939px 37.8367px rgba(50, 50, 71, 0.01), 0px 1.46939px 21.6735px rgba(50, 50, 71, 0.06)',
						...(style?.calendarContainer ?? {}),
					}}
				>
					<DateCalendar
						value={dateValue}
						disablePast={false}
						onChange={(value) => {
							const date = value ?? moment(new Date())
							setDateValue(date)
							onChange(date.format('YYYY-MM-DD'), selectedItem)
							setCalendarOpen(false)
						}}
					/>
				</div>
			)}
		</div>
	)
}

export default DateSelector
