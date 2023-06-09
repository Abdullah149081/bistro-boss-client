import { FaBars, FaBook, FaCalendarAlt, FaHome, FaShopify, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO : admin database

  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div className="flex justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-boss drawer-button lg:hidden ">
            Open drawer
          </label>
        </div>
        <Outlet />
      </div>

      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay" />

        <ul className="menu p-4 w-80 mt-10">
          <li className="mb-10">
            <span className="font-cinzel font-bold tracking-wide text-2xl pb-0">BISTRO BOSS</span>
            <span className="py-0 font-cinzel font-semibold tracking-widest text-2xl">Restaurant</span>
          </li>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome className="w-5 h-5" /> <span className="font-cinzel font-semibold">Admin Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <ImSpoonKnife className="w-5 h-5" /> <span className="font-cinzel font-semibold">add items</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mangeItems">
                  <TfiMenuAlt className="w-5 h-5" /> <span className="font-cinzel font-semibold">manage items</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaBook className="w-5 h-5" /> <span className="font-cinzel font-semibold">Manage bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers className="w-5 h-5" /> <span className="font-cinzel font-semibold">all users</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome className="w-5 h-5" /> <span className="font-cinzel font-semibold">User Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt className="w-5 h-5" /> <span className="font-cinzel font-semibold">Reservations</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet className="w-5 h-5" /> <span className="font-cinzel font-semibold">Payment History</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <FaShoppingCart className="w-5 h-5" />
                  <span className="font-cinzel font-bold">My Cart</span>
                  <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                </NavLink>
              </li>
            </>
          )}

          {/* hr  */}
          <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10" />
          <li>
            <NavLink to="/">
              <FaHome className="w-5 h-5" /> <span className="font-cinzel font-semibold">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars className="w-5 h-5" /> <span className="font-cinzel font-semibold"> Our Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad">
              <FaShopify className="w-5 h-5" /> <span className="font-cinzel font-semibold">Order Food</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
