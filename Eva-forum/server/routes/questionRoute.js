const express = require("express");
const router = express.Router();

// authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

// question controllers
const {
askQuestion,
getAllQuestions,
getQuestionDetail,
} = require("../controller/questionController");



// all quest route
router.get("/all-questions", authMiddleware, getAllQuestions);

// ask quest route
router.post("/ask-questions", authMiddleware, askQuestion);

// detail quest route
router.get("/detail-question", authMiddleware, getQuestionDetail);

module.exports = router;