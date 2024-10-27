import React from 'react';
import { ArrowBigDown, ArrowBigUp, Clock, MapPin, Building2, DollarSign, MessageSquare } from 'lucide-react';
import type { Job } from '../types';

interface JobCardProps {
  job: Job;
  onVote: (id: string, direction: 'up' | 'down') => void;
  onApply: (id: string) => void;
}

export default function JobCard({ job, onVote, onApply }: JobCardProps) {
  const timeLeft = new Date(job.expires).getTime() - new Date().getTime();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex">
        {/* Vote Column */}
        <div className="flex flex-col items-center mr-4 space-y-2">
          <button
            onClick={() => onVote(job.id, 'up')}
            className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ArrowBigUp size={24} />
          </button>
          <span className="font-bold text-lg">{job.votes}</span>
          <button
            onClick={() => onVote(job.id, 'down')}
            className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <ArrowBigDown size={24} />
          </button>
        </div>

        {/* Content Column */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                <span className="flex items-center">
                  <Building2 size={16} className="mr-1" />
                  {job.company}
                </span>
                <span className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {job.location}
                </span>
                <span className="flex items-center">
                  <DollarSign size={16} className="mr-1" />
                  {job.salary}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-sm ${
                daysLeft <= 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
              }`}>
                <Clock size={14} className="inline mr-1" />
                {daysLeft} days left
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 line-clamp-2">{job.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.category.map((cat) => (
              <span
                key={cat}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => onApply(job.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Quick Apply
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                <MessageSquare size={18} className="mr-2" />
                Chat
              </button>
            </div>
            <span className="text-sm text-gray-500">
              Posted {new Date(job.posted).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}