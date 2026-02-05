import mongoose from "mongoose";

const wearableDataSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        metric: {
            type: String,
            enum: ["HEART_RATE", "SPO2", "SLEEP", "STEPS"],
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        recordedAt: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

export const WearableData = mongoose.model("WearableData", wearableDataSchema);
