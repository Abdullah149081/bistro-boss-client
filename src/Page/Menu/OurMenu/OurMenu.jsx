/* eslint-disable react/no-unescaped-entities */
import Menu from "../../../Components/Menu/Menu";
import MenuBanner from "../../../Components/MenuBanner/MenuBanner";
import MenuCard from "../../../Components/MenuCard/MenuCard";
import useMenu from "../../../Hooks/useMenu";

import banner3 from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <MenuBanner img={banner3} title="OUR MENU" subTitle="Would you like to try a dish?" />
      <div className="boss-container">
        <Menu subTitle="---Don't miss---" title="TODAY'S OFFER" btnBoss="ORDER YOUR FAVOURITE FOOD" items={offered} />
      </div>
      <MenuCard
        img={dessertImg}
        title="DESSERTS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="boss-container">
        <Menu btnBoss="ORDER YOUR FAVOURITE FOOD" items={dessert} />
      </div>
      <MenuCard
        img={pizzaImg}
        title="PIZZA"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="boss-container">
        <Menu btnBoss="ORDER YOUR FAVOURITE FOOD" items={pizza} />
      </div>
      <MenuCard
        img={saladBg}
        title="SALADS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="boss-container">
        <Menu btnBoss="ORDER YOUR FAVOURITE FOOD" items={salad} />
      </div>
      <MenuCard
        img={soupBg}
        title="SOUPS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="boss-container">
        <Menu btnBoss="ORDER YOUR FAVOURITE FOOD" items={soup} />
      </div>

      {/* end */}
    </div>
  );
};

export default OurMenu;
