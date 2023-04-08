import React from 'react';
import Tag from '@/components/Tag';
import { TagType } from '../../core/types';

interface Props {
	influencer: { email: string, name: string, phoneNumber: string };
	deal: { perVideo: number | string, perMonth: string | number };
	tag: TagType | null
}

const Header: React.FC<Props> = ({ deal, influencer, tag }) => {
	return (
		<div className="flex flex-row justify-between w-full">
			<div className="">
				<p className="text-[20px] text-[#272830] font-[600]">
					{influencer.name.charAt(0).toUpperCase() + influencer.name.slice(1)}
				</p>
				<p className="text-[#697AFF] text-[17px]">
					{influencer.email}{' '}
				</p>
				<p className="text-[17px] font-normal">
					{influencer.phoneNumber}
				</p>
			</div>

			<div className="space-y-2">
				{!!tag ?
					<Tag
						{...tag}
						className="px-2 ml-auto w-fit"
					/>
					: null}


				<div className="flex items-center gap-3">
					<div className="">
						<span className="text-[15px] text-[#21A400] font-[500]">
							$
							{parseFloat(
								deal?.perVideo.toString(10) ?? '0'
							).toFixed(2)}
						</span>
						/
						<span className="text-[12px] font-normal text-[#000000]">
							video
						</span>
					</div>
					<span className="font-normal">|</span>
					<div className="">
						<span className="text-[15px] text-[#21A400] font-[500] tracking-[1px]">
							{deal?.perMonth?.toString().toUpperCase()}
						</span>
						/
						<span className="text-[12px] font-normal text-[#000000]">
							mo
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
