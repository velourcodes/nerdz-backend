import { WearableData } from "../models/wearableData.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const ingestWearableData = asyncHandler(async (req, res) => {
    if (req.user.role !== "PATIENT") {
        throw new ApiError(403, "Only patients can submit wearable data");
    }

    const { metric, value, recordedAt } = req.body;

    const data = await WearableData.create({
        patientId: req.user._id,
        metric,
        value,
        recordedAt,
    });

    return res
        .status(201)
        .json(new ApiResponse(201, data, "Wearable data saved"));
});

export { ingestWearableData };
