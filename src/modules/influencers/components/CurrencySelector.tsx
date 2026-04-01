import React, { useEffect } from 'react'
import { CurrencyApi } from '@/api/CurrencyApi'
import Selector from '@/components/Selector'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from 'src/core/constants'
const { GET_CURRENCY_LIST } = QUERY_KEYS
type Props = {
	name?: string
	value: number
	handleChange: (
		value: number | string,
		e?: React.ChangeEvent<HTMLSelectElement>,
	) => void
}

const CurrencySelector: React.FC<Props> = ({
	name = 'currencyId',
	value,
	handleChange,
}) => {
	const { data } = useQuery({
		queryKey: [GET_CURRENCY_LIST],
		queryFn: CurrencyApi.getCurrentList,
		suspense: true,
		retry: false,
		cacheTime: 24 * 60 * 60 * 7,
	})

	useEffect(() => {
		if (data) {
			console.log('Setting Currency')
			handleChange(data.data[0].id)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	return (
		<Selector
			className="focus:outline-none focus-within:outline-none hover:outline-none"
			style={{ backgroundColor: '#ECF0F4' }}
			type="option"
			options={
				data?.data.map((item) => ({
					id: item.id,
					label: item.name.toUpperCase(),
					value: item.id,
				})) ?? []
			}
			name={name}
			onChange={handleChange}
			value={value}
		/>
	)
}

export default CurrencySelector
