import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  'Software Development', 'Design', 'Marketing', 'Sales', 'Customer Service',
  'Writing', 'Data Science', 'Product Management', 'Human Resources', 'Finance',
  'Legal', 'Healthcare', 'Education', 'Engineering', 'Consulting'
];

const schedules = [
  'Full-time', 'Part-time', 'Contract', 'Freelance',
  'Morning Shifts', 'Evening Shifts', 'Weekend Only', 'Flexible Hours'
];

interface OnboardingProps {
  onComplete: (data: {
    categories: string[];
    schedules: string[];
    skills: string[];
  }) => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSchedules, setSelectedSchedules] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState('');

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 6);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSchedule = (schedule: string) => {
    setSelectedSchedules(prev =>
      prev.includes(schedule)
        ? prev.filter(s => s !== schedule)
        : [...prev, schedule]
    );
  };

  const addSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentSkill.trim()) {
      setSkills(prev => [...prev, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const handleComplete = () => {
    onComplete({
      categories: selectedCategories,
      schedules: selectedSchedules,
      skills: skills,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's personalize your experience</h2>
        <p className="text-gray-600">Select your preferences to help us find the best opportunities for you.</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">What type of work interests you?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {visibleCategories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`p-3 rounded-lg text-left transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-300'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="mt-3 text-blue-600 hover:text-blue-800 flex items-center"
          >
            {showAllCategories ? (
              <>Show Less <ChevronUp className="ml-1" size={16} /></>
            ) : (
              <>Show More <ChevronDown className="ml-1" size={16} /></>
            )}
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">What's your preferred schedule?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {schedules.map(schedule => (
              <button
                key={schedule}
                onClick={() => toggleSchedule(schedule)}
                className={`p-3 rounded-lg text-left transition-colors ${
                  selectedSchedules.includes(schedule)
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-300'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                {schedule}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">What are your key skills?</h3>
          <div className="space-y-3">
            <input
              type="text"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              onKeyPress={addSkill}
              placeholder="Type a skill and press Enter"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full flex items-center"
                >
                  {skill}
                  <button
                    onClick={() => setSkills(prev => prev.filter((_, i) => i !== index))}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={handleComplete}
          disabled={selectedCategories.length === 0 || selectedSchedules.length === 0}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Complete Profile
        </button>
      </div>
    </div>
  );
}