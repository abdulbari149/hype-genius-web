import React from 'react';
import InfluencerSidePanel from './InfluencerSidePanel';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/store';
import Field from '@/components/Field';
import { Formik } from 'formik';
import { BiDollar } from 'react-icons/bi';
import { showPanel } from '../core/slice';
import CurrencySelector from './CurrencySelector';

type PaymentValues = { amount: number | null, currencyId: number | null }

const initialValues: PaymentValues = { 
  amount: null, 
  currencyId: null
}

const Payment = () => {
  const data = useSelector(
    (state: AppState) => state.influencers.influencer
  );
  const dispatch = useDispatch();
  if (!data) return <></>;

  const onSubmit = () => { };

  return (
    <InfluencerSidePanel>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <div className="flex flex-col items-start w-full gap-6 px-[50px] mt-4 mb-[90px]">
            <button
              onClick={() => {
                formik.resetForm();
                dispatch(
                  showPanel({ panel: 'detail' })
                );
              }}
              className="bg-[#CCCCCC] rounded-xl px-5 py-2 shadow-md mb-5"
            >
              Back
            </button>
            <div className="">
              <p className="text-[20px] text-[#272830] font-[600]">
                {data?.influencer.firstName
                  .charAt(0)
                  .toUpperCase() +
                  data?.influencer.firstName.slice(
                    1
                  ) +
                  ' ' +
                  data?.influencer.lastName}
              </p>
              <p className="text-[#697AFF] text-[17px]">
                {data?.influencer.email}{' '}
              </p>
              <p className="text-[17px] font-normal">
                {data?.influencer.phoneNumber}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-[17px]">
                Current Contract
              </p>
              <div className="flex items-center gap-3">
                <div className="">
                  <span className="text-[15px] font-normal text-[#000000] pr-1">
                    USD
                  </span>
                  <span className="text-[15px] text-[#21A400] font-[500]">
                    $
                    {parseFloat(
                      data.contract?.amount.toString(
                        10
                      ) ?? '0'
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
                    {data?.contract?.uploadFrequency
                      ?.toString()
                      .toUpperCase()}
                  </span>
                  /
                  <span className="text-[12px] font-normal text-[#000000]">
                    mo
                  </span>
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <p className="text-black text-[17px]">
                Amount Paid in Default Account Currency
                (CAD)
              </p>
              <div className='bg-[#ECF0F4] max-w-[180px] rounded-xl flex items-center px-4 py-2 gap-3'>
                <BiDollar size={22} />
                <input
                  type="text"
                  className="bg-transparent w-full focus-within:outline-none focus:outline-none hover:outline-none outline-none"
                  placeholder="enter here"
                  name="amount"
                  value={formik?.values?.amount ?? undefined}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className='space-y-2'>
              <p className="text-black text-[17px]">
                Currency to Display on Influencer End
              </p>
              <div className='flex gap-4'>
					<CurrencySelector
						handleChange={(value, e) => {
              if (!e){
                formik.setFieldValue('currencyId', value);
              } else {
                formik.handleChange('currencyId')(e);
              }
            }}
						value={formik.values.currencyId ?? 0}
					/>
              <div className='bg-[#ECF0F4] max-w-[180px] rounded-xl flex items-center px-4 py-2 gap-3'>
                <BiDollar size={22} />
                <input
                  type="text"
                  className="bg-transparent w-full focus-within:outline-none focus:outline-none hover:outline-none outline-none"
                  placeholder="enter here"
                  name="amount"
                  value={formik?.values?.amount ?? undefined}
                  onChange={formik.handleChange}
                />
              </div>
              </div>
            </div>

            <button className="bg-[#EF539E] px-4 py-2 rounded-xl text-white">
					Payment Confirmed
				</button>
          </div>
        )}
      </Formik>
    </InfluencerSidePanel>
  );
};

export default Payment;
