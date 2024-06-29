import React, { useEffect, useState } from "react";
import { useGetCourseDetailsQuery } from "../../redux/features/courses/coursesApi";
import Loader from "../Loader/Loader";
import Heading from "../Heading";
import Header from "../Header";
import CourseDetails from "./CourseDetails.js";
import { useGetRazorpayPublishablekeyQuery, useCreatePaymentOrderMutation } from "../../redux/features/orders/ordersApi.js";
import { useLoadUserQuery } from "../../redux/features/api/apiSlice.js";
import { Navigate } from "react-router-dom";


const CourseDetailsPage = ({ id }) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCourseDetailsQuery(id);

  const [redirect, setRedirect] = useState(false);



// const handlePaymentSuccess = (paymentResult) => {
//   createPaymentOrder({ courseId: data._id, payment_info: paymentResult });
  
// };



 

  


  if (redirect) {
    return <Navigate to={`/course-access/${data._id}`}s />;
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={`${data.course.name} - Kairaa Blockchain Academy`}
            description=""
            keywords="Blockchain, Blockchain Certification"
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
      )}
    </>
  );
};

export default CourseDetailsPage;
