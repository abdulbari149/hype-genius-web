import React, { useEffect, useReducer, useState } from 'react'
import Card from '@/components/Card'
import CurrencySelector from '@/modules/influencers/components/CurrencySelector'
import Select from 'react-select'
import CoversionRatePresets from './CoversionRatePresets'
import { useDebounce } from 'usehooks-ts'
import { useMyBusiness } from '../hooks/useMyBusiness'
import { UpdateBusinessData } from '@/api/type'
import { useUpdateBusiness } from '../hooks/useUpdateBusiness'
import { useDebouncedCallback } from 'use-debounce'
import { useQueryClient } from 'react-query'

const initialState: UpdateBusinessData = {
	acrvv: 0,
	customer_ltv: 0,
	default_currency_id: null,
}

const CustomerSettings: React.FC<{}> = () => {
	const [state, setState] = useState<UpdateBusinessData>({})
	const {
		data: business,
		isSuccess,
		isFetched,
	} = useMyBusiness({
		onSuccess(data) {
			console.log(data)
			const state: UpdateBusinessData = {
				acrvv: data.data.acrvv,
				customer_ltv: data.data.customer_ltv
					? parseInt(data.data.customer_ltv?.toString(), 10)
					: 0,
				default_currency_id: data.data.default_currency_id,
			}
			console.log(state)
			setState(state)
		},
	})

	const updateMyBusiness = useUpdateBusiness()
	const debouncedState = useDebounce(state, 1000)
	const handleState = (state: Partial<UpdateBusinessData>) => {
		setState((prevState) => ({
			...prevState,
			...state,
		}))
	}

	const removeEmptyValues = <T extends Record<string, unknown>>(obj: T) => {
		return Object.keys(obj).reduce((acc: Partial<T>, key: keyof T) => {
			if (obj[key] !== undefined || obj[key] !== null) {
				acc[key] = obj[key]
			}
			return acc
		}, {})
	}

	useEffect(() => {
		if (isFetched) {
			const data = removeEmptyValues(debouncedState)
			updateMyBusiness.mutateAsync(data)
		}
	}, [debouncedState])

	return (
		<Card
			className="bg-[#FFFFFF]/50 h-fit w-full rounded-lg flex py-8 px-10 justify-between flex-col gap-8"
			style={{
				boxShadow:
					'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
			}}
		>
			<div className="flex items-center gap-3">
				<p className="font-normal text-[18px]">Default Currency</p>
				<CurrencySelector
					value={state?.default_currency_id ?? 0}
					handleChange={(value, e) => {
						const default_currency_id = parseInt(value.toString(), 10)
						if (isNaN(default_currency_id)) return
						handleState({ default_currency_id })
					}}
					name="default_currency_id"
				/>
			</div>
			<div className="flex items-center justify-start gap-3">
				<p className="py-4 font-normal text-[18px]">
					Customer LTV(used to track ROAS)
				</p>
				<div className="flex items-center max-w-[150px] w-full gap-2 justify-center px-3 py-2  w-[110px] rounded-xl h-fit bg-[#EAEEF3] ">
					<span className="text-[#272830]">$</span>
					<input
						value={state?.customer_ltv ?? 0}
						name="customer_ltv"
						onChange={(e) => {
							const customer_ltv = parseInt(e.target.value, 10)
							if (isNaN(customer_ltv)) return
							handleState({
								customer_ltv,
							})
						}}
						placeholder="enter here"
						className="opacity-70 text-md w-full bg-[#EAEEF3] focus:outline-none focus-within:outline-none hover:outline-none"
					/>
				</div>
			</div>
			<div className="flex flex-col items-start justify-start gap-3">
				<p className="py-4 font-normal text-[18px]">
					Average Conversion Rate from Video Views
				</p>
				<div className="flex items-center gap-10">
					<div className="flex flex-col gap-1">
						<p className="text-light text-[15px] pl-3">Enter Manually</p>
						<div className="flex items-center max-w-[150px] w-full gap-2 justify-center px-3 py-2  w-[110px] rounded-xl h-fit bg-[#EAEEF3] ">
							<span className="text-[#272830]">%</span>
							<input
								value={state?.acrvv ?? 0}
								name="acrvv"
								onChange={(e) => {
									const acrvv = parseInt(e.target.value, 10)
									if (isNaN(acrvv)) return
									handleState({ acrvv })
								}}
								placeholder="enter here"
								className="opacity-70 text-md w-full bg-[#EAEEF3] "
							/>
						</div>
					</div>

					<p className="text-[#272830] text-[15px] text-light">OR</p>
					<div className="flex flex-col gap-1">
						<p className="text-light text-[15px] pl-3">Choose From Presets</p>
						{/* <select className="flex border-0 outline-none opacity-70 items-center focus-within:outline-none focus:outline-none py-3 max-w-[150px] w-full gap-2 justify-center px-3  w-[110px] rounded-xl h-fit bg-[#EAEEF3] ">
							<option className='bg-[#EAEEF3] py-2 inline-block opacity-70 text-[#54A753ED]' value={0.03}>Low 0.03%</option>
							<option className='bg-[#EAEEF3] py-2 inline-block opacity-70 text-[#001CFF80]' value={0.07}>Medium 0.07%</option>
							<option className='bg-[#EAEEF3] py-2 inline-block opacity-70 text-[#FF6D6D]' value={0.11}>High 0.11%</option>
						</select> */}
						<CoversionRatePresets
							defaultValue={business?.data?.acrvv}
							value={state?.acrvv}
							setConversionRate={(value) => {
								handleState({ acrvv: value })
							}}
						/>
					</div>
				</div>
			</div>
		</Card>
	)
}
export default CustomerSettings
