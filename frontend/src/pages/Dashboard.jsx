import { Header } from "../components/Header.jsx";
import { SummaryCard } from "../components/SummaryCard.jsx";
import { VitalsGrid } from "../components/VitalsGrid.jsx";
import { ReportsSection } from "../components/ReportsSection.jsx";
import { AIAdvisory } from "../components/AIAdvisory.jsx";
import { DoctorConnect } from "../components/DoctorConnect.jsx";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Summary */}
        <section className="w-full animate-fadeIn">
          <SummaryCard />
        </section>

        {/* Vitals */}
        <section className="w-full animate-fadeIn" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Your Health Metrics
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Real-time data from your connected devices
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full shrink-0">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-emerald-700">Live</span>
            </div>
          </div>

          <VitalsGrid />
        </section>

        {/* Reports + AI Advisory */}
        <section className="w-full animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="lg:col-span-3 w-full bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <ReportsSection />
            </div>

            <div className="lg:col-span-2 w-full bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-md border border-indigo-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <AIAdvisory />
            </div>
          </div>
        </section>

        {/* Doctor Connect */}
        <section className="w-full animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <DoctorConnect />
        </section>
      </main>

      {/* Add fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        /* Ensure body and html don't overflow */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}