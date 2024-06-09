import React, { Component } from "react";
import { Modal, Box } from "@mui/material";

const CustomModel = ({
  activeItem,
  open,
  setOpen,
  setRoute,
  component: Component,
}) => {
  return (
   
      <div className="">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          style={{ overflow: 'scroll' }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute 1000px:top-[70%]  top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2 800px:w-[450px] w-[90%]  bg-white dark:bg-slate-900 rounded-[8px] outline-none shadow p-4">
            <Component setOpen={setOpen} setRoute={setRoute} /> 
          </Box>
        </Modal>
      </div>
    
  );
};

export default CustomModel;
