import { User } from "../models/user.model.js";
import { Case } from "../models/case.model.js";

/**
 * Automatically assigns doctor based on AI evaluation
 * @param {Object} caseDoc - mongoose Case document
 */
export const autoAssignDoctor = async (caseDoc) => {
    let doctorQuery = {
        role: "DOCTOR",
        "doctorProfile.isAvailable": true,
    };

    // If AI marked case critical → assign specialist
    if (caseDoc.aiCondition === "CRITICAL" && caseDoc.specialistRequired) {
        doctorQuery["doctorProfile.specialization"] =
            caseDoc.specialistRequired;
    }

    // Find one available doctor randomly
    const doctors = await User.find(doctorQuery);

    if (!doctors.length) {
        // No doctor available → leave case OPEN
        return null;
    }

    const assignedDoctor = doctors[Math.floor(Math.random() * doctors.length)];

    // Update case
    caseDoc.assignedDoctorId = assignedDoctor._id;
    caseDoc.status = "IN_REVIEW";
    await caseDoc.save();

    // Mark doctor unavailable
    assignedDoctor.doctorProfile.isAvailable = false;
    await assignedDoctor.save({ validateBeforeSave: false });

    return assignedDoctor;
};
