import React from "react";

const MenuBanner = () => {
  return (
    <div className="bg-[url('assets/menu/banner3.jpg')] bg-fixed">
      <div className="boss-container  ">
        <div className="flex lg:min-h-[800px] justify-center items-center">
          <div className="relative min-h-[450px] w-full flex items-center justify-center">
            <div className="absolute -z-0 bg-black inset-0 bg-opacity-50" />
            <div className="relative">
              <h1 className="text-4xl lg:text-[88px] text-white font-cinzel font-semibold">OUR MENU</h1>
              <p className="text-center text-2xl text-white font-cinzel">Would you like to try a dish?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
