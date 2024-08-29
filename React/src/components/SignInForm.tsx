import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../validation/authValidation";
import { loginType } from "../interfaces/userInterface";

const SignInForm = ({ handleSwitch }: { handleSwitch: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signInSchema) });

  const onSubmit = (login: loginType) => {
    console.log(login);
  };
  return (
    <form
      action="submit"
      //@ts-expect-error: No need to check, mate!
      onSubmit={handleSubmit(onSubmit)}
      className="h-full w-full flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center items-center pl-8 pr-8 sm:pl-12 sm:pr-12"
    >
      <h1 className="text-emerald-600 text-3xl md:text-4xl lg:text-5xl font-bold">
        Sign In
      </h1>

      <div className="w-full">
        <input
          className="h-10 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
          type="text"
          placeholder="Email"
          id="email"
          {...register("email")}
        />
        <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
          {errors.email?.message}
        </p>
      </div>

      {/*if you add eye button, make sure to turn the type to text and back */}
      <div className="w-full">
        <input
          className="h-10 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
          type="password"
          placeholder="Password"
          id="password"
          {...register("password")}
        />
        <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
          {errors.password?.message}
        </p>
      </div>

      <div className="flex gap-2 justify-start w-full">
        <input type="checkbox" id="rememberMe" {...register("rememberMe")} />
        <p>Remember Me </p>
      </div>

      <button
        type="submit"
        className="h-10 md:h-14 w-full bg-emerald-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-emerald-800"
      >
        Sign In
      </button>

      <p className="font-normal">
        New Here?{" "}
        <span className="text-emerald-600">
          <a onClick={handleSwitch} className="cursor-pointer">
            Sign Up
          </a>
        </span>
      </p>
    </form>
  );
};

export default SignInForm;
