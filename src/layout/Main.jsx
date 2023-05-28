import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/Header/Header";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Header />}
      <div className="min-h-[calc(100vh-550px)]">
        <Outlet />
        <ScrollRestoration />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
