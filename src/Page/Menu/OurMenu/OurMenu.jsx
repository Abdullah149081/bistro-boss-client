/* eslint-disable react/no-unescaped-entities */
import React from "react";
import MenuCard from "../../../Components/MenuCard/MenuCard";
import chef from "../../../assets/home/chef-service.jpg";
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
      <MenuCard
        img={chef}
        title="DESSERTS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
  );
};

export default OurMenu;
