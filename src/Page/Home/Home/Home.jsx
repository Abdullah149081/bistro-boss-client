import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Menu from "../Menu/Menu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Boss />
      <Menu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
