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
import AdminLogin from "../admin/pages/login/Login";
import AdminAuthGuard from "./adminAuthGuard";
import AdminProfile from "../admin/pages/profile/Profile";
import SuperAdminAuthGuard from "./superAdminAuthGuard";
import DashboardSuperAdmin from "../superadmin/dashboard/DashboardAdmin";
import SuperAdminLogin from "../superadmin/login/Login";
import SuperAdminProfile from "../superadmin/profile/Profile";

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
    element: <GuestAuthGuard Element={<Signup />} to={"/"} />,
  },
  {
    path: "login",
    element: <GuestAuthGuard Element={<Login />} to={"/"} />,
  },
  {
    path: "/profile",
    element: <UserAuthGuard Element={<Profile />} />,
    errorElement: <Error />,
  },
  {
    path: "/admin",
    element: (
      <AdminAuthGuard Element={<DashboardAdmin />} to={"/admin/login"} />
    ),
    errorElement: <Error />,
  },
  {
    path: "/admin/login",
    element: <GuestAuthGuard Element={<AdminLogin />} to={"/"} />,
    errorElement: <Error />,
  },
  {
    path: "/admin/profile",
    element: <AdminAuthGuard Element={<AdminProfile />} />,
    errorElement: <Error />,
  },
  {
    path: "/superadmin",
    element: (
      <SuperAdminAuthGuard Element={<DashboardSuperAdmin />} to={"/admin/login"} />
    ),
    errorElement: <Error />,
  },
  {
    path: "/superadmin/login",
    element: <GuestAuthGuard Element={<SuperAdminLogin />} to={"/"} />,
    errorElement: <Error />,
  },
  {
    path: "/superadmin/profile",
    element: <SuperAdminAuthGuard Element={<SuperAdminProfile />} />,
    errorElement: <Error />,
  },
]);
