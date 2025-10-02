import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = new express.Router({mergeParams: true});


router.post("/signup", signup)

router.get("/login", (req, res) => {
    res.send("Login endpoint");
})

router.get("/logout", (req, res) => {
    res.send("Logout endpoint");
})

export default router;