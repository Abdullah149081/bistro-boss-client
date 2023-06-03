import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../Page/DashBoard/AllUsers";
import MyCart from "../Page/DashBoard/MyCart";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import MenuPage from "../Page/Menu/Menu/MenuPage";
import ErrorPage from "../Page/Shared/ErrorPage/ErrorPage";
import Shop from "../Page/Shop/Shop/Shop";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
