import mongoose from "mongoose";

const caseSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        assignedDoctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        aiCondition: {
            type: String,
            enum: ["NORMAL", "MODERATE", "CRITICAL"],
            required: true,
        },
        clinicalAttention: {
            type: String,
            enum: ["STABLE", "MONITOR", "ATTENTION_REQUIRED"],
        },
        specialistRequired: {
            type: String, // cardiologist, pulmonologist etc
        },
        status: {
            type: String,
            enum: ["OPEN", "IN_REVIEW", "CLOSED"],
            default: "OPEN",
        },
    },
    { timestamps: true }
);

export const Case = mongoose.model("Case", caseSchema);
