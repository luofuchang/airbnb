import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeRecommendDestData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "home/fetchHomeData",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfo(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfo(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfo(res));
    });
    getHomeRecommendDestData().then((res) => {
      dispatch(changeRecommendDestInfo(res));
    });
    getHomeLongforData().then((res) => {
      dispatch(changeLongforInfo(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changePlusInfo(res));
    });
  }
);

const homeSlice = createSlice({
  name: "homeStore",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendDestInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, action) {
      state.goodPriceInfo = action.payload;
    },
    changeHighScoreInfo(state, action) {
      state.highScoreInfo = action.payload;
    },
    changeDiscountInfo(state, action) {
      state.discountInfo = action.payload;
    },
    changeRecommendDestInfo(state, action) {
      state.recommendDestInfo = action.payload;
    },
    changeLongforInfo(state, action) {
      state.longforInfo = action.payload;
    },
    changePlusInfo(state, action) {
      state.plusInfo = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
  //     state.goodPriceInfo = action.payload;
  //   });
  // },
});

export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeRecommendDestInfo,
  changeLongforInfo,
  changePlusInfo,
} = homeSlice.actions;

export default homeSlice.reducer;
