import React from 'react';
import { Job } from '@/types';
import JobCard from './JobCard';

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="py-6 text-center">
        <p className="text-gray-500">No jobs found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;