import { useEffect, useState } from "react";
import Title from "../../../Components/SectionTitle/Title";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Menu = ({ subTitle, title, btnBoss }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="boss-container">
      <Title>
        {subTitle && <span>{subTitle}</span>}
        {title && <span>{title}</span>}
      </Title>

      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      {btnBoss && (
        <div className="text-center mt-12">
          <button type="button" className="btn btn-boss  text-black">
            {btnBoss}
          </button>
        </div>
      )}
    </section>
  );
};

export default Menu;
