import Image from "next/image";
import React from "react";
import { useState } from "react";

const Contract = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="flex flex-col">
      <p className="text-xl font-semibold py-7 ">Contract</p>
      <div className="flex gap-6">
        <p className="opacity-70">Is this a one-time sponsorship?</p>

        <select
          id="currency"
          value={selectedOption}
          onChange={handleOptionChange}
          className=" bg-[#ECF0F4] opacity-70 rounded-lg py-1 font-semibold"
        >
          <option value="USD">No</option>
          <option value="CAD">Yes</option>
        </select>
      </div>
      <div className="flex gap-6 items-center py-4">
        <p className="opacity-70">We pay sponsor them </p>
        <select
          id="zoom"
          value={selectedOption}
          onChange={handleOptionChange}
          className=" bg-[#ECF0F4] opacity-70 rounded-lg py-1 font-semibold"
        >
          <option value="1x">1x</option>
          <option value="2x">2x</option>
          <option value="3x">3x</option>
          <option value="4x">4x</option>
          <option value="5x">5x</option>
          <option value="6x">6x</option>
          <option value="7x">7x</option>
          <option value="8x">8x</option>
          <option value="9x">9x</option>
          <option value="10x">10x</option>
        </select>
        <p className="opacity-70">per month & pay them </p>
        <input
          type={"number"}
          placeholder="amount"
          className="rounded-lg opacity-70 bg-[#ECF0F4] text-center w-[95px] h-[30px]"
        />
        <p className="opacity-70">per video&nbsp;in</p>

        <select
          id="currency"
          value={selectedOption}
          onChange={handleOptionChange}
          className=" bg-[#ECF0F4] opacity-70 rounded-lg py-1 font-semibold "
        >
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="GBP">GBP</option>
          <option value="AUD">AUD</option>
        </select>
      </div>
      <div className="flex ">
        <div
          className="relative mb-3 w-[500px] bg-[#ECF0F4] opacity-70 shadow-xl "
          data-te-input-wrapper-init
        >
          <textarea
            className="peer block text-black min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
            id="exampleFormControlTextarea1"
            rows={4}
            placeholder="Add notes regarding the contract..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contract;
