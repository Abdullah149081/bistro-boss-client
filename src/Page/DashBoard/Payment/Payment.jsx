import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Payment = () => {
  return (
    <div className="w-full">
      <div className="boss-container">
        <h2 className="text-4xl font-bold text-center ">The payment GetWay</h2>

        <div className="mt-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
