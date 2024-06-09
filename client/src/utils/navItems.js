import React from "react";
import { Link } from "react-router-dom";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

const NavItems = ({ activeItem, isMobile,open,setOpen }) => {
  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData &&
          navItemsData.map((item, index) => (
            <Link to={`${item.url}`} key={index} >
              <span
                className={`${
                  activeItem === index ? "dark:text-[#37a39a] text-red-500" : "dark:text-white text-black"
                } text-[18px] px-6 font-poppins font-semibold `}
              >
                {item.name}
              </span>
            </Link>
          ))}
      </div>

      {isMobile && (
        <div className="800px:hidden mt-5 flex flex-col pl-10 py-4 gap-4">
       
            { navItemsData.map((item, index) => (
                <Link to={item.url} key={index}>
                  <span
                    className={`${
                      activeItem === index 
                      ? "dark:text-[#37a39a] text-red-500" 
                      : "dark:text-white text-black"
                    } text-[18px]  font-poppins font-[400] `}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
       

          
        </div>
      )}
    </>
  );
};

export default NavItems;
