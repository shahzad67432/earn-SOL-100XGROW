import React from 'react';
import { Skeleton } from '../ui/Skeleton';

const LearnPageLoading = () => {
  return (
    <div className="container mx-auto p-4">
      Please wait, Loading may take a while to load
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            <Skeleton className="w-full h-48" /> {/* Background image skeleton */}
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-between">
              <div>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <Skeleton className="h-10 w-24 self-end" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPageLoading;