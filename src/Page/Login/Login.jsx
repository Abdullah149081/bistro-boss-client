import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import bannerLogin from "../../assets/others/authentication.png";
import loginPic from "../../assets/others/authentication2.png";
import Social from "./Social";

import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [errorCaptcha, setErrorCaptcha] = useState("");
  const [error, setError] = useState("");
  const captchaRef = useRef(null);
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err?.message);
      });
  };

  const handleCaptcha = () => {
    const { value } = captchaRef.current;
    if (validateCaptcha(value)) {
      setErrorCaptcha("");
      setDisabled(false);
    } else {
      setDisabled(true);
      setError("");
      setErrorCaptcha("Captcha Does Not Match");
    }
  };

  return (
    <div className="bg-[url('assets/others/Rectangle75.png')] bg-no-repeat bg-cover ">
      <Helmet>
        <title>Bistro Boss | login</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <img className="border-2 shadow-2xl max-w-screen-xl absolute w-full h-[800px]" src={bannerLogin} alt="" />
        <div className="hero-content w-full  flex-col lg:flex-row">
          <div className=" hidden lg:block ">
            <img src={loginPic} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  ">
            <h2 className="text-center text-3xl font-bold">Login</h2>
            <form onSubmit={handleLogin} className="card-body flex-none">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-bold">Password</span>
                </label>
                <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" />
                <label className="label">
                  <button type="button" className="label-text-alt link link-hover">
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <button type="button" className="label-text-alt  text-base font-bold text-[#5D5FEF] ">
                    <LoadCanvasTemplate />
                  </button>
                </label>
                <input ref={captchaRef} type="text" placeholder="Type here" name="captcha" className="input input-bordered " />
                {errorCaptcha && <span className="text-error font-bold text-xs mt-2">{errorCaptcha}</span>}
                <button onClick={handleCaptcha} className="btn mt-4 btn-outline btn-info " type="button">
                  Validate Captcha
                </button>
              </div>
              {error && <span className="text-error font-bold text-xs mt-2">{error}</span>}

              <div className="form-control mt-6">
                <button disabled={disabled} type="submit" className="btn bg-[#D1A054B2] border-0">
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
