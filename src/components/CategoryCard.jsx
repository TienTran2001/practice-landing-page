import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const CategoryCard = ({ icon, title }) => {
  return (
    <div className="group flex items-center justify-between px-[30px] py-4 rounded-lg shadow-pri hover:border-primary border cursor-pointer ">
      <div className="flex items-center gap-x-[20px] text-[20px] font-medium">
        {icon}
        <p>{title}</p>
      </div>
      <div className="p-4 rounded-lg group-hover:bg-primary text-primary group-hover:text-white transition-all">
        <BsArrowUpRight className="text-[20px]" />
      </div>
    </div>
  );
};

export default CategoryCard;
