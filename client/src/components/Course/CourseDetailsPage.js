import React, { useState } from 'react'
import { useGetCourseDetailsQuery } from '../../redux/features/courses/coursesApi';
import Loader from '../Loader/Loader';
import Heading from '../Heading';
import Header from '../Header';
import CourseDetails from "./CourseDetails.js"


const CourseDetailsPage = ({id}) => {
const [route, setRoute]=useState("Login");
const [open, setOpen]=useState(false);
const {data, isLoading}=useGetCourseDetailsQuery(id);


console.log(`id ${id}`)
console.log(`data ${JSON.stringify(data)}`)


  return (
    <>
   {
    isLoading ?(
        <Loader/>
    ):(
        <div>
        <Heading
        title={data?.course?.name + ` - Kairaa Blockchain Academy`}
        description=""
        keywords="Blockchain,Blockchain Certification"
      />
      <Header
      route={route}
      setRoute={setRoute}
      open={open}
      activeItem={1}
      />
     <CourseDetails
     data={data.course}

     />
        </div>
    )
   }
    </>
  )
}

export default CourseDetailsPage
