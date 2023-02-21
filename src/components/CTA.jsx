import React from 'react';
import { cta } from '../assets';

const CTA = () => {
  return (
    <div className="w-full py-[110px] bg-orangeLight">
      <div className="md:max-w-container px-[30px] md:px-0 mx-auto grid md:grid-cols-2 items-center">
        <div className="py-4">
          <h2 className="text-4xl md:text-[40px] font-semibold mt-6 md:leading-[48px]">
            Join <span className="text-primary">World's largest</span> learning
            platform today
          </h2>
          <p className="text-sm md:text-2xl font-normal text-black mt-6">
            Start learning by registering for free
          </p>
          <button className="mt-[62px] rounded-lg px-6 py-3 bg-primary text-white text-base font-medium hover:bg-grayLight transition-all">
            Sign up for free
          </button>
        </div>
        <div className="order-first z-0">
          <img className="bounceAnimation" src={cta} alt="cta" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
