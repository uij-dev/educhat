import express from 'express';
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js"
import cors from "cors";

const app = express();
const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json()); // req.body
app.use(cors({origin: ENV.CLIENT_URL, credentials: true}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// make ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })
}
app.listen(PORT, () => {
    console.log("server is running on port 3000");
    connectDB();
});