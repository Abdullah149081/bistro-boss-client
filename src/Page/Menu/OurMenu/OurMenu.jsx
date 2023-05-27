/* eslint-disable react/no-unescaped-entities */
import React from "react";
import banner3 from "../../../assets/menu/banner3.jpg";
import Menu from "../../Home/Menu/Menu";
import MenuBanner from "../MenuBanner/MenuBanner";

const OurMenu = () => {
  return (
    <div>
      <MenuBanner img={banner3} title="OUR MENU" subTitle="Would you like to try a dish?">
        <span>banner3.jpg</span>
        <span>OUR MENU</span>
        <span>Would you like to try a dish?</span>
      </MenuBanner>
      <div className="boss-container">
        <Menu subTitle="---Don't miss---" title="TODAY'S OFFER" btnBoss="ORDER YOUR FAVOURITE FOOD" />
      </div>
    </div>
  );
};

export default OurMenu;
