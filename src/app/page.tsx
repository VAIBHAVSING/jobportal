'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import JobList from '@/components/jobs/JobList';
import { jobs } from '@/data/jobs';

export default function HomePage() {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  return (
    <div className="container mx-auto p-6">
      <div className="bg-blue-600 text-white rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Job Portal</h1>
        <p className="text-xl mb-6">Find your dream job today!</p>
        {!session && !isLoading && (
          <Link href="/login">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </Link>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.slice(0, 3).map((job) => (
            <div key={job.id} className="border rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-500 text-sm">{job.location}</p>
              <p className="my-2 line-clamp-3">{job.description}</p>
              <Link href="/jobs">
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}