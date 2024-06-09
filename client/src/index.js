import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
// import { Providers } from "./Provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "./redux/features/api/apiSlice";
import Loader from "../src/components/Loader/Loader.js"


 export const Custom=({children})=>{
  const {isLoading}=useLoadUserQuery({});
  return(
    <>
    {isLoading ?<Loader/>: <>{children}</>}
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
   {/* <SessionProvider>  */}
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
     <App/>
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  {/* </SessionProvider>  */}
  </Provider >
);

