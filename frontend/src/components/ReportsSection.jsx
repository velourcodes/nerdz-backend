import { reports } from "../api/healthApi";
import { statusColor } from "../utils/statusColor";

export function ReportsSection() {
  const getStatusIcon = (status) => {
    const icons = {
      normal: "✓",
      healthy: "✓",
      critical: "⚠",
      moderate: "●",
    };
    return icons[status?.toLowerCase()] || "●";
  };

  const getStatusStyle = (status) => {
    const styles = {
      normal: "text-emerald-600 bg-emerald-50 border-emerald-200",
      healthy: "text-emerald-600 bg-emerald-50 border-emerald-200",
      critical: "text-red-600 bg-red-50 border-red-200",
      moderate: "text-amber-600 bg-amber-50 border-amber-200",
    };
    return styles[status?.toLowerCase()] || "text-slate-600 bg-slate-50 border-slate-200";
  };

  return (
    <section className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Medical Reports</h2>
          <p className="text-sm text-slate-500 mt-1">Recent test results</p>
        </div>
        <button className="text-sm font-medium text-white-600 hover:text-blue-500">
          View All →
        </button>
      </div>

      <div className="space-y-3">
        {reports.map((r) => (
          <div
            key={r.name}
            className="group flex items-center justify-between p-4 rounded-xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                {r.name}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Result: <span className="font-medium text-slate-700">{r.value}</span>
              </p>
            </div>

            <span
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border ${getStatusStyle(r.status)}`}
            >
              <span>{getStatusIcon(r.status)}</span>
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}