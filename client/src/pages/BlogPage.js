import React,{useState} from "react";
import Image from "../carouselimages/blogsectionBanner.jpg";
import blog1 from "../carouselimages/blog1.jpeg";
import blog2 from "../carouselimages/blog2.jpeg";
import blog3 from "../carouselimages/blog3.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer.js";


const BlogPage = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  const blogData = [
    {
      id: 1,
      img: blog1,
      heading:
        "Exploring the Intersection of Blockchain and Sustainable Development Goals",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    },
    {
      id: 2,
      img: blog2,
      heading:
        "The Rise of Non-Fungible Tokens (NFTs): Opportunities and Challenges",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    },
    {
      id: 3,
      img: blog3,
      heading:
        "Decentralized Finance (DeFi) Revolution: Empowering Financial Inclusion",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    },
  ];

  return (
    <>
    <Header 
    open={open}
    setOpen={setOpen}
    activeItem={activeItem}
    setRoute={setRoute}
    route={route}
    />
      <div
        style={{
          backgroundImage: `url(${Image})`,
          width: "100vw",
          height: "250px",
          objectFit: "contain",
        }}
        className="relative "
      >
        <h2 className="font-bold absolute top-1/3 left-12 mx-auto md:text-[40px] text-2xl font-headingFont ">
          {" "}
          Kairaa Blockchain Academy's Blog
        </h2>
      </div>
      <div className="my-12">
        <div className="m-8 items-center justify-center">
          {blogData.map((dt) => {
            return (
              <div
                className="border-2 flex md:w-4/6 w-full h-64 m-auto  md:mt-24 mt-12"
                key={dt.id}
              >
                <div className=" w-2/5">
                  <img
                    src={dt.img}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="md:p-8 p-2 w-3/5">
                  <h2 className="font-bold font-headingFont md:text-xl text-lg my-2 line-clamp-2">
                    {dt.heading}
                  </h2>
                  <p className="md:text-lg text-md line-clamp-3">{dt.para}</p>
                  <button className="mt-4 text-xl p-4  rounded-md underline text-[#1c2a59] font-paraFont font-bold">
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
          {/* <button className='  text-white  w-fit md:px-6 md:py-3 p-2 my-2 md:text-xl text-lg rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer z-2 '>Load More</button> */}
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default BlogPage;
