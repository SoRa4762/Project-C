import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fullCitizenSchema } from "../validation/citizenValidation";
import { CitizenshipInterface } from "../interfaces/citizenInteface";
import { useAuth } from "../context/useAuth";

const FullCitizenForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(fullCitizenSchema) });

  const onSubmit = (data: CitizenshipInterface) => {
    console.log(data);
  };

  const { logout } = useAuth();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-emerald-600 text-2xl md:text-3xl lg:text-4xl font-bold">
          Citizenship Form
        </h1>
        <button
          onClick={logout}
          className="h-10 md:h-14 w-24 bg-red-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-red-800"
        >
          Log out
        </button>
      </div>
      <form
        action="submit"
        // @ts-expect-error: no way errors is null
        onSubmit={handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 sm:grid-rows-2 gap-x-12 gap-y-4 px-12 py-4"
      >
        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="CitizenId"
            id="citizenId"
            {...register("citizenId")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.citizenId?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="National ID Number"
            id="nationalIdNumber"
            {...register("nationalIdNumber")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.nationalIdNumber?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Passport Number"
            id="passportNumber"
            {...register("passportNumber")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.passportNumber?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Other Identification"
            id="otherIdentification"
            {...register("otherIdentification")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.otherIdentification?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="First Name"
            id="firstName"
            {...register("firstName")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.firstName?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Last Name"
            id="lastName"
            {...register("lastName")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.lastName?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="number"
            placeholder="Age"
            id="age"
            {...register("age")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.age?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Gender"
            id="gender"
            {...register("gender")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.gender?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="date"
            placeholder="Date Of Birth"
            id="dateOfBirth"
            {...register("dateOfBirth")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.dateOfBirth?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Nationality"
            id="nationality"
            {...register("nationality")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.nationality?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Marital Status"
            id="maritalStatus"
            {...register("maritalStatus")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.maritalStatus?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Address"
            id="address"
            {...register("address")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.address?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="number"
            placeholder="Household Size"
            id="householdSize"
            {...register("householdSize")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.householdSize?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Ownership Status"
            id="ownershipStatus"
            {...register("ownershipStatus")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.ownershipStatus?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Occupation"
            id="occupation"
            {...register("occupation")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.occupation?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Employment Status"
            id="employmentStatus"
            {...register("employmentStatus")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.employmentStatus?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Income Level"
            id="incomeLevel"
            {...register("incomeLevel")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.incomeLevel?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Income Source"
            id="incomeSource"
            {...register("incomeSource")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.incomeSource?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Education Level"
            id="educationLevel"
            {...register("educationLevel")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.educationLevel?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Disabilities"
            id="disabilities"
            {...register("disabilities")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.disabilities?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Chronic Diseases"
            id="chronicDiseases"
            {...register("chronicDiseases")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.chronicDiseases?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Access To Healthcare"
            id="accessToHealthcare"
            {...register("accessToHealthcare")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.accessToHealthcare?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Ethnicity"
            id="ethnicity"
            {...register("ethnicity")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.ethnicity?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Religion"
            id="religion"
            {...register("religion")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.religion?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Primary Language"
            id="primaryLanguage"
            {...register("primaryLanguage")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.primaryLanguage?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Secondary Language"
            id="secondaryLanguage"
            {...register("secondaryLanguage")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.secondaryLanguage?.message}
          </p>
        </div>

        <button
          type="submit"
          className="h-12 md:h-14 w-full bg-emerald-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-emerald-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FullCitizenForm;
