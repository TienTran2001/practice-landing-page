import React from 'react';
import Slider from 'react-slick';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white py-[200px]">
      <div className="md:max-w-container mx-auto px-[30px] md:px-0">
        <h2 className=" text-[40px] font-semibold ">
          Student <span className="text-primary ">Feedback</span>
        </h2>
        <p className=" text-xl text-grayLight font-normal mt-4 ">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="mt-[50px]">
          <Slider {...settings}>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
