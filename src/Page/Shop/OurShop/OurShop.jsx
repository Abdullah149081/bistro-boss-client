/* eslint-disable comma-dangle */
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import MenuBanner from "../../../Components/MenuBanner/MenuBanner";
import useMenu from "../../../Hooks/useMenu";
import banner2 from "../../../assets/shop/banner2.jpg";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [activeTab, setActiveTab] = useState(initialIndex);
  const [menu, loading] = useMenu();

  const items = menu.filter(
    (item) => item.category === ((activeTab === 0 && "salad") || (activeTab === 1 && "pizza") || (activeTab === 2 && "soup") || (activeTab === 3 && "dessert") || (activeTab === 4 && "drinks"))
  );

  const handleSelectTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <Helmet>
        <title>
          {`Bistro Boss | Shop - ${(activeTab === 0 && "Salad") || (activeTab === 1 && "Pizza") || (activeTab === 2 && "Soup") || (activeTab === 3 && "Dessert") || (activeTab === 4 && "Drinks")}  `}
        </title>
      </Helmet>
      <MenuBanner img={banner2} title="OUR SHOP" subTitle="Would you like to try a dish?" />
      <div className="boss-container">
        <div className="tabs  justify-center">
          <button onClick={() => handleSelectTab(0)} className={`tab  ${activeTab === 0 ? "tab-active" : "tab-default"}`} type="button">
            Salad
          </button>
          <button onClick={() => handleSelectTab(1)} className={`tab  ${activeTab === 1 ? "tab-active" : "tab-default"}`} type="button">
            pizza
          </button>
          <button onClick={() => handleSelectTab(2)} className={`tab  ${activeTab === 2 ? "tab-active" : "tab-default"}`} type="button">
            soups
          </button>
          <button onClick={() => handleSelectTab(3)} className={`tab  ${activeTab === 3 ? "tab-active" : "tab-default"}`} type="button">
            dessert
          </button>
          <button onClick={() => handleSelectTab(4)} className={`tab  ${activeTab === 4 ? "tab-active" : "tab-default"}`} type="button">
            drinks
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center mt-4 items-center">
            <progress className="progress w-56 " />;
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {items.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurShop;
