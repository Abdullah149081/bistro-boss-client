const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item || {};
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center gap-6">
      <div className="">
        <img className="lg:w-[118px] lg:h-[104px]  rounded-[0_200px_200px_200px]" src={image} alt="" />
      </div>
      <div>
        <div className="flex justify-between items-center ">
          <h2 className="lg:text-xl  font-cinzel font-semibold">{name} ------------------</h2>
          <p className="text-[#BB8506] lg:text-xl font-bold">${price}</p>
        </div>
        <p className="mt-4">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
