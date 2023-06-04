import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import bannerLogin from "../../assets/others/authentication.png";
import loginPic from "../../assets/others/authentication2.png";
import Social from "./Social";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, logOut, updateUserData } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        const saveUser = { name: data.name, email: data.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((user) => {
            if (user.insertedId) {
              updateUserData(data.name, data.photo);
              logOut();
              navigate("/login");
            }
          });
      })
      .catch((err) => {
        setError(err?.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div>
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
                <h2 className="text-center text-3xl font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body flex-none">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered " {...register("name", { required: true })} />
                    {errors.name?.type === "required" && <span className="mt-1 text-sm text-error font-bold">Name is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">Photo Url</span>
                    </label>
                    <input type="url" placeholder="Photo Url" className="input input-bordered " {...register("photo", { required: true })} />
                    {errors.photo?.type === "required" && <span className="mt-1 text-sm text-error font-bold">Photo Url is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered " {...register("email", { required: true })} />
                    {errors.email && <span className="mt-1 text-sm text-error font-bold">Email is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      className="input input-bordered"
                      {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                    />
                    {errors.password?.type === "required" && <span className="mt-1 text-sm text-error font-bold">Password is required</span>}
                    {errors.password?.type === "minLength" && <span className="mt-1 text-sm text-error font-bold">Password must be 6 character</span>}
                    {errors.password?.type === "pattern" && <span className="mt-1 text-sm text-error font-bold">Password must be One Uppercase One LowerCase One Special Character and Number</span>}
                  </div>

                  {error && <span className="text-error font-bold text-xs mt-2">{error}</span>}

                  <div className="form-control mt-6">
                    <button type="submit" className="btn bg-[#D1A054B2] border-0">
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className="mt-4 text-center text-[#D1A054] font-bold">
                  Already registered?
                  <Link className="text-[#D1A054] text-base font-semibold link-hover ml-2" to="/login">
                    Go to log in
                  </Link>
                </p>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
