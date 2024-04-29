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
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/userReducer.ts";
import { Provider } from "react-redux";
import userReducer from "./reducers/userReducer.ts";
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

function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem("store", serializedStore);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem("store");
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: { user: userReducer },
});
store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
