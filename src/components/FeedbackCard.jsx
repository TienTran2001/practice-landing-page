import React from 'react';
import { avatar, quotationMark } from '../assets';
const FeedbackCard = () => {
  return (
    <div className="bg-white p-8  rounded-[30px] shadow-md m-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-[10px]  ">
          <img src={avatar} />
          <div className="">
            <p className="text-2xl font-semibold ">Jenny Wilson</p>
            <p className="text-base font-normal">UI-UX Designer</p>
          </div>
        </div>
        <img src={quotationMark} className="w-[44px] object-contain" />
      </div>
      <p className="text-base font-normal mt-7">
        Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam
        sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla
        massa, hendrerit vestibulum gravida in, feugiat auctor felis. <br />
        <br /> Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
        pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
      </p>
    </div>
  );
};

export default FeedbackCard;
