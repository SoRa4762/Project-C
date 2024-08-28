import { getUsersController } from "../controllers/userController";
import { authenticateJWT } from "../middleware/authMiddleware";

const express = require("express");
const router = express.Router();

router.get("/", authenticateJWT, getUsersController);

module.exports = router;
