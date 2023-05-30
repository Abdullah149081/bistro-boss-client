import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import MenuPage from "../Page/Menu/Menu/MenuPage";
import ErrorPage from "../Page/Shared/ErrorPage/ErrorPage";
import Shop from "../Page/Shop/Shop/Shop";
import Main from "../layout/Main";

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
]);

export default router;
