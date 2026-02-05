import { Router } from "express";
import { uploadReport } from "../controllers/report.controller.js";
import {
    JWTVerify,
    authorizeRoles,
} from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const reportRouter = Router();

reportRouter.route("/upload").post(
    JWTVerify,
    authorizeRoles("DOCTOR"),
    upload.single("report"),
    uploadReport
);

export default reportRouter;
