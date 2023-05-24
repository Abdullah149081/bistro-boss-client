import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
