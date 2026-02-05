import { Report } from "../models/report.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const uploadReport = asyncHandler(async (req, res) => {
    if (req.user.role !== "DOCTOR") {
        throw new ApiError(403, "Only doctors can upload reports");
    }

    const { caseId, aiSummary } = req.body;

    const report = await Report.create({
        caseId,
        fileUrl: req.file.path,
        aiSummary,
        uploadedBy: req.user._id,
    });

    return res
        .status(201)
        .json(new ApiResponse(201, report, "Report uploaded"));
});

export { uploadReport };
