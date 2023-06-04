import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Social = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlerGoogle = () => {
    googleSignIn()
      .then((result) => {
        const logUser = result.user;
        const saveUser = { name: logUser.displayName, email: logUser.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((user) => {
            if (user) {
              navigate(from, { replace: true });
            }
          });
      })
      .catch(() => {});
  };
  return (
    <div className="text-center mt-4  font-bold">
      <h2 className="">Or Sign In with</h2>
      <div className="flex justify-center items-center gap-4 mt-4  ">
        <button onClick={handlerGoogle} type="button" className="btn rounded-full bg-[#F5F5F8] border-2 border-[#444444] ">
          <FaGoogle className=" text-gray-900 " />
        </button>

        <button type="button" className="btn rounded-full bg-[#F5F5F8] border-2 border-[#444444] ">
          <FaGithub className="  text-gray-900" />
        </button>

        <button type="button" className="btn rounded-full bg-[#F5F5F8] border-2 border-[#444444] ">
          <FaFacebookF className=" text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default Social;
