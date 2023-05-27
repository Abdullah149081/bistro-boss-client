import React from "react";

const MenuCard = ({ img, title, subTitle }) => {
  return (
    <div>
      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url("${img}")` }}>
        <div className="boss-container  ">
          <div className="flex lg:min-h-[400px] justify-center items-center">
            <div className="relative max-w-5xl min min-h-[350px] w-full flex items-center justify-center">
              <div className="absolute -z-0 bg-black inset-0 bg-opacity-50" />
              <div className="relative">
                <h1 className="text-4xl text-center  text-white font-cinzel font-semibold">{title}</h1>
                <p className="text-center w-3/4 mx-auto  mt-7 text-white font-cinzel">{subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
