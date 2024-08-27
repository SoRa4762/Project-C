import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: any;
}

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";

export const authenticateJWT = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403); //forbidden
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); //unauthorized
  }
};
