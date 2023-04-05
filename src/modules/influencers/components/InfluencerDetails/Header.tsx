import React from 'react';
import Tag from '@/components/Tag';

interface Props {
	influencer: { email: string, name: string, phoneNumber: string };
	deal: { perVideo: number | string, perMonth: string | number };
}

const Header: React.FC<Props> = ({ deal, influencer }) => {
	return (
		<div className="flex flex-row justify-between w-full">
			<div className="">
				<p className="text-[18px] text-[#272830] font-[600]">
					{influencer.name}
				</p>
				<p className="text-[#697AFF] text-[15px]">
					{influencer.email}{' '}
				</p>
				<p className="text-[15px] font-normal">
					{influencer.phoneNumber}
				</p>
			</div>

			<div className="space-y-2">
				<Tag
					text="Partner"
					color="#7187FB80"
					className="px-2 ml-auto w-fit"
				/>

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
