import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, FunnelIcon, StarIcon } from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import ProgressBar from '../../components/UI/ProgressBar';
import { useTranslation } from '../../hooks/useTranslation';
import { useApp } from '../../contexts/AppContext';
import { headshotStyles } from '../../data/mockData';
import { HeadshotStyle } from '../../types';

export default function HeadshotStyleSelection() {
  const [selectedStyle, setSelectedStyle] = useState<HeadshotStyle | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state } = useApp();

  const steps = [
    { id: 'upload', name: t('uploadSelfie'), completed: true, current: false },
    { id: 'style', name: t('selectStyle'), completed: false, current: true },
    { id: 'customize', name: t('customize'), completed: false, current: false },
    { id: 'download', name: t('download'), completed: false, current: false },
  ];

  const categories = [
    { id: 'all', name: 'All Styles' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'creative', name: 'Creative' },
    { id: 'casual', name: 'Casual' },
    { id: 'industry', name: 'Industry-Specific' },
  ];

  const filteredStyles = headshotStyles
    .filter(
      (style) =>
        selectedCategory === 'all' || style.category === selectedCategory
    )
    .filter((style) => !showPremiumOnly || style.isPremium);

  useEffect(() => {
    // Check if user came from upload step
    const uploadedImage = sessionStorage.getItem('headshot_image');
    if (!uploadedImage) {
      navigate('/headshot');
    }
  }, [navigate]);

  const handleContinue = () => {
    if (selectedStyle) {
      // Check if user is trying to use premium style with free plan
      if (selectedStyle.isPremium && state.user?.plan === 'free') {
        if (
          confirm(
            'This is a premium style. Would you like to upgrade to premium to unlock all styles?'
          )
        ) {
          // In a real app, this would navigate to upgrade page
          alert('Please upgrade to premium to use premium styles.');
          return;
        }
        return;
      }

      sessionStorage.setItem('headshot_style', JSON.stringify(selectedStyle));
      navigate('/headshot/customize');
    }
  };

  const handleBack = () => {
    navigate('/headshot');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgressBar steps={steps} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Professional Style
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select the style that best matches your industry and personal
              brand
            </p>

            {/* Premium Upgrade Banner for Free Users */}
            {state.user?.plan === 'free' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 inline-block"
              >
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <StarIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                        Unlock Premium Styles
                      </p>
                      <p className="text-xs text-yellow-700 dark:text-yellow-300">
                        Get access to 15+ premium styles and high-resolution
                        downloads
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-yellow-600 hover:bg-yellow-700 text-white"
                    >
                      Upgrade Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Category and Premium Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-teal-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Premium Filter */}
            {state.user?.plan === 'premium' && (
              <div className="flex items-center space-x-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showPremiumOnly}
                    onChange={(e) => setShowPremiumOnly(e.target.checked)}
                    className="text-teal-600 focus:ring-teal-500 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Premium Styles Only
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Style Counter and Grid */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredStyles.length} of {headshotStyles.length} styles
              {state.user?.plan === 'free' &&
                ' (Free users see 10 basic styles)'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            {filteredStyles.map((style, index) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  hover
                  selected={selectedStyle?.id === style.id}
                  onClick={() => setSelectedStyle(style)}
                  className="relative overflow-hidden cursor-pointer group"
                >
                  <div className="aspect-[4/5] relative">
                    <img
                      src={style.thumbnail}
                      alt={style.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />

                    {/* Selection Indicator */}
                    {selectedStyle?.id === style.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-white" />
                      </div>
                    )}

                    {/* Premium Badge */}
                    {style.isPremium && (
                      <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Premium
                      </div>
                    )}

                    {/* Select Button (appears on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        Select Style
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {style.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {style.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Selected Style Details */}
          {selectedStyle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedStyle.thumbnail}
                    alt={selectedStyle.name}
                    className="w-16 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {selectedStyle.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {selectedStyle.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="capitalize">
                        Category: {selectedStyle.category}
                      </span>
                      {selectedStyle.isPremium && (
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                          Premium Style
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              {t('back')}
            </Button>
            <Button
              onClick={handleContinue}
              disabled={!selectedStyle}
              size="lg"
            >
              {t('continue')}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
