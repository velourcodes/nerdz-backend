import { vitals } from "../api/healthApi";
import VitalCard from "./VitalCard";

export function VitalsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {vitals.map((v, index) => (
        <div 
          key={v.label}
          className="animate-fadeIn"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <VitalCard vital={v} />
        </div>
      ))}
    </div>
  );
}