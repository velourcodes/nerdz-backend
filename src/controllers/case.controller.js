import { Case } from "../models/case.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

/**
 * PATIENT
 * AI creates a case based on wearable + report signals
 */
const createCaseFromAI = asyncHandler(async (req, res) => {
    if (req.user.role !== "PATIENT") {
        throw new ApiError(403, "Only patients can create cases");
    }

    const { aiCondition, specialistRequired } = req.body;

    const newCase = await Case.create({
        patientId: req.user._id,
        aiCondition,
        specialistRequired,
        status: "OPEN",
    });

    return res
        .status(201)
        .json(new ApiResponse(201, newCase, "Case created"));
});

/**
 * SYSTEM / ADMIN
 * Assigns doctor (general or specialist)
 */
const assignDoctor = asyncHandler(async (req, res) => {
    const { caseId, doctorId } = req.body;

    const updatedCase = await Case.findByIdAndUpdate(
        caseId,
        {
            assignedDoctorId: doctorId,
            status: "IN_REVIEW",
        },
        { new: true }
    );

    if (!updatedCase) {
        throw new ApiError(404, "Case not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, updatedCase, "Doctor assigned"));
});

/**
 * DOCTOR
 * Final medical decision
 */
const doctorSetClinicalAttention = asyncHandler(async (req, res) => {
    if (req.user.role !== "DOCTOR") {
        throw new ApiError(403, "Only doctors can close cases");
    }

    const { caseId, clinicalAttention } = req.body;

    const updatedCase = await Case.findByIdAndUpdate(
        caseId,
        {
            clinicalAttention,
            status: "CLOSED",
        },
        { new: true }
    );

    if (!updatedCase) {
        throw new ApiError(404, "Case not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                updatedCase,
                "Clinical attention recorded"
            )
        );
});

export {
    createCaseFromAI,
    assignDoctor,
    doctorSetClinicalAttention,
};
