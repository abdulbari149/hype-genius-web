import React from "react";
import Card from "../Card";
import { MdChevronRight } from 'react-icons/md'

interface SelectorProps {
	label: string;
}

const Selector: React.FC<SelectorProps> = ({ label }) => {
	return (
		<Card className="flex items-center gap-1 px-4 py-3 max-w-fit w-full rounded-[1rem]">
			<p className="text-[14px] font-normal">{label}</p>
      <MdChevronRight className="rotate-90" size={25} />
		</Card>
	);
};

export default Selector;
