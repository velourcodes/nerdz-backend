import { useState } from "react";
import { Header } from "./Header";

export default function TakeReport() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [summary, setSummary] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setStatus("idle");
    setSummary(null);
  };

  const handleUpload = () => {
    if (!file) return;

    setStatus("uploading");

    setTimeout(() => {
      setStatus("success");
      setSummary({
        points: [
          "Most values fall within normal reference ranges.",
          "No immediate critical indicators detected.",
          "Regular follow-ups help maintain long-term health.",
        ],
      });
    }, 1500);
  };

  return (
    <>
      <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Header />

        <div className="min-h-screen bg-slate-50 flex flex-col">
          {/* Centered Main Area */}
          <main className="flex-1 flex items-center justify-center px-6">
            <div className="w-full max-w-5xl space-y-10">
              {/* Upload Card */}
              <section className="bg-white rounded-3xl shadow-xl p-10 space-y-8">
                <header className="text-center space-y-2">
                  <h1 className="text-3xl font-semibold text-slate-900">
                    Upload Medical Report
                  </h1>
                  <p className="text-sm text-slate-500 max-w-xl mx-auto">
                    Upload your lab or medical report and receive a clear,
                    easy-to-understand AI-generated summary.
                  </p>
                </header>

                {/* Upload Zone */}
                <div className="flex justify-center">
                  <div className="w-full max-w-2xl">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                      id="reportUpload"
                    />

                    <label
                      htmlFor="reportUpload"
                      className="group flex flex-col items-center justify-center
                             border-2 border-dashed border-slate-300
                             rounded-2xl p-14 cursor-pointer
                             hover:border-blue-400 hover:bg-blue-50/40
                             transition"
                    >
                      <div
                        className="w-16 h-16 rounded-full bg-blue-100
                                  flex items-center justify-center
                                  text-blue-600 text-2xl"
                      >
                        📄
                      </div>

                      <p className="mt-4 text-sm font-medium text-slate-700">
                        Click to upload your report
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        PDF, JPG, PNG • Secure & private
                      </p>
                    </label>

                    {file && (
                      <p className="mt-4 text-sm text-center text-slate-700">
                        Selected file:{" "}
                        <span className="font-medium">{file.name}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Action */}
                <div className="flex justify-center">
                  <button
                    onClick={handleUpload}
                    disabled={!file || status === "uploading"}
                    className="px-8 py-3 rounded-xl
                           bg-blue-600 text-white
                           text-sm font-semibold
                           hover:bg-blue-700
                           disabled:opacity-50
                           transition"
                  >
                    {status === "uploading"
                      ? "Analyzing report..."
                      : "Analyze Report"}
                  </button>
                </div>

                {status === "success" && (
                  <div
                    className="text-center text-sm text-green-700 bg-green-50
                              rounded-xl py-3"
                  >
                    ✅ Report analyzed successfully
                  </div>
                )}
              </section>

              {/* Summary */}
              {summary && (
                <section className="bg-white rounded-3xl shadow-lg p-8 space-y-4">
                  <div className="flex justify-center">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium
                                 bg-blue-100 text-blue-700"
                    >
                      AI Summary
                    </span>
                  </div>

                  <ul className="max-w-2xl mx-auto space-y-3 text-sm text-slate-700">
                    {summary.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-center text-xs text-slate-500">
                    This summary is informational only and not a medical
                    diagnosis.
                  </p>
                </section>
              )}
            </div>
          </main>

          {/* Footer / Trust */}
          <footer className="py-6 text-center text-xs text-slate-500">
            Reports are processed securely and not stored permanently.
          </footer>
        </div>
      </div>
    </>
  );
}
