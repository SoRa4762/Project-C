import prisma from "../db";
import { CitizenshipInterface } from "../interfaces/citizenshipInterface";

export const getOneFullCitizenRecordService = async (citizenId: string) => {
  const getCitizenshipInfo = await prisma.citizenship.findUnique({
    where: { citizen_id: citizenId },
  });

  const getPersonalInfo = await prisma.personalInformation.findUnique({
    where: { citizen_id: citizenId },
  });

  const getEconomicInfo = await prisma.economicInformation.findUnique({
    where: { citizen_id: citizenId },
  });

  const getDemographicInfo = await prisma.demographicInformation.findUnique({
    where: { citizen_id: citizenId },
  });

  const getResidentalInfo = await prisma.demographicInformation.findUnique({
    where: { citizen_id: citizenId },
  });

  const getHealthInfo = await prisma.demographicInformation.findUnique({
    where: { citizen_id: citizenId },
  });

  return {
    getCitizenshipInfo,
    getPersonalInfo,
    getEconomicInfo,
    getDemographicInfo,
    getResidentalInfo,
    getHealthInfo,
  };
};

export const getAllFullCitizenRecordService = async () => {
  const getAllFullCitizenshipInfo = await prisma.citizenship.findMany();
  const getAllPersonalInfo = await prisma.personalInformation.findMany();
  const getAllResidentalInfo = await prisma.residentalInformation.findMany();
  const getAllEconomicInfo = await prisma.economicInformation.findMany();
  const getAllHealthInfo = await prisma.healthInformation.findMany();
  const getAllDemographicInfo = await prisma.demographicInformation.findMany();

  return {
    getAllFullCitizenshipInfo,
    getAllPersonalInfo,
    getAllResidentalInfo,
    getAllEconomicInfo,
    getAllHealthInfo,
    getAllDemographicInfo,
  };
};

export const createOneFullCitizenRecordService = async (
  data: CitizenshipInterface
) => {
  const createCitizenshipInfo = await prisma.citizenship.create({
    data: {
      citizen_id: data.citizen_id,
      national_id_number: data.national_id_number,
      passport_number: data.passport_number,
      other_identification: data.other_identification,
    },
  });

  const createPersonalInfo = await prisma.personalInformation.create({
    data: {
      citizen_id: createCitizenshipInfo.citizen_id,
      first_name: data.first_name,
      last_name: data.last_name,
      age: data.age,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      nationality: data.nationality,
      marital_status: data.marital_status,
    },
  });

  const createResidentalInfo = await prisma.residentalInformation.create({
    data: {
      citizen_id: createCitizenshipInfo.citizen_id,
      address: data.address,
      household_size: data.household_size,
      ownership_status: data.ownership_status,
    },
  });

  const createEconomicInfo = await prisma.economicInformation.create({
    data: {
      citizen_id: createCitizenshipInfo.citizen_id,
      occupation: data.occupation,
      employment_status: data.employment_status,
      income_level: data.income_level,
      income_source: data.income_source,
      education_level: data.education_level,
    },
  });

  const createHealthInfo = await prisma.healthInformation.create({
    data: {
      citizen_id: createCitizenshipInfo.citizen_id,
      disabilities: data.disabilities,
      chronic_diseases: data.chronic_diseases,
      access_to_healthcare: data.access_to_healthcare,
    },
  });

  const createDemographicInfo = await prisma.demographicInformation.create({
    data: {
      citizen_id: createCitizenshipInfo.citizen_id,
      ethnicity: data.ethnicity,
      religion: data.religion,
      primary_language: data.primary_language,
      secondary_language: data.secondary_language,
    },
  });

  return {
    message: "Citizen Record Created Successfully",
    createCitizenshipInfo,
    createPersonalInfo,
    createResidentalInfo,
    createEconomicInfo,
    createHealthInfo,
    createDemographicInfo,
  };
};

export const updateOneFullCitizenRecordService = async (
  citizenId: string,
  data: CitizenshipInterface
) => {
  const updateCitizenshipInfo = await prisma.citizenship.update({
    where: { citizen_id: citizenId },
    data: {
      citizen_id: data.citizen_id,
      national_id_number: data.national_id_number,
      passport_number: data.passport_number,
      other_identification: data.other_identification,
    },
  });

  const updatePersonalInfo = await prisma.personalInformation.update({
    where: { citizen_id: citizenId },
    data: {
      citizen_id: data.citizen_id,
      first_name: data.first_name,
      last_name: data.last_name,
      age: data.age,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      nationality: data.nationality,
      marital_status: data.marital_status,
    },
  });

  const updateResidentalInfo = await prisma.residentalInformation.update({
    where: { citizen_id: citizenId },
    data: {
      citizen_id: data.citizen_id,
      address: data.address,
      household_size: data.household_size,
      ownership_status: data.ownership_status,
    },
  });

  const updateEconomicInfo = await prisma.economicInformation.update({
    where: { citizen_id: citizenId },
    data: {
      citizen_id: data.citizen_id,
      occupation: data.occupation,
      employment_status: data.employment_status,
      income_level: data.income_level,
      income_source: data.income_source,
      education_level: data.education_level,
    },
  });

  const updateHealthInfo = await prisma.healthInformation.update({
    where: { citizen_id: citizenId },
    data: {
      citizen_id: data.citizen_id,
      disabilities: data.disabilities,
      chronic_diseases: data.chronic_diseases,
      access_to_healthcare: data.access_to_healthcare,
    },
  });

  const updateDemographicInfo = await prisma.demographicInformation.update({
    where: { citizen_id: citizenId },
    data: {
      citizen_id: data.citizen_id,
      ethnicity: data.ethnicity,
      religion: data.religion,
      primary_language: data.primary_language,
      secondary_language: data.secondary_language,
    },
  });

  return {
    message: "Citizen Record Updated Successfully",
    updateCitizenshipInfo,
    updatePersonalInfo,
    updateResidentalInfo,
    updateEconomicInfo,
    updateHealthInfo,
    updateDemographicInfo,
  };
};

export const deleteOneFullCitizenRecordService = async (citizenId: string) => {
  const deletePersonalInfo = await prisma.personalInformation.delete({
    where: { citizen_id: citizenId },
  });

  const deleteResidentalInfo = await prisma.residentalInformation.delete({
    where: { citizen_id: citizenId },
  });

  const deleteEconomicInfo = await prisma.economicInformation.delete({
    where: { citizen_id: citizenId },
  });

  const deleteHealthInfo = await prisma.healthInformation.delete({
    where: { citizen_id: citizenId },
  });

  const deleteDemographicInfo = await prisma.demographicInformation.delete({
    where: { citizen_id: citizenId },
  });

  const deleteCitizenshipInfo = await prisma.citizenship.delete({
    where: { citizen_id: citizenId },
  });

  return {
    message: "Citizen Record Deleted Successfully",
    deleteCitizenshipInfo,
    deletePersonalInfo,
    deleteResidentalInfo,
    deleteEconomicInfo,
    deleteHealthInfo,
    deleteDemographicInfo,
  };
};
