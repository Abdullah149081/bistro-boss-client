import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;

// use this method

/*

const { refetch, data: cart = [] } = useQuery(["carts", user?.email], async () => {
  const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
  return res.json();
});

*/

// ======================

/*

1. useQuery(["carts", user?.email] : This "carts" api name


*/
