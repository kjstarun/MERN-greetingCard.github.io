import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heading: "ABCDEF",
  description: `Lorum Ipsum and a Happy New Year! We would like to thank our entire
            community for their support this year. We enjoyed all the challenged
            and achievements 2017 brought our way and we're looking forward to
            what 2018 will bring.`,
  signature: "Greetings",
};

const BirthdayEditSlice = createSlice({
  name: "BirthdaySlice",
  initialState,
  reducers: {
    updateHeading: (state, action) => {
      state.heading = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updateSignature: (state, action) => {
      state.signature = action.payload;
    },
  },
});

export const { updateHeading, updateDescription, updateSignature } =
  BirthdayEditSlice.actions;

export default BirthdayEditSlice.reducer;
