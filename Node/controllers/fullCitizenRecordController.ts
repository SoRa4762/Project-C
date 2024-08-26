import { Request, Response } from "express";
import { getTransactionService } from "../services/fullCitizenRecordService";

export const getTransactionController = async (req: Request, res: Response) => {
  try {
    const transaction = await getTransactionService();
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: "Failed to get transaction ", err });
  }
};
