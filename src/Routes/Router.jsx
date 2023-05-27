import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import MenuPage from "../Page/Menu/Menu/MenuPage";
import ErrorPage from "../Page/Shared/ErrorPage/ErrorPage";
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
    ],
  },
]);

export default router;
