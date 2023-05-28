import { Link } from "react-router-dom";
import bannerLogin from "../../assets/others/authentication.png";
import loginPic from "../../assets/others/authentication2.png";
import Social from "./Social";

const Login = () => {
  return (
    <div className="bg-[url('assets/others/Rectangle75.png')] bg-no-repeat bg-cover ">
      <div className="hero min-h-screen ">
        <img className="border shadow-lg max-w-screen-xl absolute w-full h-[800px]" src={bannerLogin} alt="" />
        <div className="hero-content w-full  flex-col lg:flex-row">
          <div className=" hidden lg:block ">
            <img src={loginPic} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  ">
            <h2 className="text-center text-3xl font-bold">Login</h2>
            <form className="card-body flex-none">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">Password</span>
                </label>
                <input type="text" placeholder="Enter your password" className="input input-bordered" />
                <label className="label">
                  <button type="button" className="label-text-alt link link-hover">
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="button" className="btn bg-[#D1A054B2] border-0">
                  Login
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-[#D1A054] font-bold">
              Create a New Account
              <Link className="text-[#D1A054] text-base font-semibold link-hover ml-2" to="/sign-up">
                Sign up
              </Link>
            </p>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
