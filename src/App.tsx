import React, { useState } from 'react';
import { BriefcaseIcon, MessageCircle, UserCircle } from 'lucide-react';
import SwipeableJobStack from './components/SwipeableJobStack';
import Chat from './components/Chat';
import Onboarding from './components/Onboarding';
import type { Job, Message, Chat as ChatType } from './types';

// Mock data
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    salary: '$120k - $150k',
    type: 'Full-time',
    description: 'We are looking for a senior frontend developer with extensive React experience to join our growing team.',
    requirements: ['5+ years React', 'TypeScript', 'State Management'],
    posted: '2024-03-10T10:00:00Z',
    expires: '2024-03-25T23:59:59Z',
    votes: 42,
    category: ['Software Development', 'Frontend', 'React']
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'DesignCo',
    location: 'San Francisco, CA',
    salary: '$90k - $120k',
    type: 'Full-time',
    description: 'Join our design team to create beautiful and intuitive user experiences for our products.',
    requirements: ['3+ years UI/UX', 'Figma', 'User Research'],
    posted: '2024-03-11T10:00:00Z',
    expires: '2024-03-26T23:59:59Z',
    votes: 35,
    category: ['Design', 'UI/UX', 'Product']
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Remote',
    salary: '$130k - $160k',
    type: 'Full-time',
    description: 'Looking for a DevOps engineer to help us scale our cloud infrastructure and improve our CI/CD pipelines.',
    requirements: ['AWS', 'Kubernetes', 'Terraform'],
    posted: '2024-03-12T10:00:00Z',
    expires: '2024-03-27T23:59:59Z',
    votes: 28,
    category: ['DevOps', 'Cloud', 'Infrastructure']
  }
];

const mockChats: ChatType[] = [
  {
    id: '1',
    participants: ['user1', 'company1'],
    lastMessage: 'Thanks for your application! When are you available for an interview?',
    timestamp: '2024-03-10T14:30:00Z',
    unread: 1
  }
];

const mockMessages: Message[] = [
  {
    id: '1',
    senderId: 'company1',
    receiverId: 'user1',
    content: 'Thanks for your application! When are you available for an interview?',
    timestamp: '2024-03-10T14:30:00Z',
    jobId: '1'
  }
];

function App() {
  const [currentTab, setCurrentTab] = useState<'jobs' | 'chat' | 'profile'>('jobs');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [userPreferences, setUserPreferences] = useState<{
    categories: string[];
    schedules: string[];
    skills: string[];
  } | null>(null);

  const handleSwipe = (jobId: string, direction: 'left' | 'right') => {
    console.log(`Swiped ${direction} on job ${jobId}`);
    // Implement matching logic here
  };

  const handleSendMessage = (content: string) => {
    // Implement message sending logic
  };

  const handleOnboardingComplete = (data: {
    categories: string[];
    schedules: string[];
    skills: string[];
  }) => {
    setUserPreferences(data);
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">JobMatch</span>
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => setCurrentTab('jobs')}
                className={`flex items-center px-3 border-b-2 ${
                  currentTab === 'jobs'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <BriefcaseIcon className="mr-2" size={20} />
                Jobs
              </button>
              <button
                onClick={() => setCurrentTab('chat')}
                className={`flex items-center px-3 border-b-2 ${
                  currentTab === 'chat'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <MessageCircle className="mr-2" size={20} />
                Messages
              </button>
              <button
                onClick={() => setCurrentTab('profile')}
                className={`flex items-center px-3 border-b-2 ${
                  currentTab === 'profile'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <UserCircle className="mr-2" size={20} />
                Profile
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {currentTab === 'jobs' && (
          <div className="flex justify-center">
            <SwipeableJobStack jobs={mockJobs} onSwipe={handleSwipe} />
          </div>
        )}

        {currentTab === 'chat' && (
          <Chat
            chats={mockChats}
            messages={mockMessages}
            currentUserId="user1"
            onSendMessage={handleSendMessage}
          />
        )}

        {currentTab === 'profile' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            {userPreferences && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Interested Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {userPreferences.categories.map(category => (
                      <span key={category} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Schedule Preferences</h3>
                  <div className="flex flex-wrap gap-2">
                    {userPreferences.schedules.map(schedule => (
                      <span key={schedule} className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                        {schedule}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {userPreferences.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;