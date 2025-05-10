import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "@/assets/css/index.less";
import { RouterProvider } from "react-router-dom";
import router from "@/routers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
