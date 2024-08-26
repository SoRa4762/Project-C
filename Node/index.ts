import express, { Application } from "express";
import dotenv from "dotenv";
const userRoute = require("./routes/userRoute");
const transactionRoute = require("./routes/transactionRoute");

dotenv.config();
const app: Application = express();

const PORT = "jeueu";

//redirecting routes
app.use("/auth", userRoute);
app.use("/transaction", transactionRoute);

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (error: Error) => {
    console.log(`${error}`);
  });
