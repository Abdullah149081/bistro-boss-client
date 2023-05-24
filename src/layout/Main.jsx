import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-550px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
