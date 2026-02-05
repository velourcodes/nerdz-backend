import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRoutes from "./routes/user.routes.js";
import wearableRouter from "./routes/wearable.routes.js";
import caseRouter from "./routes/case.routes.js";
import reportRouter from "./routes/report.routes.js";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/wearable", wearableRouter);
app.use("/api/v1/case", caseRouter);
app.use("/api/v1/report", reportRouter);

export { app };
