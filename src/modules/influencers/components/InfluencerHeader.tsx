import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const InfluencersHeader: React.FC<{ openAdd: () => void }> = ({ openAdd }) => {
	const [filter, setFilter] = useState<string | undefined>(undefined)

	return (
		<div className="flex flex-row justify-between w-full px-5 my-5">
			<button
				onClick={openAdd}
				className="px-3 py-2 flex h-fit gap-2 items-center text-[13px] w-fit text-white bg-[#EF539E] rounded-xl"
			>
				<AiOutlinePlus size={15} />
				Add Influencer
			</button>

			<select
				className="pl-3 pr-8  py-2 w-fit text-[#272830] text-[14px] font-normal bg-[#F8FAFC] rounded-xl"
				style={{
					boxShadow:
						'0px 2.69388px 69.3673px rgba(50, 50, 71, 0.01), 0px 2.69388px 39.7347px rgba(50, 50, 71, 0.06)',
					appearance: 'none',
					MozAppearance: 'none',
					WebkitAppearance: 'none',
					backgroundImage: `url(/downArrow.png)`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'calc(100% - 10px) 16px',
					backgroundSize: '12px',
				}}
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				defaultValue={'Filters'}
			>
				<option value={undefined}>Filters</option>
				<option>Tags</option>
				<option>ROAS</option>
			</select>
		</div>
	)
}

export default InfluencersHeader
