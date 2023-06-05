import { createBrowserRouter } from "react-router-dom";
import AddItem from "../Page/DashBoard/AddItem";
import AllUsers from "../Page/DashBoard/AllUsers";
import MangeItems from "../Page/DashBoard/MangeItems";
import MyCart from "../Page/DashBoard/MyCart";
import Payment from "../Page/DashBoard/Payment/Payment";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import MenuPage from "../Page/Menu/Menu/MenuPage";
import ErrorPage from "../Page/Shared/ErrorPage/ErrorPage";
import Shop from "../Page/Shop/Shop/Shop";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import AdminRoute from "./AdminRoute";
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
        path: "payment",
        element: <Payment />,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "mangeItems",
        element: (
          <AdminRoute>
            <MangeItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
