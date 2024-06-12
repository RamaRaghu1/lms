import React from 'react';
import Heading from "../components/Heading.js";
import AdminSidebar from "../components/Admin/AdminSidebar.js";
import AdminProtected from "../utils/hooks/adminProtected.js";
import AllCourses from "../components/Admin/Course/AllCourses.js"
import DashboardHeader from '../components/Admin/DashboardHeader.js';
const Courses = () => {
  return (
    <div>
       <AdminProtected>
    <div>
      <Heading title="create course page" description="" keywords="" />
      <div className="flex ">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
         <AllCourses/>
        </div>
      </div>
    </div>
     </AdminProtected>
    </div>
  )
}

export default Courses
