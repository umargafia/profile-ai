import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CameraIcon,
  DocumentTextIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import { useApp } from '../../contexts/AppContext';
import { useTranslation } from '../../hooks/useTranslation';

export default function Dashboard() {
  const { state } = useApp();
  const { t } = useTranslation();

  if (!state.user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Please log in to access your dashboard
          </h2>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  const usageStats = [
    {
      title: 'Headshots Generated',
      current: state.user.usage.headshots.generated,
      limit: state.user.usage.headshots.limit,
      icon: CameraIcon,
      color: 'teal',
      link: '/headshot',
    },
    {
      title: 'Resumes Exported',
      current: state.user.usage.resumes.exported,
      limit: state.user.usage.resumes.limit,
      icon: DocumentTextIcon,
      color: 'blue',
      link: '/resume',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'headshot',
      title: 'Generated Corporate Executive headshot',
      timestamp: '2 hours ago',
      icon: CameraIcon,
    },
    {
      id: 2,
      type: 'account',
      title: 'Account created',
      timestamp: '1 day ago',
      icon: StarIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {state.user.name}!
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Manage your professional assets and track your usage
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Current Plan</p>
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                    {state.user.plan}
                  </span>
                  {state.user.plan === 'free' && (
                    <Button size="sm" className="ml-2">
                      Upgrade
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Usage Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Usage Statistics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {usageStats.map((stat, index) => (
                  <Card key={stat.title} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-${stat.color}-100 dark:bg-${stat.color}-900/20 rounded-lg flex items-center justify-center`}>
                          <stat.icon className={`h-5 w-5 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {stat.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            This month
                          </p>
                        </div>
                      </div>
                      <Link to={stat.link}>
                        <Button variant="ghost" size="sm">
                          <ArrowRightIcon className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Used</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {stat.current} / {stat.limit}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`bg-${stat.color}-600 h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${(stat.current / stat.limit) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.limit - stat.current} remaining
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h2>
              <Card className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <activity.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {activity.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/headshot">
                  <Card hover className="p-6 text-center">
                    <CameraIcon className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      Generate New Headshot
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Create a professional headshot in minutes
                    </p>
                  </Card>
                </Link>
                
                <Link to="/resume">
                  <Card hover className="p-6 text-center">
                    <DocumentTextIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      Build New Resume
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Create an ATS-optimized resume
                    </p>
                  </Card>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Account Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">{state.user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {new Date(state.user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Plan</p>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-gray-900 dark:text-white capitalize">
                        {state.user.plan}
                      </p>
                      {state.user.plan === 'free' && (
                        <Button size="sm">Upgrade</Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Premium Upsell */}
            {state.user.plan === 'free' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 border border-teal-200 dark:border-teal-800">
                  <div className="text-center">
                    <StarIcon className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Upgrade to Premium
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Unlock unlimited headshots, high-resolution downloads, and premium templates
                    </p>
                    <Button className="w-full">
                      Upgrade Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Pro Tips
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Use good lighting for better headshot results
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Include relevant keywords in your resume
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Update your LinkedIn profile with your new headshot
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}