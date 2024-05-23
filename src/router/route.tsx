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
import DashboardSuperAdmin from "../superadmin/dashboard/DashboardSuperAdmin";
import SuperAdminLogin from "../superadmin/login/Login";
import SuperAdminProfile from "../superadmin/profile/Profile";
import Contents from "../admin/pages/contents/Contents";
import GeneralReview from "../admin/pages/GeneralReview/GeneralReview";
import GiveGeneralReview from "../admin/pages/GeneralReview/GiverGeneralReview";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import IslamicReview from "../admin/pages/IslamicReview/IslamicReview";
import GiveIslamicReview from "../admin/pages/IslamicReview/GiveIslamicReview";
import AgeRestriction from "../admin/pages/AgeRestriction/AgeRestriction";
import GiveAgeRistriction from "../admin/pages/AgeRestriction/GiveAgeRestriction";
import ContentsUpdate from "../admin/pages/contents/contentsUpdate";
import Admins from "../superadmin/admins/Admins";
import AddAdmins from "../superadmin/admins/addAdmins";
import EditAdmins from "../superadmin/admins/EditAdmins";

// import { ThemeProvider } from "@material-tailwind/react";

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
    path: "/admin/contents",
    element: <AdminAuthGuard Element={<Contents />} to={"/admin/login"} />,
    errorElement: <Error />,
  },
  {
    path: "/admin/contents/:id",
    element: (
      <AdminAuthGuard Element={<ContentsUpdate />} to={"/admin/login"} />
    ),
    errorElement: <Error />,
  },
  {
    path: "/admin/islamic_review",
    element: <AdminAuthGuard Element={<IslamicReview />} to={"/admin/login"} />,
    errorElement: <Error />,
  },
  {
    path: "/admin/islamic_review/:id",
    element: (
      <AdminAuthGuard Element={<GiveIslamicReview />} to={"/admin/login"} />
    ),
    errorElement: <Error />,
  },
  {
    path: "/admin/age_ristriction",
    element: (
      <AdminAuthGuard Element={<AgeRestriction />} to={"/admin/login"} />
    ),
    errorElement: <Error />,
  },
  {
    path: "/admin/age_ristriction/:id",
    element: (
      <AdminAuthGuard Element={<GiveAgeRistriction />} to={"/admin/login"} />
    ),
    errorElement: <Error />,
  },
  {
    path: "/admin/generalReview",
    element: <AdminAuthGuard Element={<GeneralReview />} to={"/admin/login"} />,
    errorElement: <Error />,
  },
  {
    path: "/admin/generalReview/:id",
    element: (
      <AdminAuthGuard Element={<GiveGeneralReview />} to={"/admin/login"} />
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
      <SuperAdminAuthGuard
        Element={<DashboardSuperAdmin />}
        to={"/admin/login"}
      />
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
  {
    path: "/superadmin/admins",
    element: <SuperAdminAuthGuard Element={<Admins />} />,
    errorElement: <Error />,
  },
  {
    path: "/superadmin/admin/create",
    element: <SuperAdminAuthGuard Element={<AddAdmins />} />,
    errorElement: <Error />,
  },
  {
    path: "/superadmin/admin/:id",
    element: <SuperAdminAuthGuard Element={<EditAdmins />} />,
    errorElement: <Error />,
  },
]);
