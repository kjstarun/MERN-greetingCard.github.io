import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heading: "𝓗𝓪𝓹𝓹𝔂 𝓐𝓷𝓷𝓲𝓿𝓮𝓻𝓼𝓪𝓻𝔂",
  description: `Happy anniversary to the only person in the world that I want
              beside me every day and every night for the rest my life. I love
              you, sweetheart. Happy anniversary!`,
  firstName: "Sandeep",
  lastName: "Lavanya",
};

const AnniversaryEditSlice = createSlice({
  name: "AnniversarySlice",
  initialState,
  reducers: {
    updateHeading: (state, action) => {
      state.heading = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updatefirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updatelastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { updateHeading, updateDescription, updatefirstName, updatelastName } =
  AnniversaryEditSlice.actions;

export default AnniversaryEditSlice.reducer;
