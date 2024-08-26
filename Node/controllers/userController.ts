import { Request, Response } from "express";
import { getUsersService } from "../services/userService";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const user = await getUsersService();
    res.status(200).json(user);
  } catch {
    res.status(500).json({ message: "Failed to get user" });
  }
};
