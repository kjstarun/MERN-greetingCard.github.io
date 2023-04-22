import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brideName: "Kavya",
  groomName: "Kathir",
  description: `We wholeheartedly want to invite you and your entire family to
            attend our wedding ceremony. Come and witness our vows and give us
            sincere prayers for our further life. We wholeheartedly want to
            invite you and your entire family to attend our wedding ceremony.
            Come and witness our vows`,
  venue: "Coimbatore",
  dateAndTime: "31st February 5pm",
};

const WeddingEditSlice = createSlice({
  name: "WeddingSlice",
  initialState,
  reducers: {
    updatebrideName: (state, action) => {
      state.brideName = action.payload;
    },
    updategroomName: (state, action) => {
      state.groomName = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updatevenue: (state, action) => {
      state.venue = action.payload;
    },
    updatedateAndTime: (state, action) => {
      state.dateAndTime = action.payload;
    },
  },
});

export const {
  updatebrideName,
  updategroomName,
  updateDescription,
  updatevenue,
  updatedateAndTime,
} = WeddingEditSlice.actions;

export default WeddingEditSlice.reducer;
