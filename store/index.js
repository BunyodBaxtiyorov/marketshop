import { configureStore } from "@reduxjs/toolkit";
import Authreducer from "../slice/auth";

export default configureStore({
  reducer: {
    auth: Authreducer,
  },
  devTools: ProcessingInstruction.env.NODE_ENV !== "production",
});
