import React from "react";
import { Helmet } from "react-helmet-async";
import MenuBanner from "../MenuBanner/MenuBanner";
import OurMenu from "../OurMenu/OurMenu";

const MenuPage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <OurMenu />
    </div>
  );
};

export default MenuPage;
