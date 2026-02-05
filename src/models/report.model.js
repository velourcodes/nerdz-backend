import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
    {
        caseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Case",
            required: true,
        },
        fileUrl: {
            type: String,
            required: true,
        },
        aiSummary: {
            type: String, // doctor-support summary
        },
    },
    { timestamps: true }
);

export const Report = mongoose.model("Report", reportSchema);
