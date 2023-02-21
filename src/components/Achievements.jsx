import React from 'react';
import { achievement } from '../assets';
import { SlGraduation, SlPeople } from 'react-icons/sl';
import { FiVideo } from 'react-icons/fi';

const Achievements = () => {
  return (
    <div className="w-full py-[110px]">
      <div className="md:max-w-container px-[30px] md:px-0 mx-auto grid md:grid-cols-2 ">
        <div className="py-4">
          <h2 className="text-4xl md:text-[40px] font-semibold mt-6">
            Our <span className="text-primary">Achievement</span>
          </h2>
          <p className="text-sm md:text-xl font-normal text-grayLight mt-6">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <div className="grid grid-cols-2 mt-[106px] gap-y-[62px]">
            <div className="flex gap-x-6 ">
              <div className=" p-6  rounded-lg bg-[#E9F8F3] flex">
                <SlGraduation className="text-[30px]  text-[#1A906B]" />
              </div>
              <div>
                <p className="text-[32px] font-semibold">300</p>
                <p className="text-xl font-normal text-grayLight">Instructor</p>
              </div>
            </div>
            <div className="flex gap-x-6 ">
              <div className=" p-6  rounded-lg bg-[#FFFAF5] flex">
                <FiVideo className="text-[30px]  text-[#FFC27A]" />
              </div>
              <div>
                <p className="text-[32px] font-semibold">10,000+</p>
                <p className="text-xl font-normal text-grayLight">Video</p>
              </div>
            </div>
            <div className="flex gap-x-6 ">
              <div className=" p-6  rounded-lg bg-[#FFEEF0] flex">
                <SlGraduation className="text-[30px]  text-[#ED4459]" />
              </div>
              <div>
                <p className="text-[32px] font-semibold">20,000+</p>
                <p className="text-xl font-normal text-grayLight">Student</p>
              </div>
            </div>
            <div className="flex gap-x-6 ">
              <div className=" p-6  rounded-lg bg-[#F0F7FF] flex">
                <SlPeople className="text-[30px]  text-[#0075FD]" />
              </div>
              <div>
                <p className="text-[32px] font-semibold">1,00,000+</p>
                <p className="text-xl font-normal text-grayLight">Users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-first md:order-last z-0 mx-auto bounceAnimation ">
          <img src={achievement} />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
