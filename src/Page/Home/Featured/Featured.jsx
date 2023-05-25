import moment from "moment";
import Title from "../../../Components/SectionTitle/Title";
import featured from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="bg-[url('assets/home/featured.jpg')] min-h-screen bg-no-repeat relative">
      <div className="bg-black absolute inset-0 bg-opacity-70 -z-0" />
      <div className="boss-container  relative">
        <Title>
          <span>---Check it out---</span>
          <span className="text-white">FROM OUR MENU</span>
        </Title>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div>
            <img className="rounded-lg" src={featured} alt="" />
          </div>
          <div className="text-white text-xl ">
            <div className="space-y-2">
              <h2 className="font-semibold">{moment().format("MMM DD YYYY")}</h2>
              <h2 className="font-semibold">WHERE CAN I GET SOME?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
            </div>
            <button type="button" className="btn mt-8 bg-transparent text-xl border-0 border-white border-b-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
