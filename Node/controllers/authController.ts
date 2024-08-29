import { Request, Response } from "express";
import {
  loginUserService,
  registerUserService,
} from "../services/authServices";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const data = await registerUserService(req.body);
    res.status(200).json(data);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Registration Failed!", error: err.message });
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const token = await loginUserService(req.body);
    res.status(200).json(token);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
