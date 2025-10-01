import express from "express";

const router = new express.Router();

router.get("/send", (req, res) => {
    res.send("Send message endpoint");
})

export default router;