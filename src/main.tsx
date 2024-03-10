import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error/Error.tsx";
import Signup from "./pages/signup/Signup.tsx";
import Login from "./pages/login/Login.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import Category from "./pages/category/Category.tsx";
import Search from "./pages/search/Search.tsx";
import "./i18n/config";
import DashboardAdmin from "./admin/pages/dashboard/DashboardAdmin.tsx";
import ContentDetails from "./pages/contentDetails/ContentDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <Error />,
  },
  {
    path: "/category/:id",
    element: <Category />,
    errorElement: <Error />,
  },
  {
    path: "/content/:id",
    element: <ContentDetails />,
    errorElement: <Error />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <DashboardAdmin />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
