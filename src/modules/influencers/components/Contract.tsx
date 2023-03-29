import Selector from "@/components/Selector";
import React, { useState } from "react";

const Contract = () => {
	const [isOneTime, setIsOneTime] = useState<"yes" | "no">("no");

	return (
		<div className="space-y-[15px] max-w-[70%]">
			<h3 className="text-[#272830] text-[18px] font-[600] ">Contract</h3>
			<div className="flex items-center gap-4">
				<p className="text-[#272830] text-[14px] opacity-80">
					Is this a one-time sponsorship?
				</p>
				<Selector
					className="focus:outline-none focus-within:outline-none hover:outline-none"
					style={{ backgroundColor: "#ECF0F4" }}
					type="option"
					options={[
						{ id: 1, label: "No", value: "no" },
						{ id: 2, label: "Yes", value: "yes" },
					]}
					onChange={(value) => {
						if (value === "yes" || value === "no") {
							setIsOneTime(value);
						}
					}}
				/>
			</div>

			{isOneTime === "no" ? (
				<div className="flex items-center gap-4" key={"monthly"}>
					<p className="text-[#272830] text-[14px] opacity-80">
						We pay sponsor them
					</p>
					<Selector
						className="focus:outline-none focus-within:outline-none hover:outline-none"
						style={{ backgroundColor: "#ECF0F4" }}
						type="option"
						options={[
							{ id: 1, label: "3x", value: 3 },
							{ id: 2, label: "2x", value: 2 },
						]}
					/>
					<p className="text-[#272830] text-[14px] opacity-80">
						per month & pay them
					</p>

					<input
						type="text"
						className="bg-[#ECF0F4] px-3 py-1 w-[120px] rounded-xl"
						placeholder="amount"
					/>

					<p className="text-[#272830] text-[14px] opacity-80">per video in</p>

					<Selector
						className="focus:outline-none focus-within:outline-none hover:outline-none"
						style={{ backgroundColor: "#ECF0F4" }}
						type="option"
						options={[
							{ id: 1, label: "USD", value: "usd" },
							{ id: 2, label: "CAD", value: "cad" },
							{ id: 2, label: "GBP", value: "gbp" },
						]}
					/>
				</div>
			) : (
				<div className="flex items-center gap-4" key={"onetime"}>
					<p className="text-[#272830] text-[14px] opacity-80">We will pay</p>

					<input
						type="text"
						className="bg-[#ECF0F4] px-3 py-1 w-[120px] rounded-xl"
						placeholder="amount"
					/>

					<p className="text-[#272830] text-[14px] opacity-80">
						For this video in
					</p>

					<Selector
						className="focus:outline-none focus-within:outline-none hover:outline-none"
						style={{ backgroundColor: "#ECF0F4" }}
						type="option"
						options={[
							{ id: 1, label: "USD", value: "usd" },
							{ id: 2, label: "CAD", value: "cad" },
							{ id: 2, label: "GBP", value: "gbp" },
						]}
					/>
				</div>
			)}
			<textarea
				className="w-full bg-[#ECF0F4] px-5 py-3 text-[14px] focus:outline-none focus-within:outline-none hover:outline-none rounded-xl"
				rows={5}
				cols={20}
				placeholder="Add notes regarding the contract..."
			></textarea>
		</div>
	);
};

export default Contract;
