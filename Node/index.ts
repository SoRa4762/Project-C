import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(<h1>Hello World!</h1>);
});

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (error: Error) => {
    throw new Error(error.message);
  });
