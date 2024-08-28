import {
  createOneFullCitizenRecordController,
  deleteOneFullCitizenRecordController,
  getAllFullCitizenRecordController,
  getOneFullCitizenRecordController,
  updateOneFullCitizenRecordController,
} from "../controllers/fullCitizenRecordController";
import { authenticateJWT } from "../middleware/authMiddleware";

const express = require("express");
const router = express.Router();

router.get("/", authenticateJWT, getAllFullCitizenRecordController);
router.get("/:citizenId", authenticateJWT, getOneFullCitizenRecordController);
router.post("/", authenticateJWT, createOneFullCitizenRecordController);
router.put(
  "/:citizenId",
  authenticateJWT,
  updateOneFullCitizenRecordController
);
router.delete(
  "/:citizenId",
  authenticateJWT,
  deleteOneFullCitizenRecordController
);

module.exports = router;
