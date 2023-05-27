import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item || {};
  return (
    <div className="card  bg-[#E8E8E8] rounded-md">
      <figure className=" border-t w-full relative">
        <img src={image} alt="Shoes" className="  w-full" />
        <span className="absolute bg-gray-950 text-white font-bold px-4 py-2 top-4 right-4 rounded-sm">${price}</span>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-black">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button type="button" className="btn btn-boss text-black">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
