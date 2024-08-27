import { Request, Response } from "express";
import { registerUserService } from "../services/authServices";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const data = await registerUserService(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
