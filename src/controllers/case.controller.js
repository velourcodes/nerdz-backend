import { Case } from "../models/case.model.js";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

/**
 * PATIENT
 * AI creates a case
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

    // 🔁 AUTO ASSIGN AFTER CREATION
    await autoAssignDoctor(newCase);

    return res
        .status(201)
        .json(new ApiResponse(201, newCase, "Case created"));
});

/**
 * INTERNAL — AI / SYSTEM LOGIC
 * Automatically assigns doctor
 */
const autoAssignDoctor = async (caseDoc) => {
    let doctorQuery = {
        role: "DOCTOR",
        "doctorProfile.isAvailable": true,
    };

    if (caseDoc.aiCondition === "CRITICAL") {
        doctorQuery["doctorProfile.specialization"] =
            caseDoc.specialistRequired;
    }

    const doctors = await User.find(doctorQuery);

    if (!doctors.length) return;

    // 🎲 Random assignment
    const assignedDoctor =
        doctors[Math.floor(Math.random() * doctors.length)];

    await Case.findByIdAndUpdate(caseDoc._id, {
        assignedDoctorId: assignedDoctor._id,
        status: "IN_REVIEW",
    });
};

/**
 * DOCTOR
 * Final medical decision
 */
const doctorSetClinicalAttention = asyncHandler(async (req, res) => {
    if (req.user.role !== "DOCTOR") {
        throw new ApiError(403, "Only doctors can close cases");
    }

    const { caseId, clinicalAttention } = req.body;

    const updatedCase = await Case.findOneAndUpdate(
        {
            _id: caseId,
            assignedDoctorId: req.user._id,
        },
        {
            clinicalAttention,
            status: "CLOSED",
        },
        { new: true }
    );

    if (!updatedCase) {
        throw new ApiError(404, "Case not found or unauthorized");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedCase,
            "Clinical attention recorded"
        )
    );
});

export {
    createCaseFromAI,
    doctorSetClinicalAttention,
};
