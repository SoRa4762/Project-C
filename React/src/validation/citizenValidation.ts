import * as yup from "yup";

export const fullCitizenSchema = yup.object().shape({
  citizen_id: yup.string().required("Citizen ID shall not be empty"),
  national_id_number: yup.string().required("National ID shall not be empty"),
  passport_number: yup.string(),
  other_identification: yup.string(),
  first_name: yup.string().required("First name shall not be empty"),
  last_name: yup.string().required("Last name shall not be empty"),
  age: yup.number().required("Age shall not be empty"),
  gender: yup.string().required("Gender shall not be empty"),
  date_of_birth: yup.string().required("Date of birth shall not be empty"),
  nationality: yup.string().required("Nationality shall not be empty"),
  marital_status: yup.string().required("Marital status shall not be empty"),
  address: yup.string().required("Address shall not be empty"),
  household_size: yup.number().required("Household size shall not be empty"),
  ownership_status: yup
    .string()
    .required("Ownership status shall not be empty"),
  occupation: yup.string().required("Occupation shall not be empty"),
  employment_status: yup
    .string()
    .required("Employment status shall not be empty"),
  income_level: yup.string().required("Income shall not be empty"),
  income_source: yup.string().required("Income source shall not be empty"),
  education_level: yup.string().required("Education level shall not be empty"),
  disabilities: yup.string().required("Disabilities shall not be empty"),
  chronic_diseases: yup
    .string()
    .required("Chronic diseases shall not be empty"),
  access_to_healthcare: yup
    .string()
    .required("Access to healthcare shall not be empty"),
  ethnicity: yup.string().required("Ethnicity shall not be empty"),
  religion: yup.string().required("Religion shall not be empty"),
  primary_language: yup
    .string()
    .required("Primary language shall not be empty"),
  secondary_language: yup
    .string()
    .required("Secondary language shall not be empty"),
});
