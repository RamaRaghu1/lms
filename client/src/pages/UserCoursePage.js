import React, { useEffect,useState } from 'react'
import { useGetUserAllCoursesQuery } from '../redux/features/courses/coursesApi'
import Header from '../components/Header';
import Heading from '../components/Heading';
import { styles } from '../styles/style';
import Loader from '../components/Loader/Loader';
import CourseCard from '../components/Course/CourseCard';
import { Link } from 'react-router-dom';
const UserCoursePage = () => {


const {isLoading,data}=useGetUserAllCoursesQuery();
const [courses,setCourses]=useState([]);
const [route, setRoute] = useState("Login");
const [open, setOpen] = useState(false);

useEffect(()=>{
    setCourses(data?.courses)
},[])

console.log(`cohghj ${courses}`)

  return (
    <div>
    {isLoading ? (
      <Loader />
    ) : (
      <>
        <Header
          route={route}
          setRoute={setRoute}
          open={open}
          setOpen={setOpen}
          activeItem={1}
        />
        <div className="w-[95%] 800px:w-[85%] m-auto min-h-[70vh] mt-[30px]">
          <Heading
            title={"All courses - Kairaa Blockchain Academy"}
            description={"Kairaa Blockchain Academy is a programming community."}
            keywords={
              "programming community, coding skills, expert insights, collaboration, growth"
            }
          />
          <br />
        
        
          <br />
          <br />
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
            {courses &&
              courses.map((item, index) => (
                <CourseCard item={item} key={index} />
              ))}
          </div>
        </div>
     
      </>
    )}
  </div>
  )
}

export default UserCoursePage
