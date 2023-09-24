import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item || {};
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user && user.email) {
      const orderItem = { menuId: _id, name, image, price, email: user.email };
      fetch("https://bistro-boss-server-five-kappa.vercel.app/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // update cart add count number
            Swal.fire({
              title: "success",
              text: "Order Add successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card  bg-[#E8E8E8] rounded-md">
      <figure className=" border-t w-full relative">
        <img src={image} alt="Shoes" className="w-full h-[300px] object-cover" />
        <span className="absolute bg-gray-950 text-white font-bold px-4 py-2 top-4 right-4 rounded-sm">${price}</span>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-black">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={handleAddToCart} type="button" className="btn btn-boss border-[#BB8506] text-[#BB8506]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
