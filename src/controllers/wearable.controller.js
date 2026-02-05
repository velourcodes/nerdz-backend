import { Case } from "../models/case.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { evaluateHealth } from "../services/ai/aiEvaluation.service.js";
import { autoAssignDoctor } from "../services/ai/doctorAutoAssignment.js";

const ingestWearableData = asyncHandler(async (req, res) => {
    const patientId = req.user._id;

    // 1️⃣ User submits RAW data
    const wearableData = req.body;

    // 2️⃣ AI evaluates
    const aiResult = await evaluateHealth(wearableData);
    /**
     * aiResult = {
     *   aiCondition: "CRITICAL",
     *   specialistRequired: "CARDIOLOGIST",
     *   confidence: 0.91
     * }
     */

    // 3️⃣ Case is created from AI result
    const newCase = await Case.create({
        patientId,
        aiCondition: aiResult.aiCondition,
        specialistRequired: aiResult.specialistRequired,
        status: "OPEN",
    });

    // 4️⃣ Auto assign doctor
    await autoAssignDoctor(newCase);

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                newCase,
                "Wearable data processed & case created"
            )
        );
});

export { ingestWearableData };
