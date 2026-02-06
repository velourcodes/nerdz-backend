import { useState } from 'react';
import { Header } from './Header';

// Hardcoded doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    category: "general",
    experience: "12 years",
    rating: 4.8,
    image: "👩‍⚕️",
    availability: "Available Today",
    consultationFee: "$50",
    qualifications: "MBBS, MD Internal Medicine",
    hospital: "City General Hospital"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "General Physician",
    category: "general",
    experience: "8 years",
    rating: 4.7,
    image: "👨‍⚕️",
    availability: "Available Tomorrow",
    consultationFee: "$45",
    qualifications: "MBBS, MD Family Medicine",
    hospital: "Wellness Medical Center"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Cardiologist",
    category: "heart",
    experience: "15 years",
    rating: 4.9,
    image: "👩‍⚕️",
    availability: "Available Today",
    consultationFee: "$120",
    qualifications: "MBBS, MD Cardiology, FACC",
    hospital: "Heart Care Institute"
  },
  {
    id: 4,
    name: "Dr. David Kumar",
    specialty: "Cardiologist",
    category: "heart",
    experience: "18 years",
    rating: 4.9,
    image: "👨‍⚕️",
    availability: "Available in 2 days",
    consultationFee: "$150",
    qualifications: "MBBS, DM Cardiology",
    hospital: "National Heart Center"
  },
  {
    id: 5,
    name: "Dr. Lisa Wang",
    specialty: "Dermatologist",
    category: "skin",
    experience: "10 years",
    rating: 4.6,
    image: "👩‍⚕️",
    availability: "Available Today",
    consultationFee: "$80",
    qualifications: "MBBS, MD Dermatology",
    hospital: "Skin & Aesthetic Clinic"
  },
  {
    id: 6,
    name: "Dr. James Anderson",
    specialty: "Orthopedic Surgeon",
    category: "orthopedic",
    experience: "20 years",
    rating: 4.8,
    image: "👨‍⚕️",
    availability: "Available Tomorrow",
    consultationFee: "$100",
    qualifications: "MBBS, MS Orthopedics",
    hospital: "Bone & Joint Hospital"
  },
  {
    id: 7,
    name: "Dr. Priya Sharma",
    specialty: "Pediatrician",
    category: "pediatric",
    experience: "14 years",
    rating: 4.9,
    image: "👩‍⚕️",
    availability: "Available Today",
    consultationFee: "$60",
    qualifications: "MBBS, MD Pediatrics",
    hospital: "Children's Health Center"
  },
  {
    id: 8,
    name: "Dr. Robert Taylor",
    specialty: "Neurologist",
    category: "neuro",
    experience: "16 years",
    rating: 4.7,
    image: "👨‍⚕️",
    availability: "Available in 3 days",
    consultationFee: "$130",
    qualifications: "MBBS, DM Neurology",
    hospital: "Brain & Spine Institute"
  },
  {
    id: 9,
    name: "Dr. Amanda Foster",
    specialty: "General Physician",
    category: "general",
    experience: "6 years",
    rating: 4.5,
    image: "👩‍⚕️",
    availability: "Available Today",
    consultationFee: "$40",
    qualifications: "MBBS, MD General Medicine",
    hospital: "Community Health Clinic"
  },
  {
    id: 10,
    name: "Dr. Mohammed Ali",
    specialty: "Gastroenterologist",
    category: "gastro",
    experience: "12 years",
    rating: 4.8,
    image: "👨‍⚕️",
    availability: "Available Tomorrow",
    consultationFee: "$90",
    qualifications: "MBBS, DM Gastroenterology",
    hospital: "Digestive Care Center"
  }
];

const categories = [
  { id: 'all', name: 'All Doctors', icon: '🏥', color: 'blue' },
  { id: 'general', name: 'General Physician', icon: '👨‍⚕️', color: 'green' },
  { id: 'heart', name: 'Cardiologist', icon: '❤️', color: 'red' },
  { id: 'skin', name: 'Dermatologist', icon: '✨', color: 'purple' },
  { id: 'orthopedic', name: 'Orthopedic', icon: '🦴', color: 'orange' },
  { id: 'pediatric', name: 'Pediatrician', icon: '👶', color: 'pink' },
  { id: 'neuro', name: 'Neurologist', icon: '🧠', color: 'indigo' },
  { id: 'gastro', name: 'Gastroenterologist', icon: '🫁', color: 'teal' }
];

export default function DoctorFind() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter doctors based on search and category
  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || doctor.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header/>
      <header className="w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Find a Doctor</h1>
                <p className="text-sm text-slate-500">Connect with the best healthcare professionals</p>
              </div>
            </div>

            <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              My Appointments
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <input
              type="text"
              placeholder="Search by doctor name, specialty, or hospital..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 pl-12 text-base border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Specialties</h2>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-600">
            Found <span className="font-semibold text-slate-800">{filteredDoctors.length}</span> doctor{filteredDoctors.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && (
              <span> in <span className="font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
            )}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Sort by:</span>
            <select className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Availability</option>
              <option>Rating</option>
              <option>Experience</option>
              <option>Fee (Low to High)</option>
            </select>
          </div>
        </div>

        {/* Doctor Cards */}
        {filteredDoctors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    {/* Doctor Image */}
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                      {doctor.image}
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">{doctor.specialty}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-2">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-semibold text-slate-700">{doctor.rating}</span>
                        <span className="text-xs text-slate-500 ml-1">({Math.floor(Math.random() * 200 + 50)} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Experience & Hospital */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span className="font-medium">{doctor.experience} experience</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>{doctor.hospital}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-xs">{doctor.qualifications}</span>
                    </div>
                  </div>

                  {/* Availability & Fee */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-green-700">{doctor.availability}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Consultation Fee</p>
                      <p className="text-lg font-bold text-blue-600">{doctor.consultationFee}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 px-4 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                      View Profile
                    </button>
                    <button className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No Results
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No doctors found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search or category filter</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}