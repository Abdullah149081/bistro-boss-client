import React from "react";
import { Helmet } from "react-helmet-async";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item || {};
  return (
    <div className="card  bg-[#E8E8E8] rounded-md">
      <Helmet>
        <title>Bistro Boss | {name}</title>
      </Helmet>
      <figure className=" border-t w-full relative">
        <img src={image} alt="Shoes" className="  w-full" />
        <span className="absolute bg-gray-950 text-white font-bold px-4 py-2 top-4 right-4 rounded-sm">${price}</span>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-black">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button type="button" className="btn btn-boss border-[#BB8506] text-[#BB8506]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
