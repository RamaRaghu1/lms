import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {styles} from "../../../styles/style"
import {BsPencil} from "react-icons/bs";



const CourseContent = ({
  courseContentData,
  setCourseContentData,
  active,
  setActive,
  handleSubmit: handleCourseSubmit,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(courseContentData.length).fill(false)
  );
  const [activeSection, setActiveSection] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCollapseToggle=(index)=>{
    const updatedCollapsed=[...isCollapsed];
    updatedCollapsed[index]= !updatedCollapsed[index];
    setIsCollapsed(updatedCollapsed);
  }

  return (
    <div className="w-[80%] m-auto mt-24 p-3">
      <form onSubmit={handleSubmit}>
        {courseContentData?.map((item, index) => {
          const showSectionInput =
            index === 0 ||
            item.videoSection !== courseContentData[index - 1].videoSection;
          return (
            <>
              <div
                className={`w-full bg-[#cdc8c817] p-4 ${
                  showSectionInput ? "mt-10" : "mb-0"
                }`}
              >

                {showSectionInput && (
                    <>
                    <input type="text"
                    className={`text-[20px] ${
                        item.videoSection === "Untitled Section"
                        ? "w-[170px]"
                        : "w-min"
                    } font-poppins cursor-pointer dark:text-white text-black bg-transparent outline-none`}
                    value={item.videoSection}
                    onChange={(e)=>{
                        const updatedData=[...courseContentData];
                        updatedData[index].videoSection=e.target.value;
                        setCourseContentData(updatedData);
                    }}
                    />
                    <BsPencil className="cursor-pointer dark:text-white text-black"/>
                    </>
                )}
                <div className="flex w-full items-center justify-between my-0">
                  {isCollapsed[index] ? (
                    <>
                      {item.title ? (
                        <p className="font-poppins dark:text-white text-black">
                          {index + 1}.{item.title}
                        </p>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <div></div>
                  )}
                  {/*arrow button for collapse video content  */}
                  <div className="flex items-center">
                    <AiOutlineDelete
                    className={`dark:text-white text-[20px] mr-2 text-black ${index >0 ? "cursor-pointer": "cursor-no-drop"}`}
                    onClick={()=> {
                        if(index> 0){
                            const updatedData=[...courseContentData];
                            updatedData.splice(index,1);
                            setCourseContentData(updatedData)
                        }
                    }}
                    />
                    <MdOutlineKeyboardArrowDown 
                    fontSize="large"
                    className="dark:text-white text-black"
                    style={{
                        transform: isCollapsed[index]
                        ? "rotate(180deg)"
                        : "rotate(0deg)"
                    }}
                    onClick={()=>handleCollapseToggle(index)}
                    />

                  </div>
                </div>
                {!isCollapsed[index] && (
                    <>
                    <div className="my-3">
<label className={`${styles.label}`}>Video Title</label>
                    </div>
                    </>
                )}
              </div>
            </>
          );
        })}
      </form>
    </div>
  );
};

export default CourseContent;
