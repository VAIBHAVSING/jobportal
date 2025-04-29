'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import JobList from '@/components/jobs/JobList';
import { jobs } from '@/data/jobs';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="container mx-auto p-6 flex justify-center items-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null; // This will be handled by the useEffect above
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">Welcome, {session.user?.name || 'User'}!</h1>
        <p className="text-gray-600">Email: {session.user?.email}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Recommended Jobs</h2>
            <JobList jobs={jobs.slice(0, 2)} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Your Profile</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-gray-900">{session.user?.name || 'Not provided'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">{session.user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Account Status</label>
                <p className="mt-1 text-green-600">Active</p>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Edit Profile
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Job Alerts</h2>
            <p className="text-gray-600 mb-4">Get notified when new jobs match your preferences.</p>
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
              Set Up Job Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}