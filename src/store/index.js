import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./modules/home";
import EntireReducer from "./modules/entire";
import DetailReducer from "./modules/detail";

const store = configureStore({
  reducer: {
    home: HomeReducer,
    entire: EntireReducer,
    detail: DetailReducer,
  },
});

export default store;
