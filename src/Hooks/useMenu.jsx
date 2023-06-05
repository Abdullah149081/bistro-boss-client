import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const {
    refetch,
    data: menu = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      return res.json();
    },
  });
  return [refetch, menu, loading];
};

export default useMenu;
