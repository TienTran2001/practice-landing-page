import React from 'react';
import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from '../assets';

const Companies = () => {
  return (
    <div className="bg-white pt-[50px] pb-[80px]">
      <div className="md:max-w-container px-[30px]  mx-auto flex flex-col items-center gap-y-[30px] ">
        <h2 className="text-blue text-4xl font-bold  ">
          Trusted by over 25,000 teams around the world.
        </h2>
        <p className="text-2xl font-normal text-blue  ">
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>
        <div className="flex justify-center items-center md:gap-x-[84px] flex-wrap gap-y-8 md:gap-y-0">
          <img src={companyLogo1} alt="" />
          <img src={companyLogo2} alt="" />
          <img src={companyLogo3} alt="" />
          <img src={companyLogo4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
