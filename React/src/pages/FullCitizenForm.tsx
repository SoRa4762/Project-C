import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fullCitizenSchema } from "../validation/citizenValidation";
import { CitizenshipInterface } from "../interfaces/citizenInteface";
import { Link } from "react-router-dom";
import { addCitizen } from "../api/citizen";

const FullCitizenForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(fullCitizenSchema) });

  const onSubmit = async (data: CitizenshipInterface) => {
    const formattedDate = new Date(data.date_of_birth).toISOString();
    const updatedData = { ...data, date_of_birth: formattedDate };
    const response = await addCitizen(updatedData);
    console.log(response);
    console.log(updatedData);
  };

  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 sm:grid-rows-2 gap-x-12 gap-y-4 px-12 py-4"
      >
        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Citizen ID"
            id="citizenId"
            {...register("citizen_id")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.citizen_id?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="National ID Number"
            id="nationalIdNumber"
            {...register("national_id_number")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.national_id_number?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Passport Number"
            id="passportNumber"
            {...register("passport_number")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.passport_number?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Other Identification"
            id="otherIdentification"
            {...register("other_identification")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.other_identification?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="First Name"
            id="firstName"
            {...register("first_name")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.first_name?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Last Name"
            id="lastName"
            {...register("last_name")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.last_name?.message}
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
            {...register("date_of_birth")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.date_of_birth?.message}
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
            {...register("marital_status")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.marital_status?.message}
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
            {...register("household_size")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.household_size?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Ownership Status"
            id="ownershipStatus"
            {...register("ownership_status")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.ownership_status?.message}
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
            {...register("employment_status")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.employment_status?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Income Level"
            id="incomeLevel"
            {...register("income_level")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.income_level?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Income Source"
            id="incomeSource"
            {...register("income_source")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.income_source?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Education Level"
            id="educationLevel"
            {...register("education_level")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.education_level?.message}
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
            {...register("chronic_diseases")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.chronic_diseases?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Access To Healthcare"
            id="accessToHealthcare"
            {...register("access_to_healthcare")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.access_to_healthcare?.message}
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
            {...register("primary_language")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.primary_language?.message}
          </p>
        </div>

        <div className="w-full">
          <input
            className="h-12 md:h-14 pl-4 w-full border-2 border-emerald-600 rounded-md focus:border-emerald-600"
            type="text"
            placeholder="Secondary Language"
            id="secondaryLanguage"
            {...register("secondary_language")}
          />
          <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
            {errors.secondary_language?.message}
          </p>
        </div>

        <button
          type="submit"
          className="h-12 md:h-14 w-full bg-emerald-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-emerald-800"
        >
          Submit
        </button>

        <Link
          to={"/home"}
          type="submit"
          className="h-12 md:h-14 w-full flex items-center justify-center bg-amber-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-emerald-800"
        >
          Back
        </Link>
      </form>
    </>
  );
};

export default FullCitizenForm;
