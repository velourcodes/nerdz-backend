import { genAI } from "./config.gemini.js";

/**
 * Evaluates patient health condition using AI
 * @param {Object} wearableData
 * @returns {Object} { aiCondition, specialistRequired }
 */
export const evaluateHealth = async (wearableData) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
You are a medical triage AI.

Based on the following wearable data, classify the patient's condition strictly as:
- NORMAL
- MODERATE
- CRITICAL

If CRITICAL, also decide the medical specialization required.
If not critical, return null for specialization.

Respond ONLY in valid JSON.

Wearable Data:
${JSON.stringify(wearableData)}
    
JSON format:
{
  "aiCondition": "NORMAL | MODERATE | CRITICAL",
  "specialistRequired": "Cardiologist | Pulmonologist | Neurologist | null"
}
`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    let parsed;
    try {
        parsed = JSON.parse(responseText);
    } catch (err) {
        // AI failed → safest fallback
        return {
            aiCondition: "MODERATE",
            specialistRequired: null,
        };
    }

    return {
        aiCondition: parsed.aiCondition ?? "MODERATE",
        specialistRequired: parsed.specialistRequired ?? null,
    };
};
