import React, { useState } from 'react';
import { logo, lock, hamburgerMenu, close } from '../assets';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClickToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="w-full h-header bg-white border-b">
      <div className="md:max-w-container px-[30px] md:px-0 mx-auto  h-full flex justify-between items-center">
        <img src={logo} className="object-contain" />
        <ul className="hidden md:flex flex-row items-center gap-x-12 font-medium text-base colorChild">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Course</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="hidden md:flex flex-wrap gap-x-6">
          <button className="flex items-center gap-x-3 font-medium hover:text-primary transition-all ">
            <img src={lock} />
            Login
          </button>
          <button className="font-medium text-md text-white rounded-md px-6 py-3 bg-primary  hover:bg-grayLight transition-all  ">
            Sign up for free
          </button>
        </div>
        <div className="cursor-pointer md:hidden" onClick={handleClickToggle}>
          <img src={toggleMenu ? close : hamburgerMenu} className="md:hidden" />
        </div>
      </div>
      {/* menu mobile */}
      {toggleMenu ? (
        <div className="space-y-12 z-50">
          <ul className="md:hidden flex flex-col items-center font-medium text-base menuMobile colorChild">
            <li className="w-full ">
              <a href="#">Home</a>
            </li>
            <li className="w-full ">
              <a href="#">About</a>
            </li>
            <li className="w-full ">
              <a href="#">Course</a>
            </li>
            <li className="w-full ">
              <a href="#">Blog</a>
            </li>
            <li className="w-full ">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="md:hidden flex flex-col gap-y-8 px-[30px]">
            <button className="flex  justify-center items-center gap-x-3 font-medium hover:text-primary transition-all ">
              <img src={lock} />
              Login
            </button>
            <button className="font-medium text-md text-white rounded-md px-6 py-3 bg-primary  hover:bg-grayLight transition-all  ">
              Sign up for free
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Navbar;
