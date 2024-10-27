import React, { useState } from 'react';
import SwipeableJobCard from './SwipeableJobCard';
import type { Job } from '../types';

interface SwipeableJobStackProps {
  jobs: Job[];
  onSwipe: (jobId: string, direction: 'left' | 'right') => void;
}

export default function SwipeableJobStack({ jobs, onSwipe }: SwipeableJobStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentIndex < jobs.length) {
      onSwipe(jobs[currentIndex].id, direction);
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="relative h-[600px] w-full max-w-lg mx-auto">
      {jobs.slice(currentIndex, currentIndex + 3).map((job, index) => (
        <SwipeableJobCard
          key={job.id}
          job={job}
          onSwipe={handleSwipe}
          style={{
            zIndex: jobs.length - index,
            scale: `${1 - index * 0.05}`,
            top: `${index * 10}px`,
          }}
        />
      ))}
      {currentIndex >= jobs.length && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No more jobs</h3>
            <p className="text-gray-600">Check back later for new opportunities</p>
          </div>
        </div>
      )}
    </div>
  );
}