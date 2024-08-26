import prisma from "../db";

export const getUsersService = async () => {
  try {
    const user = await prisma.user.findMany();
    return user;
  } catch (err) {
    throw new Error("Failed to get user");
  }
};
