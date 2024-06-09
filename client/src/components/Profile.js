import React, { useState,useEffect, act } from "react";
import SideBarProfile from "../components/SideBarProfile.js";
import { useLogOutQuery } from "../redux/features/auth/authApi.js";
import ChangePassword from "../components/ChangePassword.js"
import ProfileInfo from "../components/ProfileInfo.js"

const Profile = ({ user }) => {
  
  const [avatar, setAvatar] = useState(null);
  // const [activeItem, setActiveItem]=useState(5);
  const [active, setActive] = useState(1);
  const [logOut, setLogOut] = useState(false);



  const { refetch } = useLogOutQuery(undefined, {
    skip: !logOut,
  });
  const logOutHandler = () => {
    console.log("Logout clicked");
    setLogOut(true);
  };
  useEffect(() => {
    if (logOut) {
      refetch().then(() => {
        // signOut();
      }).catch((error) => {
        console.error("Error logging out:", error);
      }).finally(() => {
        setLogOut(false);
      });
    }
  }, [logOut, refetch]);


  return (
    <div className="w-full flex  mt-[80px]">
      <div
        className={`w-[60px] 800px:w-[310px] h-screen bg-white dark:bg-slate-900 bg-opacity-90 border dark:border-[#ffffff1d] border-slate-700  shadow-sm
         
       `}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
          // className="fixed"
        />
        
      </div>
      {
          active === 1 && (
          <div className="w-full h-full bg-transparent mt-[40px]">
              <ProfileInfo user={user} avatar={avatar}/>
          </div>
          )
        }
        {
          active ===2 && (
            <div className="w-full h-full bg-transparent mt-[10px]">
           <ChangePassword user={user}/>
        </div>
          )
        }
    </div>
  );
};

export default Profile;
