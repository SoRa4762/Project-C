import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../validation/authValidation";
import { registerType } from "../interfaces/userInterface";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const onSubmit = (register: registerType) => {
    console.log(register);
  };

  return (
    <>
      <form
        // @ts-expect-error: No need to check, mate!
        onSubmit={handleSubmit(onSubmit)}
        className="h-full w-full flex flex-col items-center gap-2 md:gap-4 lg:gap-6 justify-center pl-8 pr-8 sm:pl-12 sm:pr-12"
      >
        <h1 className="text-emerald-600 text-3xl md:text-4xl lg:text-5xl font-bold">
          Sign Up
        </h1>

        <div className="w-full">
          <input
            className="h-10 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Username"
            id="username"
            {...register("username")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.username?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-10 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="email"
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

        <div className="w-full">
          <input
            className="h-10 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <button
          type="submit"
          className="h-10 md:h-14 w-full bg-emerald-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-emerald-800"
        >
          Sign Up
        </button>

        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <input type="checkbox" id="iAgree" {...register("iAgree")} />
            <p>
              I agree to all{" "}
              <span className="text-emerald-600">
                <a href="/termsconditions">Terms and Conditions</a>
              </span>
            </p>
          </div>
          <p className="text-xs lg:text-sm text-red-600 font-semibold">
            {errors.iAgree?.message}
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
