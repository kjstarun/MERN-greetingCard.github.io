import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./features/cardSlice";
import birthdaySlice from "./features/birthdaySlice";

export default configureStore({
  reducer: {
    cardSlice,
    birthdaySlice,
  },
});
