import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../../Components/SectionTitle/Title";
import useCart from "../../Hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bistro-boss-server-five-kappa.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Order has been deleted.", "success");
            }
            refetch();
          });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="boss-container">
        <Title>
          <span className="text-white lg:text-[#D99904]">---My Cart---</span>
          <span className="text-2xl lg:text-4xl">WANNA ADD MORE?</span>
        </Title>
        <div className="bg-[#FFFFFF] border p-4 lg:p-[50px]  ">
          <div className="flex  justify-between items-center">
            <h2 className="text-[#151515] lg:text-4xl font-bold font-cinzel">Total orders: {cart.length || 0}</h2>
            <h2 className="text-[#151515] lg:text-4xl font-bold font-cinzel">total price: ${total.toFixed(2)}</h2>
            <Link to={cart.length === 0 ? "/shop/salad" : `/dashboard/payment`}>
              <button disabled={cart.length === 0} type="button" className="btn bg-[#D1A054] border-0 font-cinzel text-lg">
                Pay
              </button>
            </Link>
          </div>
          {/* TODO: Table working pagination  */}
          <div className="overflow-x-auto ">
            <table className="table w-full mt-10 text-center  table-pin-rows">
              <thead>
                <tr>
                  <th className="bg-[#D1A054] text-white tracking-wide">#</th>
                  <th className="bg-[#D1A054] text-white tracking-wide">ITEM IMAGE</th>
                  <th className="bg-[#D1A054] text-white tracking-wide">ITEM NAME</th>
                  <th className="bg-[#D1A054] text-white tracking-wide">PRICE</th>
                  <th className="bg-[#D1A054] text-white tracking-wide">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart.slice(0, 6).map((item, idx) => (
                  <tr key={item._id}>
                    <td>{idx + 1}</td>
                    <td>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <th>
                      <button onClick={() => handleDelete(item._id)} type="button" className="btn bg-red-600 border-0 ">
                        <FaTrashAlt className="w-5 h-5" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
