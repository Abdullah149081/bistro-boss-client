import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import MenuPage from "../Page/Menu/Menu/MenuPage";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>h</div>,
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
