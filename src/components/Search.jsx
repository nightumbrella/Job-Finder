import React from "react";
import {
  AiOutlineSearch,
  AiOutlineCloseCircle,
  AiOutlineHome,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] ">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white  p-5 shadow-lg shadow-greyIsh">
          <div className="flex items-center gap-2 ">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search Job Here..."
            />
            <AiOutlineCloseCircle className="text-[25px] icon" />
          </div>

          <div className="flex items-center gap-2 ">
            <AiOutlineHome className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search Job Company..."
            />
            <AiOutlineCloseCircle className="text-[25px] icon" />
          </div>

          <div className="flex items-center gap-2 ">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search Job Location..."
            />
            <AiOutlineCloseCircle className="text-[25px] icon" />
          </div>

          <button className="bg-blueColor h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300 duration-300">
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold ">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold ">
            Type:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold ">
            Level:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Team-Lead</option>
            <option value="">Senior</option>
            <option value="">Middle</option>
            <option value="">Junior</option>
          </select>
        </div>
        <span className="text-[#a1a1a1] cursor-pointer hover:text-black duration-150">
          Clear All
        </span>
      </div>
    </div>
  );
};

export default Search;
