import { createHashRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

import App from "@/App";
import Home from "@/views/home";
const Detail = lazy(() => import("@/views/detail"));
const Entire = lazy(() => import("@/views/entire"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/home"} replace /> },
      { path: "home", element: <Home /> },
      { path: "detail", element: <Detail /> },
      { path: "entire", element: <Entire /> },
    ],
  },
]);
export default router;
