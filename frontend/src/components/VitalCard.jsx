export default function VitalCard({ vital }) {
  const statusStyles = {
    normal: "text-emerald-600 bg-emerald-50 border-emerald-200",
    moderate: "text-amber-600 bg-amber-50 border-amber-200",
    healthy: "text-emerald-600 bg-emerald-50 border-emerald-200",
    low: "text-orange-600 bg-orange-50 border-orange-200",
  };

  const trendIcon = {
    up: "↗",
    down: "↘",
    stable: "→",
  };

  const trendColor = {
    up: "text-emerald-600",
    down: "text-red-600",
    stable: "text-slate-500",
  };

  return (
    <div className="group bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
      
      {/* Top row: label + status */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-slate-700">
          {vital.label}
        </h4>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            statusStyles[vital.status?.toLowerCase()] || "text-slate-600 bg-slate-50 border-slate-200"
          }`}
        >
          {vital.status}
        </span>
      </div>

      {/* Value - Larger and more prominent */}
      <div className="mb-3">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
            {vital.value}
          </span>
          {vital.unit && (
            <span className="text-lg text-slate-500 font-medium">
              {vital.unit}
            </span>
          )}
        </div>
      </div>

      {/* Trend - Clean icons */}
      <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
        <span className={`text-lg font-bold ${trendColor[vital.trend] || "text-slate-500"}`}>
          {trendIcon[vital.trend] || "→"}
        </span>
        <span className="text-xs text-slate-500">
          vs yesterday
        </span>
      </div>
    </div>
  );
}