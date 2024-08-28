import { useEffect, useState } from "react";
import SignInImage from "../assets/undraw_signin.svg";
import SignUpImage from "../assets/undraw_signup.svg";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAnimate, setIsAnimate] = useState(false);
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    iAgree: false,
  });

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSwitch = () => {
    setIsSignIn(!isSignIn);
    setIsAnimate(true);
    setTimeout(() => {
      setIsAnimate(false);
    }, 700);
  };

  return (
    <>
      <div className="h-[100vh] w-full sm:p-12 md:p-16 lg:p-20 bg-slate-200">
        {/* sign in/sign up*/}
        <div className="h-full w-full flex bg-white sm:rounded-[2rem] shadow-2xl">
          {/* first half */}
          <div
            className={`${
              isSignIn
                ? "transform translate-x-0 rounded-r-[11rem] sm:rounded-l-3xl"
                : "transform translate-x-[100%] rounded-l-[11rem] sm:rounded-r-3xl"
            } h-full flex-1 bg-blue-600 duration-700`}
          >
            {isSignIn ? (
              <div
                className={`${
                  isAnimate && "animate-fade"
                } h-full w-full flex flex-col gap-4 justify-center items-center`}
              >
                <img
                  className="w-11/12"
                  src={SignUpImage}
                  alt="sign up Image"
                />
                <p className="font-normal text-white">
                  Already a Member?{" "}
                  <span
                    className="font-bold cursor-pointer"
                    onClick={handleSwitch}
                  >
                    Sign In
                  </span>
                </p>
              </div>
            ) : (
              <div
                className={`${
                  isAnimate && "animate-fade"
                } h-full w-full flex flex-col gap-4 justify-center items-center`}
              >
                <img
                  className="w-11/12"
                  src={SignInImage}
                  alt="Sign In Image"
                />
                <p className="font-normal text-white">
                  New Here?{" "}
                  <span
                    className="cursor-pointer font-bold"
                    onClick={handleSwitch}
                  >
                    Sign Up
                  </span>
                </p>
                <p className="text-white">Or sign in with .... ....</p>
              </div>
            )}
          </div>

          {/* second half */}
          <div
            className={`${
              isSignIn
                ? "transform translate-x-0"
                : "transform translate-x-[-100%]"
            }
            ${isAnimate && "animate-fade"}
            flex-1 duration-700`}
          >
            {isSignIn ? (
              <form
                // onSubmit={handleSubmit(onSubmit)}
                className="h-full w-full flex flex-col items-center gap-2 md:gap-4 lg:gap-6 justify-center pl-8 pr-8 sm:pl-12 sm:pr-12"
              >
                <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-bold">
                  Sign Up
                </h1>

                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    value={signUpData.username}
                    onChange={handleSignUpChange}
                    // onChange={handleChange}
                    // {...register("username")}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                  {errors.username?.message}
                </p> */}
                </div>

                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    // onChange={handleChange}
                    // {...register("email")}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                  {errors.email?.message}
                </p> */}
                </div>

                {/*if you add eye button, make sure to turn the type to text and back */}
                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    // onChange={handleChange}
                    // {...register("password")}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                  {errors.password?.message}
                </p> */}
                </div>

                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={signUpData.confirmPassword}
                    onChange={handleSignUpChange}
                    // onChange={handleChange}
                    // {...register("confirmPassword")}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                  {errors.confirmPassword?.message}
                </p> */}
                </div>

                <button
                  type="submit"
                  className="h-10 md:h-14 w-full bg-blue-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-blue-800"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(signUpData);
                  }}
                >
                  Sign Up
                </button>

                <div className="flex flex-col items-center">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="iAgree"
                      id="iAgree"
                      value={signUpData["iAgree"]}
                      onChange={handleSignUpChange}
                      // onChange={handleChange}
                      // {...register("iAgree")}
                    />
                    <p>
                      I agree to all{" "}
                      <span className="text-blue-600">
                        <a href="/termsconditions">Terms and Conditions</a>
                      </span>
                    </p>
                  </div>
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold">
                  {errors.iAgree?.message}
                </p> */}
                </div>
              </form>
            ) : (
              <form
                action="submit"
                // onSubmit={handleSubmit(onSubmit)}
                className="h-full w-full flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center items-center pl-8 pr-8 sm:pl-12 sm:pr-12"
              >
                <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-bold">
                  Sign In
                </h1>

                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    value={signInData["username"]}
                    onChange={handleSignInChange}
                    // {...register("username")}
                    // onChange={handleChange}
                    // value={signInValues["username"]}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                    {errors.username?.message}
                  </p> */}
                </div>

                {/*if you add eye button, make sure to turn the type to text and back */}
                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={signInData["password"]}
                    onChange={handleSignInChange}
                    // {...register("password")}
                    // value={signInValues["password"]}
                    // onChange={handleChange}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                    {errors.password?.message}
                  </p> */}
                </div>

                <div className="flex gap-2 justify-start w-full">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    value={signInData["rememberMe"]}
                    onClick={handleSignInChange}
                    // onChange={handleSignInChange}
                    // {...register("remember")}
                    // value={signInValues["condition"]}
                    // onChange={handleChange}
                  />
                  <p>Remember Me </p>
                </div>

                <button
                  type="submit"
                  className="h-10 md:h-14 w-full bg-blue-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-blue-800"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(signInData);
                  }}
                >
                  Sign In
                </button>

                <p className="font-normal">
                  New Here?{" "}
                  <span className="text-blue-600">
                    <a href="/signup">Sign Up</a>
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* <div className="h-24 w-full flex">
          <button
            className={`${
              !isSignIn && "disabled:bg-red-900"
            } h-full w-full bg-red-600`}
            onClick={handleSwitch}
          >
            Sign In
          </button>
          <button className="h-full w-full bg-blue-600" onClick={handleSwitch}>
            Sign Up
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Auth;
