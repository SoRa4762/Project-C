import express, { Application } from "express";
import dotenv from "dotenv";
const userRoute = require("./routes/userRoute");
const citizenshipRoute = require("./routes/citizenshipRecordRoute");
const authRoute = require("./routes/authRoute");
const cors = require("cors");

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;

//redirecting routes
app.use("/auth", userRoute);
app.use("/citizenship", citizenshipRoute);
app.use("/auth", authRoute);

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (error: Error) => {
    console.log(`${error}`);
  });
