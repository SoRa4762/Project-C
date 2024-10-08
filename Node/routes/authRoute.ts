import {
  loginUserController,
  registerUserController,
} from "../controllers/authController";

const express = require("express");
const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);

module.exports = router;
