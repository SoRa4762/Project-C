export interface CitizenshipInterface {
  citizen_id: string;
  national_id_number: string;
  passport_number?: string;
  other_identification?: string;
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  date_of_birth: string;
  nationality: string;
  marital_status: string;
  address: string;
  household_size: number;
  ownership_status: string;
  occupation: string;
  employment_status: string;
  income_level: string;
  income_source: string;
  education_level: string;
  disabilities: string;
  chronic_diseases: string;
  access_to_healthcare: string;
  ethnicity: string;
  religion: string;
  primary_language: string;
  secondary_language: string;
}
