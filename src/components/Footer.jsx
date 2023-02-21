import React from 'react';
import { logo } from '../assets';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
  FaBehance,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-4 md:max-w-container mx-auto py-[128px]">
        <div>
          <img src={logo} />
          <div className="text-2xl font-semibold mt-[26px]">Contact Us</div>
          <div className="text-base font-normal text-grayLight mt-4">
            <div className="">Call : +123 400 123</div>
            <p className="mt-[8px]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </p>
            <p className="text-black mt-4">Email: tienco201@mail.com</p>
          </div>
          <div className="flex justify-between items-center mt-4 text-primary text-[22px]">
            <div className="p-[14px] bg-orangeLight rounded-lg cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-[14px] bg-orangeLight rounded-lg cursor-pointer">
              <FaDribbble />
            </div>
            <div className="p-[14px] bg-orangeLight rounded-lg cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="p-[14px] bg-orangeLight rounded-lg cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-[14px] bg-orangeLight rounded-lg cursor-pointer">
              <FaBehance />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-black text-2xl font-semibold">Explore</div>
          <ul className="mt-8 flex flex-col gap-y-4">
            <li>
              <a href="#" className="itemFooter">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                About
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-black text-2xl font-semibold">Category</div>
          <ul className="mt-8 flex flex-col gap-y-4">
            <li>
              <a href="#" className="itemFooter">
                Design
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                Development
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                Business
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                Photography
              </a>
            </li>
            <li>
              <a href="#" className="itemFooter">
                Music
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-2xl">Subscribe</div>
          <p className="mt-8 text-grayLight text-base font-normal">
            Lorem Ipsum has been them an industry printer took a galley make
            book.
          </p>
          <form className="mt-8">
            <input
              type="text"
              className="w-full rounded-lg text-base bg-orangeLight p-4 outline-none"
              placeholder="Email here"
            />
            <button className="mt-6 bg-primary px-6 py-3 rounded-lg text-base font-medium text-white hover:bg-grayLight transition-all ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
