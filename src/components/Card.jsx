import React from 'react';
import StarRating from './StarRating';

const Card = ({ course }) => {
  return (
    <div className="mt-[50px] bg-white drop-shadow-md rounded-[22px] overflow-hidden mx-3 pb-[22px]">
      <img src={course.linkImg} className="h-40 w-full object-cover" />
      <div className="p-4 border border-b">
        <h2 className="text-xl font-medium truncate">{course.title}</h2>
        <StarRating rating={course.rating} className="mt-5" />
      </div>
      <div className="px-4 pt-[22px] pb-0 font-semibold text-2xl">
        {course.price}
      </div>
      <div className="absolute top-5 left-6 bg-gray-100 px-[13px] py-[6px] rounded-md text-base font-medium">
        {course.category}
      </div>
    </div>
  );
};

export default Card;
