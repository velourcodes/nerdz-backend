import { useState } from "react";

export default function TakeReport() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | uploading | success
  const [summary, setSummary] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setStatus("idle");
    setSummary(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    setStatus("uploading");

    // simulate API upload + AI processing
    setTimeout(() => {
      setStatus("success");
      setSummary({
        title: "Report Overview",
        points: [
          "Vitals appear within general reference ranges.",
          "No immediate critical indicators detected.",
          "Regular monitoring is recommended.",
        ],
        note:
          "This summary is informational only and not a medical diagnosis.",
      });
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-xl font-semibold text-slate-800">
            Upload Medical Report
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Upload lab reports or medical documents (PDF, JPG, PNG)
          </p>
        </div>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-blue-200 rounded-xl p-6 text-center bg-blue-50/40">
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
            id="reportUpload"
          />

          <label
            htmlFor="reportUpload"
            className="cursor-pointer inline-flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              📄
            </div>
            <span className="text-sm font-medium text-slate-700">
              Click to upload report
            </span>
            <span className="text-xs text-slate-500">
              PDF or image files only
            </span>
          </label>

          {file && (
            <p className="mt-3 text-sm text-slate-700">
              Selected: <span className="font-medium">{file.name}</span>
            </p>
          )}
        </div>

        {/* Action */}
        <div className="flex justify-end">
          <button
            onClick={handleUpload}
            disabled={!file || status === "uploading"}
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {status === "uploading" ? "Uploading..." : "Submit Report"}
          </button>
        </div>

        {/* Status */}
        {status === "success" && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            ✅ Report uploaded successfully
          </div>
        )}
      </section>

      {/* Summary */}
      {summary && (
        <section className="mt-6 bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            {summary.title}
          </h2>

          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            {summary.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-slate-500">
            {summary.note}
          </p>
        </section>
      )}
    </div>
  );
}
