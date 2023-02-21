import React from 'react';
import CategoryCard from './CategoryCard';
import { BsVectorPen } from 'react-icons/bs';
import { TiHtml5 } from 'react-icons/ti';
import { TbMicrophone2, TbMusic } from 'react-icons/tb';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { WiSunrise } from 'react-icons/wi';
import { AiOutlineCamera } from 'react-icons/ai';
import { BiData } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';

const Categories = () => {
  return (
    <div className="bg-orangeLight py-[200px]">
      <div className="md:max-w-container mx-auto px-[30px] md:px-0">
        <h2 className=" text-[40px] font-semibold ">
          Most <span className="text-primary ">Popular Categories</span>
        </h2>
        <p className=" text-xl text-grayLight font-normal mt-4 ">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="grid grid-cols-4 mt-[50px] gap-6">
          <CategoryCard
            icon={
              <BsVectorPen
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Design'}
          />

          <CategoryCard
            icon={
              <TiHtml5
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Development'}
          />
          <CategoryCard
            icon={
              <TbMicrophone2
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Marketing'}
          />
          <CategoryCard
            icon={
              <HiOutlineBriefcase
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Business'}
          />

          <CategoryCard
            icon={
              <WiSunrise
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Lifestyle'}
          />
          <CategoryCard
            icon={
              <AiOutlineCamera
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Photography'}
          />
          <CategoryCard
            icon={
              <TbMusic
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Music'}
          />
          <CategoryCard
            icon={
              <BiData
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Data Science'}
          />

          <CategoryCard
            icon={
              <TiHtml5
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Personal Develop'}
          />
          <CategoryCard
            icon={
              <TiHtml5
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Health & Fitness'}
          />
          <CategoryCard
            icon={
              <MdAttachMoney
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Finance'}
          />
          <CategoryCard
            icon={
              <FaUniversity
                size={30}
                className="group-hover:text-black text-primary"
              />
            }
            title={'Teaching'}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
