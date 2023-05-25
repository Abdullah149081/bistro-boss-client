import React from "react";
import { Helmet } from "react-helmet-async";
import MenuBanner from "../MenuBanner/MenuBanner";

const MenuPage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <MenuBanner />
    </div>
  );
};

export default MenuPage;
