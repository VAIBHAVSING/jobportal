import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - can be used to add authentication tokens
api.interceptors.request.use((config) => {
  // You can add auth headers here if needed
  return config;
});

// Response interceptor - can be used for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error codes
    const { response } = error;
    if (response && response.status === 401) {
      // Handle unauthorized errors
      console.error('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

export const fetchJobs = async () => {
  try {
    // For a real implementation, you would call the API
    // const response = await api.get('/api/jobs');
    // return response.data;
    
    // For the demo, we're using the static data
    return import('../data/jobs').then(module => module.jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};

export const fetchJobById = async (id: string) => {
  try {
    // For a real implementation
    // const response = await api.get(`/api/jobs/${id}`);
    // return response.data;
    
    // For the demo
    return import('../data/jobs').then(module => {
      const job = module.jobs.find(job => job.id === id);
      return job || null;
    });
  } catch (error) {
    console.error(`Error fetching job with ID ${id}:`, error);
    return null;
  }
};

export default api;