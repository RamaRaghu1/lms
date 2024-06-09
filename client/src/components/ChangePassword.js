import React, { useState } from 'react';
import { styles } from '../styles/style';

const ChangePassword = () => {
const[oldPassword, setOldPassword]=useState("");
const [newPassword, setNewPassword]=useState("");
const[confirmPassword, setConfirmPassword]=useState("");

const passwordChangeHandler=({user})=>{

}

  return (
    <div className=' w-full pl-7 px-2 800px:pl-8'>
<h1 className='block text-[25px] 800px:text-[30px] font-poppins text-center font-semibold p-8 text-black dark:text-white'>Change Password</h1>
<div className='w-full flex justify-center  '>
<form onSubmit={passwordChangeHandler}>
          <div className="800px:w-[30vw] w-[50vw]">
            <div className="w-[100%]">
              <label className={`${styles.label} block `}>Old password:</label>
              <input
                type="text"
                className={`${styles.input} w-[95%] mb-4 `}
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="w-[100%] pt-2">
              <label className={`${styles.label} block `}>New password:</label>
              <input
                type="text"
                className={`${styles.input} w-[95%] mb-4 `}
                required
                readOnly
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="w-[100%] pt-2">
              <label className={`${styles.label} block `}>Confirm new password:</label>
              <input
                type="text"
                className={`${styles.input} w-[95%] mb-4 800px:mb-0`}
                required
                readOnly
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input
              className={` ${styles.button} mt-8   dark:text-white text-black  `}
              type="submit"
              value="Update"
            />
          </div>
        </form>
</div>
    </div>
  )
}

export default ChangePassword
