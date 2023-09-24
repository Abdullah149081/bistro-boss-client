import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const {
    refetch,
    data: menu = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("https://bistro-boss-server-five-kappa.vercel.app/menu");
      return res.json();
    },
  });
  return [refetch, menu, loading];
};

export default useMenu;
