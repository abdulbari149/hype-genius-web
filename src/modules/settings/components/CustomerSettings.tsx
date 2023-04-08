import React, { useState } from 'react';
import Card from '@/components/Card';
import CurrencySelector from '@/modules/influencers/components/CurrencySelector';
import Select from 'react-select';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

const CustomerSettings: React.FC<{}> = () => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [currencyId, setCurrencyId] = useState(0);

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
					value={currencyId}
					handleChange={(value, e) =>
						setCurrencyId(parseInt(value.toString()))
					}
				/>
			</div>
			<div className="flex items-center justify-start gap-3">
				<p className="py-4 font-normal text-[18px]">
					Customer LTV(used to track ROAS)
				</p>
				<div className="flex items-center max-w-[150px] w-full gap-2 justify-center px-3 py-2  w-[110px] rounded-xl h-fit bg-[#EAEEF3] ">
					<span className="text-[#272830]">$</span>
					<input
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
						<p className="text-light text-[15px] pl-3">
							Enter Manually
						</p>
						<div className="flex items-center max-w-[150px] w-full gap-2 justify-center px-3 py-2  w-[110px] rounded-xl h-fit bg-[#EAEEF3] ">
							<span className="text-[#272830]">%</span>
							<input
								placeholder="enter here"
								className="opacity-70 text-md w-full bg-[#EAEEF3] "
							/>
						</div>
					</div>

					<p className="text-[#272830] text-[15px] text-light">
						OR
					</p>
					<div className="flex flex-col gap-1">
						<p className="text-light text-[15px] pl-3">
							Choose From Presets
						</p>
						{/* <select className="flex border-0 outline-none opacity-70 items-center focus-within:outline-none focus:outline-none py-3 max-w-[150px] w-full gap-2 justify-center px-3  w-[110px] rounded-xl h-fit bg-[#EAEEF3] ">
							<option className='bg-[#EAEEF3] py-2 inline-block opacity-70 text-[#54A753ED]' value={0.03}>Low 0.03%</option>
							<option className='bg-[#EAEEF3] py-2 inline-block opacity-70 text-[#001CFF80]' value={0.07}>Medium 0.07%</option>
							<option className='bg-[#EAEEF3] py-2 inline-block opacity-70 text-[#FF6D6D]' value={0.11}>High 0.11%</option>
						</select> */}
						<Select
							defaultValue={selectedOption}
							onChange={(value) => {
								setSelectedOption(value)
							}}
							className='ml-5'
							styles={{
								control: (base) => ({
								  ...base,
									backgroundColor: '#EAEEF3',
									display: 'flex',
									borderRadius: 10,
									paddingLeft: 5,
									border: 0,
									outline: 0,
									":focus": {
										border: 0,
										outline: 0,
									},
									":focus-within": {
										border: 0,
										outline: 0,
									},
									":hover": {
										border: 0,
										outline: 0,
									}
								}),
								option(base, props) {
									return { 
										backgroundColor: '#EAEEF3',
									}
								},
							}}
							components={{
								IndicatorSeparator: () => null
							}}
							placeholder="Select"
							options={[
								{
									label: 'Medium 0.07%',
									options: ['0.07'],
								},
								{
									label: 'Low 0.03%',
									options: ['0.03'],
								},
							]}
							isMulti={false}
							defaultMenuIsOpen
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};
export default CustomerSettings;
