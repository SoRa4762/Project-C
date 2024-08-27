import { Request, Response } from "express";
import {
  createOneFullCitizenRecordService,
  getAllFullCitizenRecordService,
  getOneFullCitizenRecordService,
} from "../services/fullCitizenRecordService";
import prisma from "../db";

export const getOneFullCitizenRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await prisma.$transaction(async () => {
      const result = await getOneFullCitizenRecordService(req.params.citizenId);
      return result;
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "The transaction failed: ", err });
  } finally {
    prisma.$disconnect();
  }
};

export const getAllFullCitizenRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await prisma.$transaction(async () => {
      const result = await getAllFullCitizenRecordService();
      return result;
    });
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: "The transaction failed: ", err });
  } finally {
    prisma.$disconnect();
  }
};
export const createOneFullCitizenRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await prisma.$transaction(async () => {
      const result = await createOneFullCitizenRecordService(req.body);
      return result;
    });
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: "The transaction failed: ", err });
  } finally {
    prisma.$disconnect();
  }
};
