'use client';

import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function RegisterPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (session) {
    router.push('/dashboard');
    return null;
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <RegisterForm />
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}