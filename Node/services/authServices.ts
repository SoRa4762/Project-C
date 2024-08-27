import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { RegisterInterface, LoginInterface } from "../interfaces/authInterface";
import prisma from "../db";

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";
const SALT_ROUNDS = 10;

//register user
export const registerUserService = async (data: RegisterInterface) => {
  const hashedPasword = await bcrypt.hash(data.password, SALT_ROUNDS);

  const registerUser = prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      password: hashedPasword,
    },
  });

  return registerUser;
};

// login user
export const loginUserService = async (data: LoginInterface) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(data.password, user.password);
  if (!isPasswordValid) {
    // return {
    //   error: "Invalid password!",
    // };
    throw new Error("Invalid password!"); //it did not return message to the user
  }

  const token = jwt.sign(
    {
      userId: user.id,
      username: user.username,
      userEmail: user.email,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  return token;
};
