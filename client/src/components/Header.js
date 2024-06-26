import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";
import NavItems from "../utils/navItems.js";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModel from "../utils/CustomModel.js";
import Login from "../components/Auth/Login.js";
import Signup from "../components/Auth/Signup.js";
import Verification from "./Auth/Verification.js";
import { useSelector } from "react-redux";
import avatar from "../assets/user.png";
import toast from "react-hot-toast";


const Header = ({ activeItem, setOpen, open, route, setRoute }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state) => state.auth);
 

  

  const handleClose = () => {
    setOpenSidebar(false);
  
  };


  

  return (
    <div className="w-full relative">
      <div className=" bg-white fixed top-0 left-0 w-full   h-[80px] z-[80]   border-b  transition duration-200 ">
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full ">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div className=" py-4 pb-6">
              <Link to={"/"}>
                <img src={Logo} alt="Logo" className="w-[200px] h-[100px] " />
              </Link>
            </div>
            <div className="flex items-center">

              {/* <Navbar  activeItem={activeItem} isMobile={false}/> */}

              <NavItems activeItem={activeItem} isMobile={false} />
              {/* <ThemeSwitcher /> */}

              {/* only for mobile */}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>

              {user ? (
                <Link to="/profile">
                  <img width={30} height={30}
                    src={user.avatar ? user.avatar.url : avatar}
                    className="h-[30px] w-[30px] cursor-pointer rounded-full"
                style={{border: activeItem ===5 ? "2px solid #0975DD":"" }}
                />
                </Link>
              ) : (
                <HiOutlineUserCircle
                  size={25}
                  className="cursor-pointer  text-black"
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
          </div>
        </div>
        {/* mobile sidebar */}
        {openSidebar && (
          <div
            className="fixed w-full top-0 left-0 z-[999]  bg-[#00000024]"
            onClick={handleClose}
            // id="screen"
          >
            <div className="w-[70%] fixed z-[999] h-screen bg-white  top-0 right-0">
           
           {/* <MobileNav activeItem={activeItem} isMobile={true}/> */}
           
           <div className="w-full">
            <NavItems activeItem={activeItem} isMobile={true} />
            </div>
             
             {user ? (
                <Link to="/profile">
                  <img width={30} height={30}
                    src={user.avatar ? user.avatar.url : avatar}
                    className="h-[30px] w-[30px] cursor-pointer rounded-full place-self-center mx-4 mt-8"
                style={{border: activeItem ===6 ? "2px solid #0975DD":"" }}
                />
                </Link>
              ) : (
                <HiOutlineUserCircle
                  size={25}
                  className="cursor-pointer  text-black place-self-center mx-4 mt-8"
                  onClick={() => setOpen(true)}
                />
              )}
             
             
              <br />
              <br />
              {/* <p className=" text-[16px] px-2 pl-5 text-black">
                Copyright &copy; 2024 Kairaa Blockchain Academy
              </p> */}
            </div>
          </div>
        )}
      </div>

      {route === "Login" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
            />
          )}
        </>
      )}

      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Signup}
            />
          )}
        </>
      )}
      {route === "Verification" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Verification}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
