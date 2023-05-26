import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Menu from "../Menu/Menu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Boss />
      <Menu subTitle="---From 11:00am to 10:00pm---" title="ORDER ONLINE" btnBoss="View Full Menu" />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
