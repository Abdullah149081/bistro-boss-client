import { Helmet } from "react-helmet-async";
import Menu from "../../../Components/Menu/Menu";
import useMenu from "../../../Hooks/useMenu";
import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const [, menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Boss />
      <Menu subTitle="---From 11:00am to 10:00pm---" title="ORDER ONLINE" btnPrimary="View Full Menu" items={popular} />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
