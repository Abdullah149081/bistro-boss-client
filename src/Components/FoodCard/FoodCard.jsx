import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, recipe } = item || {};
  return (
    <div className="card  bg-[#E8E8E8] rounded-md">
      <figure className=" border-t w-full">
        <img src={image} alt="Shoes" className="  w-full" />
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
