import { useState } from "react";
import { Link } from "react-router-dom";
import useMenu from "../../Hooks/useMenu";
import MenuItem from "../../Page/Shared/MenuItem/MenuItem";
import Title from "../SectionTitle/Title";

const Menu = ({ subTitle, title, btnBoss, items, category, btnPrimary }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <section className="boss-container">
      <Title>
        {subTitle && <span>{subTitle}</span>}
        {title && <span>{title}</span>}
      </Title>

      {loading ? (
        <div className="flex justify-center mt-4 items-center">
          <progress className="progress w-56 " />;
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          {items?.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      )}

      {btnPrimary && (
        <div className="text-center mt-12">
          <button type="button" className="btn btn-boss  text-black">
            {btnPrimary}
          </button>
        </div>
      )}

      {btnBoss && (
        <div className="text-center mt-12">
          <Link to={`/shop/${category}`}>
            <button type="button" className="btn btn-boss  text-black">
              {btnBoss}
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Menu;
