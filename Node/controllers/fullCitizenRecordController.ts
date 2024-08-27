import { Request, Response } from "express";
import {
  createOneFullCitizenRecordService,
  getAllFullCitizenRecordService,
  getOneFullCitizenRecordService,
} from "../services/fullCitizenRecordService";

export const getOneFullCitizenRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await getOneFullCitizenRecordService(req.params.citizenId);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to get transaction ", err });
  }
};

export const getAllFullCitizenRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await getAllFullCitizenRecordService();
    console.log(
      "Getting all full citizen records - controller:",
      await getAllFullCitizenRecordService()
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createOneFullCitizenRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    // console.log("Creating full citizen record - controller", req.body);
    const data = await createOneFullCitizenRecordService(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
