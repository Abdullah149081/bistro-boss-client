/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */

import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/Header/Header";

import logo from "/logo.png";

const Main = () => {
  const { loading } = useAuth();
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

  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("sign-up");
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
