import bcrypt from "bcrypt";

import { AuthInterface } from "../interfaces/authInterface";
import prisma from "../db";

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";
const SALT_ROUNDS = 10;

export const registerUserService = async (data: AuthInterface) => {
  try {
    const hashedPasword = await bcrypt.hash(data.password, SALT_ROUNDS);

    const registerUser = prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPasword,
      },
    });

    return registerUser;
  } catch (err) {
    return err;
  }
};
