import React, { useState } from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import MenuBanner from "../../../Components/MenuBanner/MenuBanner";
import useMenu from "../../../Hooks/useMenu";
import banner2 from "../../../assets/shop/banner2.jpg";

const OurShop = () => {
  const [activeTab, setActiveTab] = useState("salad");
  const [menu] = useMenu();
  const items = menu.filter((item) => item.category === activeTab);
  const handleSelectTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <MenuBanner img={banner2} title="OUR SHOP" subTitle="Would you like to try a dish?" />
      <div className="boss-container">
        <div className="tabs  justify-center">
          <button onClick={() => handleSelectTab("salad")} className={`tab  ${activeTab === "salad" ? "tab-active" : "tab-default"}`} type="button">
            Salad
          </button>
          <button onClick={() => handleSelectTab("pizza")} className={`tab  ${activeTab === "pizza" ? "tab-active" : "tab-default"}`} type="button">
            pizza
          </button>
          <button onClick={() => handleSelectTab("soup")} className={`tab  ${activeTab === "soup" ? "tab-active" : "tab-default"}`} type="button">
            soups
          </button>
          <button onClick={() => handleSelectTab("dessert")} className={`tab  ${activeTab === "dessert" ? "tab-active" : "tab-default"}`} type="button">
            dessert
          </button>
          <button onClick={() => handleSelectTab("drinks")} className={`tab  ${activeTab === "drinks" ? "tab-active" : "tab-default"}`} type="button">
            drinks
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {items.map((item) => (
            <FoodCard key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurShop;
