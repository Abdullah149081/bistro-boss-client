/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { Button } from "flowbite-react";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";

import ActiveLink from "./ActiveLink";

const Header = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut();
  };
  const navbar = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact us</ActiveLink>
      </li>
      {user && (
        <li>
          <ActiveLink to="/dashboard/myCart">Dashboard</ActiveLink>
        </li>
      )}
      <li>
        <ActiveLink to="/menu">Our menu</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/shop/salad">Our shop</ActiveLink>
      </li>
      {!user && (
        <li>
          <ActiveLink to="/login">Login</ActiveLink>
        </li>
      )}

      <button
        type="button"
        className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FaShoppingCart className="w-6 h-6" />
        <div className="absolute inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
          {cart?.length || 0}
        </div>
      </button>
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
              {user && (
                <div className="navbar-end ml-2">
                  <Button onClick={handleLogOut} className="w-[110px] lg:w-full" color="gray" pill>
                    SIGN OUT
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
