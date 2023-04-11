import React, { useMemo, useRef } from 'react';
import InfluencerSidePanel from './InfluencerSidePanel';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/store';
import {
  Formik,
  FormikComputedProps,
  FormikConfig,
  FormikHandlers,
  FormikProps,
} from 'formik';
import { BiDollar } from 'react-icons/bi';
import { showPanel } from '../core/slice';
import CurrencySelector from './CurrencySelector';
import { useVideoUploads } from '../hooks/useVideoUploads';
import Selector from '@/components/Selector';
import { useCreatePayment } from '../hooks/useCreatePayment';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import {
  CreatePaymentData,
  createPaymentSchema,
  paymentDataSchema,
} from '../core/schema';
import { ZodError, z } from 'zod';
import { toast } from 'react-toastify';
import { useMyBusiness } from '@/modules/settings/hooks/useMyBusiness';
import VideoSelector from './VideoSelector';

const initialValues: CreatePaymentData = {
  business_amount: 0,
  channel_amount: 0,
  channel_currency_id: undefined,
  business_currency_id: undefined,
  video_id: undefined,
};

const Payment = () => {
  const { data: myBusiness } = useMyBusiness({});

  const data = useSelector(
    (state: AppState) => state.influencers.influencer
  );
  const dispatch = useDispatch();


  const createPayment = useCreatePayment();

  if (!data) return <></>;

  const onSubmit: FormikConfig<CreatePaymentData>['onSubmit'] = async (
    values,
    helpers
  ) => {
    if (!myBusiness || !myBusiness?.data?.default_currency?.id) return;
    try { 
      const data = await paymentDataSchema.parseAsync({
        ...values,
        business_currency_id: myBusiness.data.default_currency.id,
        channel_currency_id: values?.channel_currency_id ? parseInt(values?.channel_currency_id.toString(), 10) : undefined,
      });
      await createPayment.mutateAsync(data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
        toast.error(error.errors[0].message);
      } else if (error instanceof Error) {
        toast.error(error.message);
      }
      helpers.setSubmitting(false);
    }
  };

  return (
    <InfluencerSidePanel>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateSchema={toFormikValidationSchema(
          createPaymentSchema
        )}
      >
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
            <div className="space-y-2">
              <p className="text-black text-[17px]">
                Amount Paid in Default Account Currency
                (
                {myBusiness?.data?.default_currency.name.toUpperCase()}
                )
              </p>
              <div className="bg-[#ECF0F4] max-w-[180px] rounded-xl flex items-center px-4 py-2 gap-3">
                <BiDollar size={22} />
                <input
                  type="text"
                  className="w-full bg-transparent outline-none focus-within:outline-none focus:outline-none hover:outline-none"
                  placeholder="enter here"
                  name="business_amount"
                  value={
                    formik?.values
                      ?.business_amount ??
                    undefined
                  }
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (isNaN(value)) return;
                    formik.handleChange(e)
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-black text-[17px]">
                Currency to Display on Influencer End
              </p>
              <div className="flex gap-4">
                <CurrencySelector
                  handleChange={(value, e) => {
                    if (!e) {
                      formik.setFieldValue(
                        'channel_currency_id',
                        value
                      );
                      console.log(value);
                    } else {
                      formik.handleChange(
                        'channel_currency_id'
                      )(e);
                    }
                  }}
                  value={
                    formik.values
                      .channel_currency_id ?? 0
                  }
                  name={'channel_currency_id'}
                />
                <div className="bg-[#ECF0F4] max-w-[180px] rounded-xl flex items-center px-4 py-2 gap-3">
                  <BiDollar size={22} />
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none focus-within:outline-none focus:outline-none hover:outline-none"
                    placeholder="enter here"
                    name="channel_amount"
                    value={
                      formik?.values
                        ?.channel_amount ??
                      undefined
                    }
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      if (isNaN(value)) return;
                      formik.handleChange(e)
                    }}
                  />
                </div>
              </div>
            </div>
            <VideoSelector
              name={"video_id"}
              value={formik.values.video_id ?? 0}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
              type="submit"
              className="bg-[#EF539E] px-4 py-2 rounded-xl text-white"
            >
              Payment Confirmed
            </button>
          </div>
        )}
      </Formik>
    </InfluencerSidePanel>
  );
};

export default Payment;
