import React from 'react';
import { Job } from '@/types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <h3 className="text-md text-gray-700">{job.company}</h3>
      <p className="text-sm text-gray-500">{job.location}</p>
      <p className="mt-2 text-gray-800">{job.description}</p>
      <p className="mt-1 text-blue-600 font-semibold">{job.salary}</p>
      <p className="text-xs text-gray-500 mt-2">Posted: {job.postedDate}</p>
      <button className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;