import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const features = [
    {
      title: 'Task Manager',
      description: 'Organize your tasks with a powerful task manager featuring add, complete, delete, and filter functionality.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
      path: '/tasks',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Posts Explorer',
      description: 'Explore posts from JSONPlaceholder API with search functionality, pagination, and responsive design.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      path: '/posts',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for a personalized user experience.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ),
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Welcome to React.js & Tailwind CSS
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A modern React application demonstrating component architecture, state management, 
          hooks usage, and API integration with beautiful Tailwind CSS styling.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">
            <Link to="/tasks">Get Started with Tasks</Link>
          </Button>
          <Button variant="secondary" size="lg">
            <Link to="/posts">Explore Posts</Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={`${feature.color} mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {feature.description}
            </p>
            {feature.path && (
              <Button as={Link} to={feature.path} variant="primary" size="sm">
                Explore
              </Button>
            )}
          </Card>
        ))}
      </div>

      {/* Technology Stack */}
      <Card className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Built with Modern Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="text-3xl">⚛️</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">React 18</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Component-based UI</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🎨</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Utility-first styling</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">⚡</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Vite</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fast build tool</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🔗</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">React Router</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Client-side routing</p>
          </div>
        </div>
      </Card>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            🎯 Key Features
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Responsive design for all devices
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Dark/Light theme toggle
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Local storage persistence
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              API integration with error handling
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Search and pagination
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Custom React hooks
            </li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            🚀 Getting Started
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              This application demonstrates modern React development practices including:
            </p>
            <ul className="space-y-2">
              <li>• Component architecture and reusability</li>
              <li>• State management with React hooks</li>
              <li>• Context API for theme management</li>
              <li>• Custom hooks for localStorage</li>
              <li>• API integration with loading states</li>
              <li>• Responsive design with Tailwind CSS</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home; 