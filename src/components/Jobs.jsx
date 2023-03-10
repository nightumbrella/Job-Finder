import React from "react";
import { BiTimeFive } from "react-icons/bi";
import logo from "../images/3docean.png";
import logo1 from "../images/dr-web.png";
import logo2 from "../images/instant-shift.png";

// Data array
const Data = [
  {
    id: 1,
    image: logo,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
  {
    id: 2,
    image: logo1,
    title: "UI Designer",
    time: "Now",
    location: "Manchester",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
  {
    id: 3,
    image: logo2,
    title: "AI Developer",
    time: "14Hrs",
    location: "Tokyo",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
  {
    id: 4,
    image: logo2,
    title: "DevOps",
    time: "Yesterday",
    location: "Singapore",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
  {
    id: 5,
    image: logo2,
    title: "DevOps",
    time: "Yesterday",
    location: "Singapore",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
  {
    id: 6,
    image: logo2,
    title: "DevOps",
    time: "Yesterday",
    location: "Singapore",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
  {
    id: 7,
    image: logo2,
    title: "DevOps",
    time: "Yesterday",
    location: "Singapore",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
  {
    id: 8,
    image: logo1,
    title: "Data Scientist",
    time: "5Hrs",
    location: "Singapore",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
  {
    id: 9,
    image: logo2,
    title: "DevOps",
    time: "Yesterday",
    location: "Singapore",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
  {
    id: 10,
    image: logo,
    title: "Web Developer",
    time: "10Hrs",
    location: "Paris",
    desc: "Lorem ipsum, dolor sit amet consectetur elit.",
    company: "Linux Co.",
  },
];

// Job Grid
const Jobs = () => {
  return (
    <div className="flex gap-10 justify-center flex-wrap items-center py-10">
      {Data?.map((item) => {
        const { id, image, title, time, location, desc, company } = item;
        return (
          <div
            key={id}
            className=" group singleJob group/item w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 duration-200"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-textColor group-hover:text-white font-medium">
                {title}
              </h1>
              <span className="flex items-center text-[14px] text-[#ccc] gap-1">
                <BiTimeFive />
                {time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>
            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]">
              {desc}
            </p>
            <div className="flex items-center gap-2">
              <img src={image} alt="logo" className="w-[40%]" />
              <span className="text-[14px] py-[1rem] group-hover:text-white">
                {company}
              </span>
            </div>

            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white  group-hover:text-black  duration-200">
              Apply Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
