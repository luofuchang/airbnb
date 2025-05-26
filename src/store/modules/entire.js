import { getEntireList } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getEntireDataAction = createAsyncThunk(
  "entire/fetchEntireDataAction",
  async (page, { getState }) => {
    const currentPageToFetch =
      page != undefined ? page : getState().entire.currentPage;
    // 返回的数据将作为 action.payload 在 extraReducers 的 fulfilled状态中接收
    // createAsyncThunk 会自动处理 Promise 的 pending, fulfilled, rejected 状态
    // 不再需要在 then() 中手动 dispatch
    const response = await getEntireList(currentPageToFetch);
    return {
      roomList: response.list,
      totalCount: response.totalCount,
      currentPage: currentPageToFetch,
    };
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false, // 新增：用于跟踪加载状态
    error: null, // 新增：用于存储错误信息
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEntireDataAction.pending, (state) => {
        state.isLoading = true;
        state.error = null; // 开始新的请求时，清除之前的错误
      })
      .addCase(getEntireDataAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.roomList = payload.roomList;
        state.totalCount = payload.totalCount;
        state.currentPage = payload.currentPage;
      })
      .addCase(getEntireDataAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message || "获取数据失败"; // 存储错误信息
      });
  },
});

export const { changeCurrentPageAction } = entireSlice.actions;

export default entireSlice.reducer;
