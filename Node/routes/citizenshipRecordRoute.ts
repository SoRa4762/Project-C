import {
  createOneFullCitizenRecordController,
  getAllFullCitizenRecordController,
  getOneFullCitizenRecordController,
} from "../controllers/fullCitizenRecordController";
import { authenticateJWT } from "../middleware/authMiddleware";

const express = require("express");
const router = express.Router();

router.get("/", authenticateJWT, getAllFullCitizenRecordController);
router.get("/:citizenId", authenticateJWT, getOneFullCitizenRecordController);
router.post("/", authenticateJWT, createOneFullCitizenRecordController);

module.exports = router;
