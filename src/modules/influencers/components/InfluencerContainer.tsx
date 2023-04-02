import React, { Suspense, useState } from "react";
import InfluencersHeader from "./InfluencerHeader";
import AddInfluencerModal from "./AddInfluencer/Modal";
import InfluencerTable from "./InfluencerTable";
import Loading from "@/components/Loading";

interface Props {
	selectedInfluencer: number | null;
	setSelectedInfluencer: React.Dispatch<React.SetStateAction<number | null>>;
}

const InfluencerContainer: React.FC<Props> = ({
	selectedInfluencer,
	setSelectedInfluencer,
}) => {
	const [isAddOpen, setIsAddOpen] = useState(false);
	// const [currentPage, setCurrentPage] = useState(1);

	function closeAdd() {
		setIsAddOpen(false);
	}

	function openAdd() {
		setIsAddOpen(true);
	}

	return (
		<div
			className={`h-screen w-full flex flex-col w-full overflow-hidden ${
				selectedInfluencer === null ? `col-span-full` : `col-span-5`
			}`}
		>
			<InfluencersHeader openAdd={openAdd} />
			<div className="w-full overflow-y-scroll custom-scroll px-[10px]">
				<Suspense fallback={<Loading />}>
					<InfluencerTable setSelectedInfluencer={setSelectedInfluencer} />
				</Suspense>
			</div>
			{/* <div className="flex items-center gap-4 min-h-[50px] mb-[15px] mr-[10px] ml-auto">
				<p>Pages</p>

				{Array(3)
					.fill(0)
					.map((p, i) => i + 1)
					.map((page, index) => {
						return (
							<div
								onClick={() => setCurrentPage(page)}
								className={`px-2 py-[2px] rounded-lg cursor-pointer text-center ${
									currentPage === page ? "bg-[#D9D9D9]" : ""
								}`}
								key={page}
							>
								{page}
							</div>
						);
					})}
			</div> */}
			<AddInfluencerModal isOpen={isAddOpen} handleClose={closeAdd} />
		</div>
	);
};

export default InfluencerContainer;
