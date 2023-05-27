import React from "react";
import { Parallax } from "react-parallax";

const MenuBanner = ({ img, title, subTitle }) => {
  return (
    <Parallax bgImageStyle={{ height: "100%", minHeight: "1240px", width: "100%" }} blur={{ min: -50, max: 50 }} bgImage={img} bgImageAlt="the menu" strength={-200}>
      <div>
        <div className="boss-container">
          <div className="flex lg:min-h-[700px] justify-center items-center">
            <div className="relative py-6 lg:py-0 lg:min-h-[450px] w-full flex items-center justify-center">
              <div className="absolute -z-0 bg-black inset-0 bg-opacity-50" />
              <div className="relative">
                <h1 className="text-2xl text-center lg:text-[88px] text-white font-cinzel font-semibold">{title}</h1>
                <p className="text-center lg:text-2xl mt-4 lg:mt-12 text-white font-cinzel">{subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuBanner;
