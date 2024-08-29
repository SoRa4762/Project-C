import * as yup from "yup";

export const fullCitizenSchema = yup.object().shape({
  citizenId: yup.string().required("Citizen ID shall not be empty"),
  nationalIdNumber: yup.string().required("National ID shall not be empty"),
  passportNumber: yup.string(),
  otherIdentification: yup.string(),
  firstName: yup.string().required("First name shall not be empty"),
  lastName: yup.string().required("Last name shall not be empty"),
  age: yup.number().required("Age shall not be empty"),
  gender: yup.string().required("Gender shall not be empty"),
  dateOfBirth: yup.string().required("Date of birth shall not be empty"),
  nationality: yup.string().required("Nationality shall not be empty"),
  maritalStatus: yup.string().required("Marital status shall not be empty"),
  address: yup.string().required("Address shall not be empty"),
  householdSize: yup.number().required("Household size shall not be empty"),
  ownershipStatus: yup.string().required("Ownership status shall not be empty"),
  occupation: yup.string().required("Occupation shall not be empty"),
  employmentStatus: yup
    .string()
    .required("Employment status shall not be empty"),
  incomeLevel: yup.number().required("Income shall not be empty"),
  incomeSource: yup.string().required("Income source shall not be empty"),
  educationLevel: yup.string().required("Education level shall not be empty"),
  disabilities: yup.string().required("Disabilities shall not be empty"),
  chronicDiseases: yup.string().required("Chronic diseases shall not be empty"),
  accessToHealthcare: yup
    .string()
    .required("Access to healthcare shall not be empty"),
  ethnicity: yup.string().required("Ethnicity shall not be empty"),
  religion: yup.string().required("Religion shall not be empty"),
  primaryLanguage: yup.string().required("Primary language shall not be empty"),
  secondaryLanguage: yup
    .string()
    .required("Secondary language shall not be empty"),
});
