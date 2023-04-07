import React from 'react'
import { CurrencyApi } from '@/api/CurrencyApi';
import Selector from '@/components/Selector';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/core/constants';
const { GET_CURRENCY_LIST } = QUERY_KEYS;
type Props = {
  value: number;
  handleChange: (value: number | string, e?: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CurrencySelector: React.FC<Props> = ({ value, handleChange }) => {

  const { data } = useQuery(GET_CURRENCY_LIST, {
		queryFn: CurrencyApi.getCurrentList,
		suspense: true,
		onSuccess(data) {
			handleChange(data.data[0].id);
		},
	});

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
      name="currencyId"
      onChange={handleChange}
      value={value}
    />
  )
}

export default CurrencySelector