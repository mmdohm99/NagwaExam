const express = require("express");
const examRouter = express.Router();
const examController = require("../controller/examController");

examRouter
  .route("/")
  .get(examController.randomExam)
  .post(examController.examResult);
examRouter.route("/resualt").post(examController.trueOrFalse);

module.exports = examRouter;
