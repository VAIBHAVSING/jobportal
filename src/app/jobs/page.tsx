'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import JobList from '@/components/jobs/JobList';
import { jobs } from '@/data/jobs';

export default function JobsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  if (status === 'loading') {
    return <div className="container mx-auto p-6">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
          <p>Please log in to view job listings.</p>
          <button 
            onClick={() => router.push('/login')}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full md:w-1/3 p-2 border rounded"
        />
      </div>
      <JobList jobs={jobs} />
    </div>
  );
}