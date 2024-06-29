import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import CoursePage from "./pages/CoursePage";
import {Custom} from "./"
import Footer from "./components/Footer.js"
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import CreateCoursePage from "./pages/createCoursePage";
import Courses from "./pages/Courses";
import Users from "./pages/Users";
import Team from "./pages/team.js";

import EditCoursePage from "./pages/EditCoursePage.js";
import CourseAccessPage from "./pages/CourseAccessPage.js";
import UserCoursePage from "./pages/UserCoursePage.js";

import AboutPage from "./pages/AboutPage.js";
import SelfPacedCourses from "./pages/SelfPacedCourses";
import Blockchain from "./pages/Top_courses/Blockchain";

import BootCamp from "./pages/BootCamp";
import ViewCourseDetails from "./pages/Top_courses/ViewCourseDetails";
import ViewCourseDetails1 from "./pages/Top_courses/ViewCourseDetails1";

import InternshipProgram from "./pages/Top_courses/Blockchain1";
import OtherCourse from "./pages/Top_courses/OtherCourses";
import CourseRegistration from "./pages/CourseRegistration";
import BlockChainCertification from "./pages/BlockChainCertification";
import ContactPage from "./pages/ContactPage";
import SelfBlockChainDev from "./pages/SelfBlockChainDev";
import BlogPage from "./pages/BlogPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import ScrollToTop from "./components/ScrollToTop.js"


import Terms_and_cond from "./pages/Terms_and_cond";
import ErrorPage from "./pages/ErrorPage.js";


const AppLayout = () => {
  return (
    <>
      <Custom>
      <ScrollToTop />
       <div className="mt-[80px]">
       <Outlet/>
       </div>
      
      </Custom>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <UserCoursePage />,
      },
      {
        path: "/courses/:id",
        element: <CoursePage />,
      },
      {
        path:"/profile",
        element:<ProfilePage/>
      },
     
          {
            path:"/admin",
            element:<AdminPage/>
          },
          {
            path:"/admin/create-course",
            element:<CreateCoursePage/>
          },
          {
            path:"/admin/courses",
            element:<Courses/>
          },
          {
            path:"/admin/users",
            element:<Users/>
          },
          {
            path:"/admin/team",
            element:<Team/>
          },
          {
            path:"/admin/edit-course/:id",
            element:<EditCoursePage/>
          },
          {
            path:"/course-access/:id",
            element:<CourseAccessPage/>
          }, 

          {
            path: "/about-kairaa-blockchain-academy",
            element: <AboutPage />,
          },
          {
            path: "/blogs",
            element: <BlogPage />
          },
          {
            path: "/gallery",
            element: <GalleryPage />
          },
          {
            path: "/contact",
            element: <ContactPage />
          },
          {
            path: "/payment-terms-condition",
            element: <Terms_and_cond />
          },
    
          {
            path: '/course/selfpaced-course',
            element: <SelfPacedCourses />
          },
          {
            path: '/course/blockchain',
            element: <Blockchain />
          },
          {
            path: '/course/othercourse',
            element: <OtherCourse />
          },
          {
            path: '/course/bootcamp',
            element: <BootCamp />
          },
          {
            path: '/course/internship-program',
            element: <InternshipProgram />
    
          },
          {
            path: '/course/bockchaincertification',
            element: <BlockChainCertification />,
    
          },
          {
            path: '/courseregistration',
            element: <CourseRegistration />,
    
          },
          {
            path: '/courses/:id',
            element: <ViewCourseDetails />,
    
          },
          {
            path: "/course/selfpaced-course/:id",
            element: <SelfBlockChainDev />
          },
          {
            path: "/course/:id",
            element: <ViewCourseDetails1 />
          }
      
    
      
     
      
    ],
    errorElement: <ErrorPage/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
