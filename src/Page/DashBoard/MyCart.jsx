import React from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../Components/SectionTitle/Title";
import useCart from "../../Hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="boss-container">
        <Title>
          <span className="text-white lg:text-[#d1a054]">---My Cart---</span>
          <span>WANNA ADD MORE?</span>
        </Title>
        <div className="bg-[#FFFFFF] border p-4 lg:p-[50px]">
          <div className="flex  justify-between items-center">
            <h2 className="text-[#151515] lg:text-4xl font-bold font-cinzel">Total orders: {cart.length || 0}</h2>
            <h2 className="text-[#151515] lg:text-4xl font-bold font-cinzel">total price: ${total.toFixed(2)}</h2>
            <button type="button" className="btn bg-[#D1A054] border-0 font-cinzel text-lg">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
