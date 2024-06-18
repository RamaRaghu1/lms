import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice.js";
import authSlice from "./features/auth/authslice.js";


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth:authSlice
 
  },
  devTools:true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

// call the refresh token function on every page reload
const initializeApp= async ()=>{
// await store.dispatch(apiSlice.endpoints.refreshToken.initiate({},{forceRefetch:true}));
await store.dispatch(apiSlice.endpoints.loadUser.initiate({},{forceRefetch:true}));
}

initializeApp();