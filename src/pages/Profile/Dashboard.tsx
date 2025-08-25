import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CameraIcon,
  DocumentTextIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon,
  ChartBarIcon,
  UserIcon,
  CalendarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PlusIcon,
  EyeIcon,
  DownloadIcon,
  CogIcon,
  BellIcon,
  SparklesIcon,
  TrophyIcon,
  FireIcon,
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserIcon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to ProfiAI
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Please log in to access your personalized dashboard and start
            creating professional content.
          </p>
          <Link to="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const usageStats = [
    {
      title: 'Headshots Generated',
      current: state.user.usage.headshots.generated,
      limit: state.user.usage.headshots.limit,
      icon: CameraIcon,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700',
      link: '/headshot',
      percentage: Math.round(
        (state.user.usage.headshots.generated /
          state.user.usage.headshots.limit) *
          100
      ),
    },
    {
      title: 'Resumes Exported',
      current: state.user.usage.resumes.exported,
      limit: state.user.usage.resumes.limit,
      icon: DocumentTextIcon,
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-700',
      link: '/resume',
      percentage: Math.round(
        (state.user.usage.resumes.exported / state.user.usage.resumes.limit) *
          100
      ),
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'headshot',
      title: 'Corporate Executive Headshot',
      subtitle: 'Generated successfully',
      timestamp: '2 hours ago',
      icon: CameraIcon,
      status: 'success',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      id: 2,
      type: 'resume',
      title: 'Modern Professional Resume',
      subtitle: 'Exported as PDF',
      timestamp: '1 day ago',
      icon: DocumentTextIcon,
      status: 'success',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      id: 3,
      type: 'account',
      title: 'Account Created',
      subtitle: 'Welcome to ProfiAI',
      timestamp: '3 days ago',
      icon: StarIcon,
      status: 'info',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  const quickActions = [
    {
      title: 'Generate Headshot',
      description: 'Create professional headshots in minutes',
      icon: CameraIcon,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      link: '/headshot',
      stats: `${
        state.user.usage.headshots.limit - state.user.usage.headshots.generated
      } remaining`,
    },
    {
      title: 'Build Resume',
      description: 'Create ATS-optimized resumes',
      icon: DocumentTextIcon,
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      link: '/resume',
      stats: `${
        state.user.usage.resumes.limit - state.user.usage.resumes.exported
      } remaining`,
    },
  ];

  const achievements = [
    {
      title: 'First Headshot',
      description: 'Generated your first professional headshot',
      icon: TrophyIcon,
      achieved: state.user.usage.headshots.generated > 0,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    },
    {
      title: 'Resume Master',
      description: 'Created your first resume',
      icon: DocumentTextIcon,
      achieved: state.user.usage.resumes.exported > 0,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      title: 'Power User',
      description: 'Used 80% of your monthly limit',
      icon: FireIcon,
      achieved:
        state.user.usage.headshots.generated /
          state.user.usage.headshots.limit >
          0.8 ||
        state.user.usage.resumes.exported / state.user.usage.resumes.limit >
          0.8,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <UserIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Welcome back, {state.user.name}! 👋
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Ready to create something amazing today?
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <CalendarIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                      Member since{' '}
                      {new Date(state.user.createdAt).toLocaleDateString(
                        'en-US',
                        { month: 'long', year: 'numeric' }
                      )}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <StarIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                      {state.user.plan} Plan
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-0 lg:ml-8">
                {state.user.plan === 'free' ? (
                  <div className="text-center">
                    <div className="mb-3">
                      <SparklesIcon className="h-12 w-12 text-yellow-500 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Unlock Premium Features
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
                      Get unlimited headshots, high-res downloads, and premium
                      templates
                    </p>
                    <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3">
                      Upgrade Now
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="mb-3">
                      <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Premium Member
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Enjoy all premium features
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="xl:col-span-3 space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to={action.link}>
                      <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600 cursor-pointer group">
                        <div
                          className={`w-20 h-20 bg-gradient-to-r ${action.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <action.icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {action.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {action.description}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {action.stats}
                          </span>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Usage Overview Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Usage Overview
                </h2>
                <div className="flex items-center space-x-2">
                  <CogIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    This month
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {usageStats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <Card
                      className={`p-6 border-2 ${stat.borderColor} ${stat.bgColor} hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                          >
                            <stat.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {stat.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Monthly limit
                            </p>
                          </div>
                        </div>
                        <Link to={stat.link}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-white dark:hover:bg-gray-700"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {stat.current}
                          </span>
                          <span className="text-lg text-gray-600 dark:text-gray-400">
                            / {stat.limit}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              Progress
                            </span>
                            <span className="text-gray-900 dark:text-white">
                              {stat.percentage}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${stat.percentage}%` }}
                              transition={{
                                duration: 1,
                                delay: 0.5 + index * 0.1,
                              }}
                              className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-300`}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {stat.limit - stat.current} remaining
                          </span>
                          <Link to={stat.link}>
                            <Button
                              size="sm"
                              className={`bg-gradient-to-r ${stat.gradient} hover:shadow-lg text-white`}
                            >
                              Use Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Recent Activity
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:text-blue-700"
                >
                  View All
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Button>
              </div>

              <Card className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <div
                        className={`w-12 h-12 ${activity.bgColor} rounded-xl flex items-center justify-center`}
                      >
                        <activity.icon
                          className={`h-6 w-6 ${activity.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {activity.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {activity.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {activity.timestamp}
                        </p>
                        {activity.status === 'success' && (
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mt-1" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <TrophyIcon className="h-6 w-6 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Achievements
                  </h3>
                </div>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.title}
                      className="flex items-center space-x-3"
                    >
                      <div
                        className={`w-10 h-10 ${achievement.bgColor} rounded-lg flex items-center justify-center`}
                      >
                        <achievement.icon
                          className={`h-5 w-5 ${achievement.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.achieved ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Pro Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center space-x-2 mb-4">
                  <SparklesIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Pro Tips
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Use natural lighting for the best headshot results
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Include industry-specific keywords in your resume
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Update your LinkedIn profile with your new headshot
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Account Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Account
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <CogIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Settings
                    </span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <BellIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Notifications
                    </span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Privacy
                    </span>
                  </button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
