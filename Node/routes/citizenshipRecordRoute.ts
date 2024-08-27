import {
  createOneFullCitizenRecordController,
  getAllFullCitizenRecordController,
  getOneFullCitizenRecordController,
} from "../controllers/fullCitizenRecordController";

const express = require("express");
const router = express.Router();

router.get("/", getAllFullCitizenRecordController);
router.get("/:citizenId", getOneFullCitizenRecordController);
router.post("/", createOneFullCitizenRecordController);

module.exports = router;
