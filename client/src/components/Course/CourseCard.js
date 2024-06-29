import Ratings from "../Admin/Course/Ratings.js";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";


const CourseCard= ({ item, isProfile }) => {
  return (
    <Link
      to={!isProfile ? `/courses/${item._id}` : `course-access/${item._id}`}
    >
      <div className="w-full min-h-[35vh]  backdrop-blur border  border-[#00000015]  rounded-lg p-3 shadow-sm ">
        <img
          src={item?.thumbnail?.url}
          width={500}
          height={300}
          objectFit="contain"
          className="rounded w-full"
          alt=""
        />
        <br />
        <h1 className="font-Poppins text-[16px] text-black ">
          {item.name}
        </h1>
        <div className="w-full flex items-center justify-between pt-2">
          <Ratings rating={item.ratings} />
          <h5
            className={`text-black  ${
              isProfile && "hidden 800px:inline"
            }`}
          >
            {item.purchased} Students
          </h5>
        </div>
        <div className="w-full flex items-center justify-between pt-3">
          <div className="flex">
            <h3 className="text-black ">
              {item.price === 0 ? "Free" : item.price + "₹"}
            </h3>
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black ">
              {item.estimatedPrice}₹
            </h5>
          </div>
          <div className="flex items-center pb-3">
            <AiOutlineUnorderedList size={20} fill="#fff" />
            <h5 className="pl-2 text-black ">
              {item.courseData?.length} Lectures
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
