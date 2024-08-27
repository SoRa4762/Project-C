import prisma from "../db";
import { CitizenshipInterface } from "../interfaces/citizenshipInterface";

export const getOneFullCitizenRecordService = async (citizenId: string) => {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      const getCitizenshipInfo = await prisma.citizenship.findUnique({
        where: { citizen_id: citizenId },
      });

      const getPersonalInfo = await prisma.personalInformation.findUnique({
        where: { citizen_id: citizenId },
      });

      const getEconomicInfo = await prisma.economicInformation.findUnique({
        where: { citizen_id: citizenId },
      });

      const getDemographicInfo = await prisma.demographicInformation.findUnique(
        {
          where: { citizen_id: citizenId },
        }
      );

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
    });

    return result;
  } catch (err) {
    console.error("Getting Full Citizen Record Failed:", err);
    throw new Error("Transaction failed and has been rolled back.");
  } finally {
    await prisma.$disconnect();
  }
};

export const getAllFullCitizenRecordService = async () => {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      const getAllFullCitizenshipInfo = await prisma.citizenship.findMany();
      const getAllPersonalInfo = await prisma.personalInformation.findMany();
      const getAllResidentalInfo =
        await prisma.residentalInformation.findMany();
      const getAllEconomicInfo = await prisma.economicInformation.findMany();
      const getAllHealthInfo = await prisma.healthInformation.findMany();
      const getAllDemographicInfo =
        await prisma.demographicInformation.findMany();

      console.log("Getting all full citizen records from sevices", {
        getAllFullCitizenshipInfo,
        getAllPersonalInfo,
        getAllResidentalInfo,
        getAllEconomicInfo,
        getAllHealthInfo,
        getAllDemographicInfo,
      });

      return {
        getAllFullCitizenshipInfo,
        getAllPersonalInfo,
        getAllResidentalInfo,
        getAllEconomicInfo,
        getAllHealthInfo,
        getAllDemographicInfo,
      };
    });

    return result;
  } catch (err) {
    console.log("Error getting all full citizen records:", err);
    throw new Error("Transaction failed and has been rolled back.");
  } finally {
    prisma.$disconnect();
  }
};

export const createOneFullCitizenRecordService = async (
  data: CitizenshipInterface
) => {
  try {
    const result = await prisma.$transaction(async () => {
      // console.log("Creating full citizen record - service:", data);
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
        createCitizenshipInfo,
        createPersonalInfo,
        createResidentalInfo,
        createEconomicInfo,
        createHealthInfo,
        createDemographicInfo,
      };
    });

    return result;
  } catch (err) {
    console.log("Error creating full citizen record:", err);
    // return err; if you do this, error from TS will send ok message, but your data wont be added
    throw new Error("Transaction failed and has been rolled back.");
  } finally {
    prisma.$disconnect();
  }
};
