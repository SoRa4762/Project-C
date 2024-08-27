import prisma from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";

export const createUserService = async (email: string, password: string) => {
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
    },
  });
};

export const getUsersService = async () => {
  try {
    const user = await prisma.user.findMany();
    return user;
  } catch (err) {
    throw new Error("Failed to get user");
  }
};
