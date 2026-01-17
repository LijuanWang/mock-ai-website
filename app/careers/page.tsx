"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { jobs, Job } from "@/data/jobs";

export default function CareersPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  // Get unique disciplines and locations
  const disciplines = useMemo(() => {
    const dics = Array.from(new Set(jobs.map((j) => j.discipline)));
    return ["all", ...dics];
  }, []);

  const locations = useMemo(() => {
    const locs = Array.from(new Set(jobs.map((j) => j.location)));
    return ["all", ...locs];
  }, []);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchDiscipline = selectedDiscipline === "all" || job.discipline === selectedDiscipline;
      const matchLocation = selectedLocation === "all" || job.location === selectedLocation;
      return matchDiscipline && matchLocation;
    });
  }, [selectedDiscipline, selectedLocation]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-900">
         <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
             alt="Office" 
             className="w-full h-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
         </div>

        <div className="relative z-10 max-w-content mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Join the team
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-300 leading-relaxed font-light">
              Help us build AI that&apos;s safe, beneficial, and accessible to everyone. 
              We&apos;re looking for curious minds and bold builders who want to shape 
              the future of technology responsibly.
            </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-content mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Discipline Filter */}
            <div className="flex items-center gap-2">
              <label htmlFor="discipline" className="text-sm text-gray-500 whitespace-nowrap">
                Discipline:
              </label>
              <select
                id="discipline"
                value={selectedDiscipline}
                onChange={(e) => setSelectedDiscipline(e.target.value)}
                className="flex-1 sm:flex-none px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                {disciplines.map((d) => (
                  <option key={d} value={d}>
                    {d === "all" ? "All Disciplines" : d}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="flex items-center gap-2">
              <label htmlFor="location" className="text-sm text-gray-500 whitespace-nowrap">
                Location:
              </label>
              <select
                id="location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="flex-1 sm:flex-none px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l === "all" ? "All Locations" : l}
                  </option>
                ))}
              </select>
            </div>

            {/* Results count */}
            <div className="sm:ml-auto flex items-center">
              <span className="text-sm text-gray-500">
                {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No positions found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedDiscipline("all");
                  setSelectedLocation("all");
                }}
                className="mt-4 text-sky-600 hover:text-sky-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why work at MAI Super Intelligence?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Meaningful Work"
              description="Work on some of the most important challenges in AI, with direct impact on how technology shapes society."
            />
            <BenefitCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Continuous Learning"
              description="Access to world-class researchers, training programs, and opportunities to grow your skills and expertise."
            />
            <BenefitCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              }
              title="Global Team"
              description="Collaborate with brilliant colleagues across 15 countries, bringing diverse perspectives to every challenge."
            />
            <BenefitCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
              title="Wellness Focus"
              description="Comprehensive health benefits, mental health support, and work-life balance initiatives that put your wellbeing first."
            />
            <BenefitCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Competitive Compensation"
              description="Industry-leading salaries, equity packages, and bonuses that reward your contributions and impact."
            />
            <BenefitCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
              title="Flexible Work"
              description="Hybrid and remote options that let you do your best work, wherever that may be."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/careers/${job.id}`}
      className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-sky-300 hover:shadow-md transition-all animate-fade-in-up"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
            {job.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {job.discipline}
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-600 line-clamp-2">
            {job.summary}
          </p>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full">
            {job.teamTag}
          </span>
          <svg className="w-5 h-5 ml-4 text-gray-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
