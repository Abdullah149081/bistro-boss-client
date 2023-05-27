import React from "react";
import { Helmet } from "react-helmet-async";
import OurShop from "../OurShop/OurShop";

const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <OurShop />
    </div>
  );
};

export default Shop;
