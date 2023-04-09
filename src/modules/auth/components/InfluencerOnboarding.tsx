import React from 'react';
import logo from '@/assets/logos/hype-genius-logo-with-text.png';
import businessmanlogo from '@/assets/icons/businessman.png';
import startuplogo from '@/assets/icons/start-up.png';
import vector from '@/assets/icons/vector.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@/core/constants';
import { AuthApi } from '@/api/AuthApi';

const { GET_INFLUENCER_ONBOARDINGS } = QUERY_KEYS;

type Props = {
  token: string,
};

const InfluencerOnboarding: React.FC<Props> = ({ token }) => {
  const { data } = useQuery(GET_INFLUENCER_ONBOARDINGS, {
    queryFn: () => {
      return AuthApi.getInfluncerNewOnboardings(token);
    },
    suspense: true,
  });

  return (
    <div className="h-screen bg-[#F2F6FA]">
      <div className="pt-14 pl-20">
        <Image src={logo} alt="Hype-Genius-Logo" width={200} />
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <div>
          <p className="text-4xl py-2 font-semibold">
            You are already part of an organisation...
          </p>
        </div>
        <div>
          <p className="text-md py-3 font-semibold">
            Would you like to join a second one?
          </p>
        </div>
        <div
          key={data?.data.newPartnerShip.id}
          className="flex bg-[#DFDFDF]/70 rounded-xl w-fit py-1  px-5 items-center mt-14 cursor-pointer"
        >
          <Image src={businessmanlogo} alt="" width={25} />
          <p className="text-lg px-2 ">
            {data?.data.newPartnerShip.name}
          </p>
        </div>
        <div>
          <input
            className="w-[400px] bg-[#F2F6FA]  outline-none focus:outline-none placeholder:text-[10px] mt-2"
            placeholder="Current Partnerships"
          />
          <Image src={vector} alt="vector" width={400} />
        </div>
        {data?.data.currentPartnerShips.map((partnerShip) => (
          <div
            key={partnerShip.id}
            className="flex bg-[#DFDFDF]/70 rounded-xl w-fit py-1  px-5 items-center mt-7 cursor-pointer"
          >
            <Image src={startuplogo} alt="" width={25} />
            <p className="text-lg px-2">{partnerShip.name}</p>
          </div>
        ))}
        <button className="bg-[#EF539E] flex items-center px-4 py-2 text-[#F2F6FA] font-semibold rounded-xl mt-12">
          <p>Yes, Join!</p>
          <AiOutlineArrowRight color="white" />
        </button>
      </div>
    </div>
  );
};

export default InfluencerOnboarding;
