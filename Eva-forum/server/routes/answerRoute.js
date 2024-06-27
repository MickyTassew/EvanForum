const express = require("express");
const router = express.Router();

// auth middleware
const authMiddleware = require("../middleware/authMiddleware");

// answer controllers
const { answerQuestion, getAnswerPage } = require("../controller/answerController");

// answer question 
router.post("/answer-question", authMiddleware, answerQuestion);
controller
router.get("/get-answer/:questionid",authMiddleware,  getAnswerPage);


module.exports = router;