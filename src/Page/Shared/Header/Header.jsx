/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import Banner from "../../Home/Banner/Banner";
import ActiveLink from "./ActiveLink";

const Header = () => {
  const navbar = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/menu">Our menu</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/shop">Our shop</ActiveLink>
      </li>
    </>
  );

  return (
    <div className="lg:fixed z-10 w-full">
      <div className="lg:bg-[#15151580] ">
        <div className="lg:px-12 py-4">
          <div className="navbar justify-between">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 boss-navbar">
                  {navbar}
                </ul>
              </div>
              <div className="uppercase  flex flex-col">
                <p className="text-white text-base lg:text-xl font-bold tracking-wide ">BISTRO BOSS</p>
                <p className="text-white text-base lg:text-xl tracking-wider ">Restaurant</p>
              </div>
            </div>
            <div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 boss-navbar">{navbar}</ul>
              </div>
              <div className="navbar-end">
                <h2 className="btn">Get started</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
