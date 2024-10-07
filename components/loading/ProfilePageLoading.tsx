import React from 'react';
import { Skeleton } from '../ui/Skeleton';

const ProfilePageLoading = () => {
  return (
    <div className="min-h-screen px-12 bg-green-50 animate-pulse">
      Please wait, Loading may take a while to load
      <div className="container mx-auto py-8 px-6">
        {/* User Info Card */}
        <div className="flex justify-between mb-6">
          <div className="flex gap-4">
            <div className="flex flex-col space-y-1">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-8 w-48" />
            </div>
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>
          <div className="">
            <div className="flex items-center space-x-6">
              <Skeleton className="w-24 h-24 rounded-full" />
              <Skeleton className="h-6 w-48" />
            </div>
          </div>
        </div>

        {/* Earnings and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6 md:col-span-1">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Skeleton className="h-6 w-32 mb-4" />
                <Skeleton className="h-8 w-24" />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:col-span-2 h-[424px]">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="space-y-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Premium Tests */}
        <div className="mt-10">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <Skeleton key={index} className="h-40 rounded-lg" />
            ))}
          </div>
        </div>

        {/* User Blogs */}
        <div className="mt-10">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <Skeleton className="h-40 w-full rounded-lg mb-4" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageLoading;