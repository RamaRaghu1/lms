import React from 'react'
import CourseDetailsPage from "../components/Course/CourseDetailsPage.js"
import { useParams } from 'react-router-dom'

const CoursePage = () => {
 
const {id}=useParams();
console.log(`CoursePage ${id}`)

  return (
    <div>
      <CourseDetailsPage id={id}/>
    </div>
  )
}

export default CoursePage
