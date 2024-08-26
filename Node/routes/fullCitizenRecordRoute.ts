import { getTransactionController } from "../controllers/fullCitizenRecordController";

const express = require("express");
const router = express.Router();

router.get("/", getTransactionController);

module.exports = router;
