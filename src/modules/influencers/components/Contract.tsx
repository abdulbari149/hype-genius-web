import { CurrencyApi } from '@/api/CurrencyApi';
import Selector from '@/components/Selector';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/core/constants';
import { HandleChangeType } from './AddInfluencer/Form';
const { GET_CURRENCY_LIST } = QUERY_KEYS;
interface Props {
	data: {
		isOneTime: string,
		amount: number,
		uploadFrequency: string,
		currencyId: number,
		note: string,
	};
	handleChange: HandleChangeType;
}

const Contract: React.FC<Props> = (props) => {
	const { data } = useQuery(GET_CURRENCY_LIST, {
		queryFn: CurrencyApi.getCurrentList,
		suspense: true,
		onSuccess(data) {
			props.handleChange('currencyId', data.data[0].id);
		},
	});

	return (
		<div className="space-y-[15px] max-w-[80%]">
			<h3 className="text-[#272830] text-[18px] font-[600] ">
				Contract
			</h3>
			<div className="flex items-center gap-4">
				<p className="text-[#272830] text-[14px] opacity-80">
					Is this a one-time sponsorship?
				</p>
				<Selector
					className="focus:outline-none focus-within:outline-none hover:outline-none"
					style={{ backgroundColor: '#ECF0F4' }}
					type="option"
					options={[
						{ id: 1, label: 'No', value: 'no' },
						{ id: 2, label: 'Yes', value: 'yes' },
					]}
					onChange={(value) => {
						props.handleChange('isOneTime', value);
					}}
					value={props.data.isOneTime}
					name="isOneTime"
				/>
			</div>

			{props.data.isOneTime === 'no' ? (
				<div className="flex items-center gap-4" key={'monthly'}>
					<p className="text-[#272830] text-[14px] opacity-80">
						We pay sponsor them
					</p>
					<Selector
						className="focus:outline-none focus-within:outline-none hover:outline-none"
						style={{ backgroundColor: '#ECF0F4' }}
						type="option"
						options={[
							{ id: 1, label: '1x', value: '1x' },
							{ id: 2, label: '2x', value: '2x' },
							{ id: 3, label: '3x', value: '3x' },
							{ id: 4, label: '4x', value: '4x' },
							{ id: 5, label: '5x', value: '5x' },
							{ id: 6, label: '6x', value: '6x' },
							{ id: 7, label: '7x', value: '7x' },
							{ id: 8, label: '8x', value: '8x' },
							{ id: 9, label: '9x', value: '9x' },
							{ id: 10, label: '10x', value: '10x' },
							{
								id: 11,
								label: 'Unlimited',
								value: 'unlimited',
							},
						]}
						value={props.data.uploadFrequency}
						onChange={(value, e) => {
							props.handleChange('uploadFrequency', value);
						}}
					/>
					<p className="text-[#272830] text-[14px] opacity-80">
						per month & pay them
					</p>

					<input
						type="text"
						className="bg-[#ECF0F4] px-3 py-1 w-[120px] rounded-xl"
						placeholder="amount"
						name="amount"
						value={props.data.amount}
						onChange={(e) => {
							props.handleChange('amount', e.target.value);
						}}
					/>

					<p className="text-[#272830] text-[14px] opacity-80">
						per video in
					</p>

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
						onChange={(value) => {
							props.handleChange('currencyId', value);
						}}
						value={props.data.currencyId}
					/>
				</div>
			) : (
				<div className="flex items-center gap-4" key={'onetime'}>
					<p className="text-[#272830] text-[14px] opacity-80">
						We will pay
					</p>

					<input
						type="text"
						className="bg-[#ECF0F4] px-3 py-1 w-[120px] rounded-xl"
						placeholder="amount"
						name="amount"
						value={props.data.amount}
						onChange={(e) => {
							props.handleChange('amount', e.target.value);
						}}
					/>

					<p className="text-[#272830] text-[14px] opacity-80">
						For this video in
					</p>

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
						onChange={(value) => {
							props.handleChange('currencyId', value);
						}}
						value={props.data.currencyId}
					/>
				</div>
			)}
			<textarea
				className="w-full bg-[#ECF0F4] px-5 py-3 text-[14px] focus:outline-none focus-within:outline-none hover:outline-none rounded-xl"
				rows={5}
				cols={20}
				placeholder="Add notes regarding the contract..."
				value={props.data.note}
				name="note"
				onChange={(e) => props.handleChange('note', e.target.value)}
			></textarea>
		</div>
	);
};
export type ContractProps = Props;
export default Contract;
