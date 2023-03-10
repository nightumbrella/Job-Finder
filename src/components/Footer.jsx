import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            About Us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Account
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Support Center
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Feedback
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Contact Us
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1] ">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">Promo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Req Demo
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] ">
            Careers
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <div className="grid gap-3">
          <small className="text-white text-[14px]">InfoTest@gmail.com</small>
          <div className="flex items-center gap-4">
            <AiFillInstagram className="bg-white box-content p-[5px] w-[20px] h-[20px] rounded-full icon text-blueColor " />
            <AiFillTwitterCircle className="bg-white box-content p-[5px] w-[20px] h-[20px] rounded-full icon text-blueColor " />
            <MdFacebook className="bg-white box-content p-[5px] w-[20px] h-[20px] rounded-full icon text-blueColor " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
