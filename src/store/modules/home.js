import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
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
  }
);

const homeSlice = createSlice({
  name: "homeStore",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
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
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
  //     state.goodPriceInfo = action.payload;
  //   });
  // },
});

export const { changeGoodPriceInfo, changeHighScoreInfo, changeDiscountInfo } =
  homeSlice.actions;

export default homeSlice.reducer;
