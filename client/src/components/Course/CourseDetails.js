import React, { useState } from "react";
import { useSelector } from "react-redux";
import Ratings from "../Admin/Course/Ratings";
import { IoCheckmarkDoneOutline, IoCloseOutline } from "react-icons/io5";
import { format } from "timeago.js";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CoursePlayer from "../../utils/CoursePlayer";
import { styles } from "../../styles/style.js";
import CourseContentList from "./CourseContentList.js";
import { useLoadUserQuery } from "../../redux/features/api/apiSlice.js";

const CourseDetails = ({
  data,
 
}) => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  // const {data:userData}=useLoadUserQuery(undefined,{});
  // const user=userData?.user;

  const discoutPercentage =
    ((data?.estimatedPrice - data?.price) / data?.estimatedPrice) * 100;
  const discoutPercentagePrice = discoutPercentage.toFixed(0);

  const isPurchased =
    user && user?.courses?.find((item) => item._id === data._id);

  // const handleOrder = (e) => {
  //   setOpen(true)
  // };

  return (
    <div>
      <div className="w-[90%] 800px:w-[90%] m-auto py-5 mt-[80px] ">
        <div className="w-full flex flex-col-reverse 800px:flex-row">
          <div className="w-full 800px:w-[65%] 800px:pr-5">
            <h1 className="text-[25px] font-poppins font-bold text-black ">
              {data?.name}
            </h1>

            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center">
                <Ratings rating={data?.ratings} />
                <h5 className="text-black ">
                  {data?.reviews?.length} Reviews
                </h5>
              </div>
              <h5 className="text-black ">
                {data?.purchased} Students
              </h5>
            </div>
            <br />
            <h1 className="text-black  font-poppins font-bold text-[25px]">
              What you will learn from this course?
            </h1>
            <div>
              {data?.benefits?.map((item, index) => (
                <div
                  className="w-full flex 800px:items-center py-2"
                  key={index}
                >
                  <div className="w-[15px] mr-1">
                    <IoCheckmarkDoneOutline
                      size={20}
                      className="text-black "
                    />
                  </div>
                  <p className="pl-2 text-black ">
                    {item.title}
                  </p>
                </div>
              ))}
              <br />
              <br />
            </div>

            <h1 className="text-black  font-poppins font-bold text-[25px]">
              What are the prerequisites for this course?
            </h1>

            {data?.prerequisites?.map((item, index) => (
              <div className="w-full flex 800px:items-center py-2" key={index}>
                <div className="w-[15px] mr-1">
                  <IoCheckmarkDoneOutline
                    size={20}
                    className="text-black "
                  />
                </div>
                <p className="pl-2 text-black ">{item.title}</p>
              </div>
            ))}

            <br />
            <br />
            <div>
              <h1 className="text-black  font-poppins font-bold text-[25px]">
                Course Overview
              </h1>
              {/* courseContentList */}
              <CourseContentList data={data?.courseContentData} isDemo={true} />
            </div>

            <br />
            <br />
            {/* course description*/}
            <div className="w-full">
              <h1 className="text-[25px] font-poppins font-bold text-black ">
                Course Details
              </h1>
              <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black ">
                {data?.description}
              </p>
            </div>
            <br />
            <br />
            <div className="w-full">
              <div className="800px:flex items-center">
                <Ratings rating={data?.ratings} />
                <div className="mb-2 800px:mb-[unset]">
                  <h5 className="text-[25px] font-poppins text-black ">
                    {Number.isInteger(data?.ratings)
                      ? data?.ratings.toFixed(1)
                      : data?.ratings.toFixed(2)}{" "}
                    Course Rating • {data?.reviews?.length} Reviews
                  </h5>
                </div>
                <br />
                {(data?.reviews && [...data?.reviews].reverse()).map(
                  (item, index) => (
                    <div className="w-full pb-4" key={index}>
                      <div className="flex">
                        <div className="w-[50px] h-[50px]">
                          <img
                            src={
                              item.user.avatar
                                ? item.user.avatar.url
                                : "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png"
                            }
                            width={50}
                            height={50}
                            alt=""
                            className="w-[50px] h-[50px] rounded-full object-cover"
                          />
                        </div>
                        <div className="hidden 800px:block pl-2">
                          <div className="flex items-center">
                            <h5 className="text-[18px] pr-2 text-black ">
                              {item.user.name}
                            </h5>
                            <Ratings rating={item.rating} />
                          </div>
                          <p className="text-black ">
                            {item.comment}
                          </p>
                          <small className="text-[#000000d1] ">
                            {format(item.createdAt)} •
                          </small>
                        </div>
                        <div className="pl-2 flex 800px:hidden items-center">
                          <h5 className="text-[18px] pr-2 text-black ">
                            {item.user.name}
                          </h5>
                          <Ratings rating={item.rating} />
                        </div>
                      </div>
                      {/* {item.commentReplies.map((i, index) => (
                      <div className="w-full flex 800px:ml-16 my-5" key={index}>
                        <div className="w-[50px] h-[50px]">
                          <img
                            src={
                              i.user.avatar
                                ? i.user.avatar.url
                                : "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png"
                            }
                            width={50}
                            height={50}
                            alt=""
                            className="w-[50px] h-[50px] rounded-full object-cover"
                          />
                        </div>
                        <div className="pl-2">
                          <div className="flex items-center">
                            <h5 className="text-[20px]">{i.user.name}</h5>{" "}
                            <VscVerifiedFilled className="text-[#0095F6] ml-2 text-[20px]" />
                          </div>
                          <p>{i.comment}</p>
                          <small className="text-[#ffffff83]">
                            {format(i.createdAt)} •
                          </small>
                        </div>
                      </div>
                    ))} */}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* 2nd section */}
          <div className="w-full 800px:w-[35%] relative">
            <div className="sticky top-[100px] left-0 z-50 w-full">
              <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />
              <div className="flex items-center">
                <h1 className="pt-5 text-[25px] text-black ">
                  {data.price === 0 ? "Free" : data.price + " ₹"}
                </h1>
                <h5 className="pl-3 pt-5 text-[20px]  line-through opacity-80 text-black ">
                  {data.estimatedPrice} ₹
                </h5>
                <h4 className="pl-5 pt-4 text-[22px] text-black ">
                  {discoutPercentagePrice}% Off
                </h4>
              </div>
              <div className="flex items-center">
                {isPurchased ? (
                  <Link
                    className={`${styles.button} !w-[180px] my-3 font-poppins cursor-pointer !bg-[crimson]`}
                    to={`/course-access/${data._id}`}
                  >
                    Start Course
                  </Link>
                ) : (
                  <div
                    className={`${styles.button} !w-[180px] my-3 font-poppins cursor-pointer !bg-[crimson]`}
                    
                  >
                    Buy Now {data.price}₹
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* payment gateway modal */}
      <>
        {open && (
          <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
            <div className="w-[500px] min-h-[500px] bg-white rounded-xl shadow p-3">
              <div className="w-full flex justify-end">
                <IoCloseOutline
                  size={40}
                  className="text-black cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="w-full">
                {/* {razorpayKey && clientSecret && (
                  <button onClick={handlePayment}>
                    Proceed to Payment
                  </button>
                )} */}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default CourseDetails;
