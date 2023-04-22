import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./features/cardSlice";
import birthdaySlice from "./features/birthdaySlice";
import anniversarylice from "./features/anniversarylice";
import weddingSlice from "./features/weddingSlice";

export default configureStore({
  reducer: {
    cardSlice,
    birthdaySlice,
    anniversarylice,
    weddingSlice,
  },
});
