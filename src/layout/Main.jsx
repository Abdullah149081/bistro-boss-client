import React, { useContext } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import logo from "../../public/logo.png";
import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/Header/Header";
import { AuthContext } from "../providers/AuthProviders";

const Main = () => {
  const { loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen justify-center mt-4 items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <h2 className="text-4xl font-bold mt-4 font-cinzel animate-pulse">Bistro Boss</h2>
      </div>
    );
  }

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
