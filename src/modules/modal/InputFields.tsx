import React from "react";

const InputFields = () => {
  return (
    <>
      <div className="flex gap-20 py-4">
        <div className="flex flex-col">
          <div className={"flex flex-col gap-3 max-w-xs w-[220px] "}>
            <label htmlFor="Name" className="font-semibold text-xl">
              Name
            </label>
            <div className="opacity-70 py-1 px-4 rounded-xl w-full shadow-xl flex items-center bg-[#ECF0F4]">
              <input
                className="font-normal rounded-xl px-1 text-[16px] w-full border-none outline-none hover:border-none bg-[#ECF0F4] hover:outline-none focus:outline-none focus-within:outline-none"
                placeholder="Joe Shmoe"
                required={true}
              />
            </div>
          </div>
        </div>

        <div className={"flex flex-col gap-3 max-w-xs w-[220px] "}>
          <label htmlFor="Name" className="font-semibold  text-xl">
            Email
          </label>
          <div className="opacity-70 py-1 px-4 rounded-xl w-full shadow-xl flex items-center bg-[#ECF0F4]">
            <input
              className="font-normal rounded-xl px-1 text-[16px] w-full border-none outline-none hover:border-none bg-[#ECF0F4] hover:outline-none focus:outline-none focus-within:outline-none"
              placeholder="joeshmoe@email.com"
              required={true}
            />
          </div>
        </div>
        <div className={"flex flex-col gap-3 max-w-xs w-[220px] "}>
          <label htmlFor="Name" className="font-semibold  text-xl">
            Phone Number
          </label>
          <div className="opacity-70 py-1 px-4 rounded-xl w-full shadow-xl flex items-center bg-[#ECF0F4]">
            <input
              className="font-normal rounded-xl px-1 text-[16px] w-full border-none outline-none hover:border-none bg-[#ECF0F4] hover:outline-none focus:outline-none focus-within:outline-none"
              placeholder="123 - 456 - 7890"
              type={"tel"}
              required={true}
            />
          </div>
        </div>
      </div>

      <div className={"flex flex-col  w-[70%]  mt-4 gap-3"}>
        <label htmlFor="Name" className="font-semibold  text-xl">
          Channel Link
        </label>
        <div className="opacity-70 py-1 px-4 rounded-xl w-full shadow-xl flex items-center bg-[#ECF0F4]">
          <input
            className="font-normal rounded-xl px-1 text-[16px] w-full border-none outline-none hover:border-none bg-[#ECF0F4] hover:outline-none focus:outline-none focus-within:outline-none"
            placeholder="insert link"
            required={true}
          />
        </div>
      </div>
    </>
  );
};

export default InputFields;
