import React from 'react';
import { heroImg } from '../assets';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className="w-full py-[110px]">
      <div className="md:max-w-container px-[30px] md:px-0 mx-auto grid md:grid-cols-2 ">
        <div className="py-4">
          <p className="uppercase text-primary text-base md:text-2xl font-semibold ">
            Start to success
          </p>
          <h1 className="text-4xl md:text-[56px] font-semibold mt-6 md:leading-[72px]">
            Access To <span className="text-primary">5000+</span> Courses from{' '}
            <span className="text-primary">300</span> Instructors <br />&
            Institutions
          </h1>
          <p className="text-sm md:text-xl font-normal text-grayLight mt-6">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <form className="mt-8 max-w-[700px] p-4 shadow-pri rounded-lg flex justify-between ">
            <input
              className="outline-none border-none text-base w-full"
              type="text"
              placeholder="what do want to learn?"
            />
            <button>
              <AiOutlineSearch className="text-xl " />
            </button>
          </form>
        </div>
        <div className="order-first md:order-last z-0 ">
          <img className="bounceAnimation" src={heroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
