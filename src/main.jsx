import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "@/assets/theme";

import "@/assets/css/index.less";
import router from "@/routers";
import store from "@/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
