import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  APICardData: null,
  cardList: null,
  filterColor: null,
  filterTimestamp: null,
  filterTag: null,
  filterPopular: null,
  templateId: null,
  templateItem: null,
  currentUser: null,
};

const FilterData = createSlice({
  name: "filterData",
  initialState,
  reducers: {
    fetchCardData: (state, action) => {
      console.log("on load watcher function");
    },
    setOnLoadAPIDATA: (state, action) => {
      console.log("api data", action.payload.result);
      state.APICardData = action.payload.result;
      state.cardList = action.payload.result;
    },
    setFilterPopular: (state, action) => {
      state.filterPopular = action.payload;
      if (action.payload === "popular") {
        state.cardList = state.APICardData;
        return;
      }
      state.cardList = state.APICardData.filter((item) =>
        item.cardPopularity.includes(action.payload)
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
        (item) => item.cardColor === action.payload
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
        (item) => item.cardTag === action.payload
      );
    },
    handleLike: (state, action) => {
      console.log(action.payload);
      state.cardList = state.APICardData.map((item) => {
        if (item._id === action.payload) {
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
        if (item._id === action.payload) {
          item.viewCount = item.viewCount + 1;
          return item;
        }
        return item;
      });
      console.log(state.cardList);
    },

    viewTemplate: (state, action) => {
      console.log(action.payload);
      console.log("redux cardlist", state.cardList);
      state.templateId = action.payload;
      console.log("from redux templateid", state.templateId);
      let filterItem = state.cardList.filter((item) => {
        // console.log(item.id, state.templateId);
        if (item._id === state.templateId) {
          console.log(true);
          return item;
        }
      });
      state.templateItem = filterItem[0];
      console.log("filter from redux", state.templateItem);
    },

    updateLikeAPI: (state, action) => {
      console.log("watcher function", action);
    },

    updateViewAPI: (state, action) => {
      console.log("watcher function", action);
    },

    updateLikeLocal: (state, action) => {
      console.log("action uploadlikelocal", action.payload.result);
      let payload = action.payload.result.likeUpdate;
      let index = state.cardList.findIndex((item) => item._id === payload._id);
      state.cardList[index].isLiked = payload.isLiked;
      state.cardList[index].likeCount = payload.likeCount;
      // state.cardList[index].likeCount = s

      console.log("jbof", state.cardList);
    },

    updateViewLocal: (state, action) => {
      console.log("action uploadlikelocal", action.payload.result);
      let payload = action.payload.result.viewUpdate;
      let index = state.cardList.findIndex((item) => item._id === payload._id);
      state.cardList[index].viewCount = payload.viewCount;
      console.log("jbof", state.cardList);
    },

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      console.log("state user", state.currentUser);
    },
  },
});

export const {
  fetchCardData,
  setOnLoadAPIDATA,
  setFilterPopular,
  setFilterColor,
  setFilterTimeFrame,
  setFilterTag,
  handleLike,
  handleView,
  viewTemplate,
  updateLikeLocal,
  updateLikeAPI,
  updateViewAPI,
  updateViewLocal,
  setCurrentUser,
} = FilterData.actions;

export default FilterData.reducer;
