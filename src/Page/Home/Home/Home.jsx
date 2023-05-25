import React from "react";
import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import Category from "../Category/Category";
import Menu from "../Menu/Menu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Boss />
      <Menu />
    </div>
  );
};

export default Home;
