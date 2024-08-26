import { Request, Response } from "express";
import prisma from "../db";

export const getTransactionService = async () => {
  try {
    return await prisma.personalInformation.findMany();
  } catch (err) {
    return err;
  }
};
