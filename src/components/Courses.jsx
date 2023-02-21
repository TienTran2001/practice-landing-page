import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import { courses } from '../data/Courses';
const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="bg-orangeLight py-[200px]">
      <div className="md:max-w-container mx-auto px-[30px] md:px-0">
        <h2 className=" text-[56px] font-semibold ">
          Most Popular <span className="text-primary ">Courses</span>
        </h2>
        <p className=" text-xl text-grayLight font-normal mt-4 ">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course}>
              <Card course={course} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
