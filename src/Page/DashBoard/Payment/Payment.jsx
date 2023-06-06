import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full">
      <div className="boss-container">
        <h2 className="text-4xl font-bold text-center ">The payment GetWay</h2>

        <div className="mt-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
