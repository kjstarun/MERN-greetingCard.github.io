import { createSlice } from "@reduxjs/toolkit";
import { CARDS_DATA } from "../../utilities/card-data";

const initialState = {
  APICardData: CARDS_DATA,
  cardList: CARDS_DATA,
  filterColor: null,
  filterTimestamp: null,
  filterTag: null,
  filterPopular: null,
  templateId: null,
};

const FilterData = createSlice({
  name: "filterData",
  initialState,
  reducers: {
    setFilterPopular: (state, action) => {
      state.filterPopular = action.payload;
      if (action.payload === "popular") {
        state.cardList = state.APICardData;
        return;
      }
      state.cardList = state.APICardData.filter((item) =>
        item.popularity.includes(action.payload)
      );
      console.log("After filter", state.cardList);
    },
    setFilterColor: (state, action) => {
      state.filterColor = action.payload;
      if (action.payload === "select-color") {
        state.cardList = state.APICardData;
        return;
      }
      state.cardList = state.APICardData.filter(
        (item) => item.color === action.payload
      );
    },
    setFilterTimeFrame: (state, action) => {
      return;
    },
    setFilterTag: (state, action) => {
      if (action.payload === "") {
        state.cardList = state.APICardData;
        return;
      }
      state.cardList = state.APICardData.filter(
        (item) => item.tag === action.payload
      );
    },
    handleLike: (state, action) => {
      console.log(action.payload);
      state.cardList = state.APICardData.map((item) => {
        if (item.id === action.payload) {
          item.likeCount = item.likeCount + 1;
          return item;
        }
        return item;
      });
      console.log(state.cardList);
    },
    handleView: (state, action) => {
      console.log(action.payload);
      state.cardList = state.APICardData.map((item) => {
        if (item.id === action.payload) {
          item.viewCount = item.viewCount + 1;
          return item;
        }
        return item;
      });
      console.log(state.cardList);
    },

    viewTemplate: (state, action) => {
      console.log(action.payload);
      state.templateId = action.payload;
      console.log("from redux templateid", state.templateId);
    },
  },
});

export const {
  setFilterPopular,
  setFilterColor,
  setFilterTimeFrame,
  setFilterTag,
  handleLike,
  handleView,
  viewTemplate,
} = FilterData.actions;

export default FilterData.reducer;
