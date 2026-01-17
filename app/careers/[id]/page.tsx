"use client";

import { useState, use } from "react";
import Link from "next/link";
import { jobs } from "@/data/jobs";

interface JobDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const resolvedParams = use(params);
  const job = jobs.find((j) => j.id === resolvedParams.id);
  const [showApplyModal, setShowApplyModal] = useState(false);

  if (!job) {
    return (
      <div className="max-w-content mx-auto px-6 lg:px-8 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Position not found</h1>
        <p className="mt-4 text-gray-600">
          The position you&apos;re looking for doesn&apos;t exist or has been filled.
        </p>
        <Link
          href="/careers"
          className="inline-flex items-center mt-6 text-sky-600 hover:text-sky-700 font-medium"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          View all positions
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 lg:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Back Link */}
            <Link
              href="/careers"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All positions
            </Link>

            {/* Title & Meta */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {job.title}
            </h1>
            
            <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-600">
              <span className="flex items-center gap-1.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {job.discipline}
              </span>
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-700 rounded-full">
                {job.teamTag}
              </span>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => setShowApplyModal(true)}
              className="mt-8 inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Apply for this position
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  {job.overview}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualifications</h2>
                <ul className="space-y-3">
                  {job.qualifications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Apply Card */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Ready to apply?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Join our team and help shape the future of AI.
                  </p>
                  <button
                    onClick={() => setShowApplyModal(true)}
                    className="w-full px-4 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Apply now
                  </button>
                </div>

                {/* Share */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Share this role</h3>
                  <div className="flex gap-2">
                    <button 
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button 
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                      aria-label="Share on X"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button 
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                      aria-label="Copy link"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Other Positions */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">More positions</h3>
                  <div className="space-y-2">
                    {jobs
                      .filter((j) => j.id !== job.id && j.discipline === job.discipline)
                      .slice(0, 3)
                      .map((j) => (
                        <Link
                          key={j.id}
                          href={`/careers/${j.id}`}
                          className="block text-sm text-gray-600 hover:text-sky-600 transition-colors"
                        >
                          {j.title}
                        </Link>
                      ))}
                  </div>
                  <Link
                    href="/careers"
                    className="inline-flex items-center mt-4 text-sm text-sky-600 hover:text-sky-700 font-medium"
                  >
                    View all positions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setShowApplyModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Apply for {job.title}
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to start your application? Click below to send us your information.
              </p>
              <a
                href={`mailto:careers@mock-ai.com?subject=Application: ${job.title}&body=I am interested in applying for the ${job.title} position at ${job.location}.`}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send application email
              </a>
              <p className="mt-4 text-xs text-gray-500">
                This will open your email client with a pre-filled message.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
