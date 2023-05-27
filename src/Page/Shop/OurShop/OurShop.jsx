import React from "react";
import MenuBanner from "../../../Components/MenuBanner/MenuBanner";
import banner2 from "../../../assets/shop/banner2.jpg";

const OurShop = () => {
  return (
    <div>
      <MenuBanner img={banner2} title="OUR MENU" subTitle="Would you like to try a dish?" />
    </div>
  );
};

export default OurShop;
