import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CameraIcon,
  DocumentTextIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  GlobeAltIcon,
  CheckIcon,
  StarIcon,
  ArrowRightIcon,
  UsersIcon,
  TrophyIcon,
  BoltIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { useTranslation } from '../hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: CameraIcon,
      title: 'AI Headshot Generator',
      description:
        'Transform your selfie into a professional headshot with 10+ styles',
      image:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      stats: '10+ Styles',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: DocumentTextIcon,
      title: 'Resume Builder',
      description:
        'Create ATS-optimized resumes with AI-powered keyword suggestions',
      image:
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      stats: '5 Templates',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const benefits = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered',
      description: 'Advanced AI technology for professional results',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Privacy First',
      description: 'Your data is automatically deleted after 24 hours',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: ClockIcon,
      title: 'Quick Results',
      description: 'Get professional headshots and resumes in minutes',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Support',
      description: 'Available in multiple languages worldwide',
      gradient: 'from-purple-400 to-violet-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Manager',
      company: 'TechCorp',
      content:
        'ProfiAI transformed my LinkedIn profile. The headshot looks incredibly professional and I received 3x more connection requests.',
      avatar:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Software Engineer',
      company: 'InnovateLab',
      content:
        'The resume builder helped me land my dream job. The AI suggestions were spot-on and the template was perfect for tech roles.',
      avatar:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'UX Designer',
      company: 'Creative Studio',
      content:
        'I love how easy it was to create multiple headshot styles. Perfect for different professional contexts and social media.',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Upload Your Photo',
      description: 'Simply upload a clear selfie or professional photo',
      icon: CameraIcon,
      color: 'bg-blue-500',
    },
    {
      step: '02',
      title: 'Choose Your Style',
      description: 'Select from 10+ professional headshot styles',
      icon: SparklesIcon,
      color: 'bg-purple-500',
    },
    {
      step: '03',
      title: 'Customize & Generate',
      description: 'Adjust lighting, background, and let AI work its magic',
      icon: BoltIcon,
      color: 'bg-teal-500',
    },
    {
      step: '04',
      title: 'Download & Use',
      description: 'Get your professional headshot ready for any platform',
      icon: CheckIcon,
      color: 'bg-green-500',
    },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '1 headshot per month',
        '1 resume per month',
        'Basic templates',
        'Standard quality',
        '24-hour retention',
      ],
      popular: false,
      cta: 'Get Started',
      href: '/signup',
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      features: [
        'Unlimited headshots',
        'Unlimited resumes',
        'Premium templates',
        'High resolution',
        '7-day retention',
        'Priority support',
      ],
      popular: true,
      cta: 'Start Free Trial',
      href: '/signup',
    },
  ];

  const statistics = [
    { number: '50K+', label: 'Professionals Served', icon: UsersIcon },
    { number: '95%', label: 'Success Rate', icon: TrophyIcon },
    { number: '<5min', label: 'Average Time', icon: ClockIcon },
    { number: '24/7', label: 'AI Processing', icon: BoltIcon },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Elevate Your Career with{' '}
                <span className="text-blue-600">AI-Powered</span> Headshots &
                Resumes
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
              >
                Transform your professional image in minutes. Generate stunning
                LinkedIn headshots and create ATS-optimized resumes that get you
                noticed by employers worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/headshot">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl"
                  >
                    <CameraIcon className="h-5 w-5 mr-2" />
                    Generate Headshot
                  </Button>
                </Link>
                <Link to="/resume">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl"
                  >
                    <DocumentTextIcon className="h-5 w-5 mr-2" />
                    Build Resume
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  <span>Free to Start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheckIcon className="h-4 w-4 text-blue-500" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-4 w-4 text-orange-500" />
                  <span>Ready in Minutes</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Professional headshot example"
                  className="rounded-2xl shadow-2xl w-full max-w-lg"
                />

                {/* ATS Resume Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <DocumentTextIcon className="h-5 w-5 text-green-600" />
                    <div className="text-xs">
                      <div className="font-semibold text-gray-900">
                        ATS Resume
                      </div>
                      <div className="text-green-600">Ready to download</div>
                    </div>
                  </div>
                </div>

                {/* AI Headshot Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CameraIcon className="h-5 w-5 text-blue-600" />
                    <div className="text-xs">
                      <div className="font-semibold text-gray-900">
                        AI Headshot
                      </div>
                      <div className="text-blue-600">Generated in 10s</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Everything You Need to Stand Out Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Stand Out
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional tools designed to help you make the best first
              impression in your career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* AI Headshot Generator Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <CameraIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      AI Headshot Generator
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Transform any selfie into a professional headshot with our
                      AI technology. Choose from 10+ styles perfect for
                      LinkedIn, resumes, and professional profiles.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      10+ Professional Styles
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Background & Lighting Control
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Real-time Preview
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Instant Download
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Try Headshot Generator
                </Button>
              </Card>
            </motion.div>

            {/* Headshot Style Examples Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="p-4 text-center">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Corporate style"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Corporate
                </span>
              </Card>
              <Card className="p-4 text-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Creative style"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Creative
                </span>
              </Card>
              <Card className="p-4 text-center">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Neutral style"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Neutral
                </span>
              </Card>
              <Card className="p-4 text-center">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Professional style"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Professional
                </span>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Builder Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Resume Templates Grid */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              <Card className="p-4 text-center">
                <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded-lg mb-3 flex items-center justify-center">
                  <DocumentTextIcon className="h-12 w-12 text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Modern
                </span>
              </Card>
              <Card className="p-4 text-center">
                <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded-lg mb-3 flex items-center justify-center">
                  <DocumentTextIcon className="h-12 w-12 text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Minimalist
                </span>
              </Card>
              <Card className="p-4 text-center">
                <div className="w-full h-32 bg-gray-32 bg-gray-100 dark:bg-gray-800 rounded-lg mb-3 flex items-center justify-center">
                  <DocumentTextIcon className="h-12 w-12 text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Creative
                </span>
              </Card>
            </motion.div>

            {/* Resume Builder Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <DocumentTextIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Resume Builder
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Create ATS-friendly resumes that pass through applicant
                      tracking systems. Our AI suggests keywords based on your
                      target role and industry.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      5 ATS-Optimized Templates
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      AI Keyword Suggestions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Live Preview & Export
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-300">PDF Download</span>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Try Resume Builder
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get professional results in just a few simple steps. No design
              experience required.
            </p>
          </motion.div>

          {/* Headshot Generation Process */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <CameraIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Headshot Generation Process
                </h3>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="h-8 w-8 text-white transform rotate-90" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  1. Upload Your Photo
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Drag and drop any selfie or portrait photo. Our AI works best
                  with front-facing photos in good lighting.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  2. Choose Style & Customize
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Select from 10+ professional styles and adjust background,
                  lighting, and other details with real-time preview.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="h-8 w-8 text-white transform -rotate-90" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  3. Download & Use
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Get your professional headshot instantly. Perfect for
                  LinkedIn, resumes, business cards, and more.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Resume Building Process */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <DocumentTextIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Resume Building Process
                </h3>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  1. Choose Template
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Select from 5 ATS-friendly templates designed to get past
                  applicant tracking systems and impress recruiters.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  2. Add Your Information
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill in your details with our guided form. Get AI-powered
                  keyword suggestions based on your target role.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="h-8 w-8 text-white transform -rotate-90" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  3. Export & Apply
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Preview your resume and export as PDF. Your resume is ready to
                  submit to employers and job boards.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Your Career
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to create a professional online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card hover className="p-8 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-100 dark:to-gray-700 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {feature.title}
                          </h3>
                          <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-medium rounded-full">
                            {feature.stats}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose ProfiAI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built with privacy, speed, and professional quality in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 text-center h-full relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get your professional headshot in just 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="p-6 h-full text-center relative overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 ${step.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="text-4xl font-bold text-gray-300 dark:text-gray-600 mb-2 group-hover:text-gray-400 dark:group-hover:text-gray-500 transition-colors duration-300">
                      {step.step}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>

                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRightIcon className="h-8 w-8 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories from professionals who transformed their careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-full -translate-y-12 translate-x-12 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-teal-100 dark:ring-teal-900/30"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Start free and upgrade when you need more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card
                  className={`p-8 h-full relative overflow-hidden ${
                    plan.popular ? 'ring-2 ring-teal-500 shadow-2xl' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link to={plan.href} className="block w-full">
                    <Button
                      variant={plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl md:text-2xl text-teal-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have elevated their
              professional image with ProfiAI
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/headshot">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <CameraIcon className="h-6 w-6 mr-3" />
                  Start with Headshot
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/resume">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <DocumentTextIcon className="h-6 w-6 mr-3" />
                  Build Resume First
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 flex items-center justify-center space-x-8 text-teal-100"
            >
              <div className="flex items-center space-x-2">
                <HeartIcon className="h-5 w-5" />
                <span className="text-sm">
                  Made with love for professionals
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="h-5 w-5" />
                <span className="text-sm">100% secure & private</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
