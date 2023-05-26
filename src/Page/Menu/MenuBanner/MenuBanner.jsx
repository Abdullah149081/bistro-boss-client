import React from "react";

const MenuBanner = ({ children }) => {
  return (
    <div className={`bg-[url('assets/menu/${children[0].props.children}')] bg-fixed`}>
      <div className="boss-container  ">
        <div className="flex lg:min-h-[800px] justify-center items-center">
          <div className="relative min-h-[450px] w-full flex items-center justify-center">
            <div className="absolute -z-0 bg-black inset-0 bg-opacity-50" />
            <div className="relative">
              <h1 className="text-4xl lg:text-[88px] text-white font-cinzel font-semibold">{children[1]}</h1>
              <p className="text-center text-2xl mt-7 text-white font-cinzel">{children[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
