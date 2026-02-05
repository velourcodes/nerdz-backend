import { Router } from "express";
import { ingestWearableData } from "../controllers/wearable.controller.js";
import {
    JWTVerify,
    authorizeRoles,
} from "../middleware/auth.middleware.js";

const wearableRouter = Router();

wearableRouter
    .route("/ingest")
    .post(JWTVerify, authorizeRoles("PATIENT"), ingestWearableData);

export default wearableRouter;
