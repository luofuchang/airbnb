import { getHomeGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    const res = await getHomeGoodPriceData();
    return res;
  }
);

const homeSlice = createSlice({
  name: "homeStore",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, action) {
      state.goodPriceInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload;
    });
  },
});

export const { changeGoodPriceInfo } = homeSlice.actions;

export default homeSlice.reducer;
