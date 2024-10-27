import React, { useState, useRef } from 'react';
import { ArrowBigLeft, ArrowBigRight, Building2, MapPin, DollarSign, Clock } from 'lucide-react';
import type { Job } from '../types';

interface SwipeableJobCardProps {
  job: Job;
  onSwipe: (direction: 'left' | 'right') => void;
  style?: React.CSSProperties;
}

export default function SwipeableJobCard({ job, onSwipe, style }: SwipeableJobCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const point = 'touches' in e ? e.touches[0] : e;
    setDragStart({ x: point.clientX - offset.x, y: point.clientY - offset.y });
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const point = 'touches' in e ? e.touches[0] : e;
    const newOffset = {
      x: point.clientX - dragStart.x,
      y: point.clientY - dragStart.y,
    };
    setOffset(newOffset);
    setRotation(newOffset.x * 0.1);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    const threshold = (cardRef.current?.offsetWidth || 0) * 0.4;
    if (Math.abs(offset.x) > threshold) {
      onSwipe(offset.x > 0 ? 'right' : 'left');
    } else {
      setOffset({ x: 0, y: 0 });
      setRotation(0);
    }
    setIsDragging(false);
  };

  const timeLeft = new Date(job.expires).getTime() - new Date().getTime();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  const cardStyle: React.CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg)`,
    transition: !isDragging ? 'transform 0.3s ease' : undefined,
    ...style,
  };

  return (
    <div
      ref={cardRef}
      className="absolute w-full max-w-lg bg-white rounded-xl shadow-xl cursor-grab active:cursor-grabbing"
      style={cardStyle}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
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
          <span className={`px-3 py-1 rounded-full text-sm ${
            daysLeft <= 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
          }`}>
            <Clock size={14} className="inline mr-1" />
            {daysLeft} days left
          </span>
        </div>

        <p className="text-gray-700">{job.description}</p>

        <div className="flex flex-wrap gap-2">
          {job.requirements.map((req, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
            >
              {req}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {job.category.map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-center bg-gradient-to-t from-white via-white">
          <button
            onClick={() => onSwipe('left')}
            className="p-4 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
          >
            <ArrowBigLeft size={24} />
          </button>
          <button
            onClick={() => onSwipe('right')}
            className="p-4 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
          >
            <ArrowBigRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}