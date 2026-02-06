import { Link } from "react-router-dom";
import TakeReport from "./TakeReport";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Brand - More vibrant */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-xl border border-white/30">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Link to="/dashboard">
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  HealthVitals
                </span>
                <p className="text-xs text-blue-100 hidden sm:block">
                  Your wellness companion
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation - Glass morphism style */}
          <nav className="hidden md:flex items-center gap-2 flex-1 justify-center max-w-md">
            <Link to="/dashboard">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-blue-600 backdrop-blur-sm hover:bg-blue-600 transition-all border border-white/20 shadow-lg whitespace-nowrap">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </button>
            </Link>

            <Link to="/dashboard/reports">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Reports
              </button>
            </Link>

            <Link to="/dashboard/DoctorFind">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Doctors
              </button>
            </Link>
          </nav>

          {/* Actions - Eye-catching CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all border border-white/20 whitespace-nowrap">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Devices
            </button>

            <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-white text-white-600 hover:bg-blue-50 hover:scale-105 transition-all shadow-xl whitespace-nowrap">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="hidden sm:inline">Connect Device</span>
              <span className="sm:hidden">Connect</span>
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-50"></div>
    </header>
  );
}
