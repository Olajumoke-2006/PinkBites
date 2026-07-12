const express = require("express");

const router = express.Router();

const {
    chatController
} = require("../controllers/chatController");


// Chatbot endpoint
// POST /api/chat
router.post("/", chatController);


// Test route
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Chat route working"
    });
});


module.exports = router;