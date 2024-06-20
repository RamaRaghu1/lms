import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import CoursePage from "./pages/CoursePage";
import {Custom} from "./"

import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import CreateCoursePage from "./pages/createCoursePage";
import Courses from "./pages/Courses";
import Users from "./pages/Users";
import Team from "./pages/team.js";
import EditCoursePage from "./pages/EditCoursePage.js";
const AppLayout = () => {
  return (
    <>
      <Custom>
        <Outlet />
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

      
    
      
     
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
