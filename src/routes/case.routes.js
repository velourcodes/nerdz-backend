import { Router } from "express";
import {
    createCaseFromAI,
    doctorSetClinicalAttention,
} from "../controllers/case.controller.js";
import { JWTVerify, authorizeRoles } from "../middleware/auth.middleware.js";

const caseRouter = Router();

// Patient creates case (AI evaluated)
caseRouter
    .route("/create")
    .post(JWTVerify, authorizeRoles("PATIENT"), createCaseFromAI);

// Doctor sets final clinical attention
caseRouter
    .route("/set-clinical-attention")
    .patch(JWTVerify, authorizeRoles("DOCTOR"), doctorSetClinicalAttention);

export default caseRouter;
