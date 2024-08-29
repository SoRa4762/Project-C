import { useEffect, useState } from "react";
import SignInImage from "../assets/undraw_signin_rosequartz.svg";
import SignUpImage from "../assets/undraw_signup_rosequartz.svg";
import GoogleIcon from "../assets/googleLogo.png";
import GithubIcon from "../assets/githubLogo.png";
import { loginType, registerType } from "../interfaces/userInterface";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAnimate, setIsAnimate] = useState(false);
  const [signUpData, setSignUpData] = useState<registerType>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    iAgree: false,
  });

  const [signInData, setSignInData] = useState<loginType>({
    email: "",
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
      <div className="h-[100vh] w-full sm:p-12 md:p-16 lg:p-20 bg-teal-200">
        {/* sign in/sign up*/}
        <div
          className={`${
            isSignIn ? "rounded-r-[2rem]" : "rounded-l-[2rem]"
          } h-full w-full flex bg-white shadow-2xl transition-all duration-700`}
        >
          {/* first half */}
          <div
            className={`${
              isSignIn
                ? "transform translate-x-0 rounded-r-[2rem]"
                : "transform translate-x-[100%] rounded-l-[2rem]"
            } h-full flex-1 bg-emerald-600 duration-700`}
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
                <div className="flex text-white gap-2 items-center">
                  Or sign in with{" "}
                  <img
                    className="h-8 w-8 rounded-full object-cover p-1 border-none cursor-pointer bg-white"
                    src={GoogleIcon}
                    alt="googleIcon"
                  />{" "}
                  <img
                    className="h-8 w-8 rounded-full object-cover p-1 border-none cursor-pointer bg-white"
                    src={GithubIcon}
                    alt="githubIcon"
                  />
                </div>
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
              <SignUpForm />
            ) : (
              <SignInForm handleSwitch={handleSwitch} />
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
          <button className="h-full w-full bg-emerald-600" onClick={handleSwitch}>
            Sign Up
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Auth;
