import { Link } from "react-router-dom";
import MenuItem from "../../Page/Shared/MenuItem/MenuItem";
import Title from "../SectionTitle/Title";

const Menu = ({ subTitle, title, btnBoss, items, category }) => {
  return (
    <section className="boss-container">
      <Title>
        {subTitle && <span>{subTitle}</span>}
        {title && <span>{title}</span>}
      </Title>

      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
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
