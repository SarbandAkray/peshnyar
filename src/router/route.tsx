import { Route, createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/home/Home";
import Error from "../pages/Error/Error";
import Search from "../pages/search/Search";
import Category from "../pages/category/Category";
import ContentDetails from "../pages/contentDetails/ContentDetails";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import DashboardAdmin from "../admin/pages/dashboard/DashboardAdmin";

import UserAuthGuard from "./userAuthGuard";
import Profile from "../pages/profile/Profile";
import GuestAuthGuard from "./guestAuthGuard";

export const router = createBrowserRouter([
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
    element: <GuestAuthGuard Element={<Signup />} />,
  },
  {
    path: "login",
    element: <GuestAuthGuard Element={<Login />} />,
  },
  {
    path: "/profile",
    element: <UserAuthGuard Element={<Profile />} />,
    errorElement: <Error />,
  },
  {
    path: "/admin",
    element: <DashboardAdmin />,
    errorElement: <Error />,
  },
]);
