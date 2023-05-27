/* eslint-disable react/no-unescaped-entities */
import Menu from "../../../Components/Menu/Menu";
import MenuCard from "../../../Components/MenuCard/MenuCard";
import useMenu from "../../../Hooks/useMenu";
import chef from "../../../assets/home/chef-service.jpg";
import banner3 from "../../../assets/menu/banner3.jpg";
import MenuBanner from "../MenuBanner/MenuBanner";

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <MenuBanner img={banner3} title="OUR MENU" subTitle="Would you like to try a dish?">
        <span>banner3.jpg</span>
        <span>OUR MENU</span>
        <span>Would you like to try a dish?</span>
      </MenuBanner>
      <div className="boss-container">
        <Menu subTitle="---Don't miss---" title="TODAY'S OFFER" btnBoss="ORDER YOUR FAVOURITE FOOD" items={offered} />
      </div>
      <MenuCard
        img={chef}
        title="DESSERTS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="boss-container">
        <Menu btnBoss="ORDER YOUR FAVOURITE FOOD" items={dessert} />
      </div>
      <MenuCard
        img={chef}
        title="PIZZA"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="boss-container">
        <Menu btnBoss="ORDER YOUR FAVOURITE FOOD" items={pizza} />
      </div>
      <MenuCard
        img={chef}
        title="SALADS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="boss-container">
        <Menu btnBoss="ORDER YOUR FAVOURITE FOOD" items={salad} />
      </div>
      <MenuCard
        img={chef}
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
