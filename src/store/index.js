import { configureStore } from "@reduxjs/toolkit";
import Authreducer from "../slice/auth";
// import Articlereducer from "../slice/article";
export default configureStore({
  reducer: {
    auth: Authreducer,
    // article: Articlereducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
