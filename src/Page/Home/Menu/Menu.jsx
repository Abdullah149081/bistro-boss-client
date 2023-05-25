import { useEffect, useState } from "react";
import Title from "../../../Components/SectionTitle/Title";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Menu = () => {
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
        <span>---Check it out---</span>
        <span>FROM OUR MENU</span>
      </Title>

      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button type="button" className="btn btn-boss  text-black">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Menu;
