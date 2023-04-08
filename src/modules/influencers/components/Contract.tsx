import Selector from '@/components/Selector';
import React from 'react';
import { QUERY_KEYS } from 'src/core/constants';
import CurrencySelector from './CurrencySelector';
import { ContractState, HandleChangeType } from '../core/types';

interface Props {
	data: Required<Omit<ContractState, 'onboarding_id'>>;
	handleChange: HandleChangeType;
}

const Contract: React.FC<Props> = (props) => {
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
						props.handleChange('is_one_time', value);
					}}
					value={props.data.is_one_time}
					name="isOneTime"
				/>
			</div>

			{props.data.is_one_time === 'no' ? (
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
						value={props.data.upload_frequency}
						onChange={(value, e) => {
							props.handleChange('upload_frequency', value);
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
							const value = parseInt(e.target.value);
							if (!isNaN(value)){ 
								props.handleChange('amount', value);
							}
						}}
					/>

					<p className="text-[#272830] text-[14px] opacity-80">
						per video in
					</p>

					<CurrencySelector
						handleChange={(value) =>
							props.handleChange('currency_id', parseInt(value.toString()))
						}
						value={props.data.currency_id}
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
							const value = parseInt(e.target.value);
							if (!isNaN(value)){ 
								props.handleChange('amount', value);
							}
						}}
					/>

					<p className="text-[#272830] text-[14px] opacity-80">
						For this video in
					</p>

					<CurrencySelector
						handleChange={(value) =>
							props.handleChange('currency_id', parseInt(value.toString()))
						}
						value={props.data.currency_id}
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
