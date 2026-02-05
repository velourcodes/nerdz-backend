import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-800">
                HealthVitals
              </span>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <Link to="/login">
                <button className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap">
                  Log In
                </button>
              </Link>

              <Link to="/signup">
                <button className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="w-full text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Your Health, Simplified
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Track Your Health
                <span className="block text-blue-600 mt-2">
                  All in One Place
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Monitor your vitals, store medical reports, and connect with
              doctors seamlessly. Take control of your wellness journey today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/signup">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                  Get Started Free
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 rounded-xl transition-all whitespace-nowrap">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium whitespace-nowrap">
                  Free Forever
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium whitespace-nowrap">
                  HIPAA Compliant
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span className="font-medium whitespace-nowrap">
                  10,000+ Users
                </span>
              </div>
            </div>
          </div>

          {/* Right: Visual/Preview */}
          <div className="w-full relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div
              className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl animate-pulse pointer-events-none"
              style={{ animationDelay: "1s" }}
            />

            {/* Dashboard Preview Card */}
            <div className="relative z-10 w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Mini Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">
                    Dashboard Preview
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Preview Content */}
              <div className="p-6 space-y-4">
                {/* Health Summary */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-slate-800">
                      Health Status
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    All vitals within normal range
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-semibold">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Healthy
                  </div>
                </div>

                {/* Vitals Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Heart Rate */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                    <div className="text-xs text-slate-600 mb-1">
                      Heart Rate
                    </div>
                    <div className="text-2xl font-bold text-slate-800">
                      72 <span className="text-sm text-slate-500">bpm</span>
                    </div>
                    <div className="text-xs text-emerald-600 mt-1">
                      ↗ Normal
                    </div>
                  </div>

                  {/* Blood Oxygen */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                    <div className="text-xs text-slate-600 mb-1">Blood O₂</div>
                    <div className="text-2xl font-bold text-slate-800">
                      98 <span className="text-sm text-slate-500">%</span>
                    </div>
                    <div className="text-xs text-emerald-600 mt-1">
                      → Healthy
                    </div>
                  </div>

                  {/* Sleep */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                    <div className="text-xs text-slate-600 mb-1">Sleep</div>
                    <div className="text-2xl font-bold text-slate-800">
                      7h <span className="text-sm text-slate-500">30m</span>
                    </div>
                    <div className="text-xs text-blue-600 mt-1">→ Good</div>
                  </div>

                  {/* Steps */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                    <div className="text-xs text-slate-600 mb-1">Steps</div>
                    <div className="text-2xl font-bold text-slate-800">
                      8.2<span className="text-sm text-slate-500">k</span>
                    </div>
                    <div className="text-xs text-emerald-600 mt-1">
                      ↗ Active
                    </div>
                  </div>
                </div>

                {/* Quick Action */}
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all">
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
                  Connect with Doctor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for Better Health
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to help you stay on top of your wellness
          </p>
        </div>

        <div className="w-full grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="w-full group text-center p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
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
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Track Vitals
            </h3>
            <p className="text-slate-600">
              Monitor heart rate, blood oxygen, sleep, steps, and more in
              real-time from connected devices
            </p>
          </div>

          {/* Feature 2 */}
          <div className="w-full group text-center p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Store Reports
            </h3>
            <p className="text-slate-600">
              Keep all your medical reports, test results, and documents
              organized in one secure place
            </p>
          </div>

          {/* Feature 3 */}
          <div className="w-full group text-center p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
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
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Connect Doctors
            </h3>
            <p className="text-slate-600">
              Share your health data securely with doctors and get expert
              medical advice instantly
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their wellness with
            HealthVitals
          </p>
          <Link to="/signup">
            <button className="px-8 py-4 text-lg font-bold text-blue-600 bg-white hover:bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
              Get Started for Free →
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm text-slate-600">
                © 2026 HealthVitals. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-600">
              <button className="hover:text-blue-600 transition-colors">
                Privacy
              </button>
              <button className="hover:text-blue-600 transition-colors">
                Terms
              </button>
              <button className="hover:text-blue-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Body Styles */}
      <style>{`
        body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
        
        html {
          overflow-x: hidden;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
