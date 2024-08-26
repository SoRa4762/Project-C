import { getUsersController } from "../controllers/userController";

const express = require("express");
const router = express.Router();

router.get("/", getUsersController);

module.exports = router;
