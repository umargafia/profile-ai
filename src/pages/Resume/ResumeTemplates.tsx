import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckIcon, StarIcon, FunnelIcon } from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import ProgressBar from '../../components/UI/ProgressBar';
import { useTranslation } from '../../hooks/useTranslation';
import { resumeTemplates } from '../../data/mockData';
import { ResumeTemplate } from '../../types';

export default function ResumeTemplateSelection() {
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps = [
    { id: 'template', name: t('selectTemplate'), completed: false, current: true },
    { id: 'input', name: t('inputDetails'), completed: false, current: false },
    { id: 'preview', name: t('preview'), completed: false, current: false },
    { id: 'export', name: t('export'), completed: false, current: false },
  ];

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
    { id: 'creative', name: 'Creative' },
    { id: 'ats', name: 'ATS-Optimized' },
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? resumeTemplates 
    : resumeTemplates.filter(template => template.category === selectedCategory);

  const handleContinue = () => {
    if (selectedTemplate) {
      sessionStorage.setItem('resume_template', JSON.stringify(selectedTemplate));
      navigate('/resume/input');
    }
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
              Choose Your Resume Template
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select a professional template that matches your industry and career level
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  hover
                  selected={selectedTemplate?.id === template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className="relative overflow-hidden cursor-pointer group"
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src={template.thumbnail}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />
                    
                    {/* Selection Indicator */}
                    {selectedTemplate?.id === template.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-white" />
                      </div>
                    )}

                    {/* Premium Badge */}
                    {template.isPremium && (
                      <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Premium
                      </div>
                    )}

                    {/* ATS Score */}
                    <div className="absolute bottom-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      ATS {template.atsScore}%
                    </div>

                    {/* Select Button (appears on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        Select Template
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {template.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {template.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="capitalize text-gray-500 dark:text-gray-400">
                        {template.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          {template.atsScore}% ATS
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Selected Template Details */}
          {selectedTemplate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Card className="p-6">
                <div className="flex items-center space-x-6">
                  <img
                    src={selectedTemplate.thumbnail}
                    alt={selectedTemplate.name}
                    className="w-20 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {selectedTemplate.name}
                      </h3>
                      <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-700 dark:text-green-300 font-medium">
                          {selectedTemplate.atsScore}% ATS Compatible
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {selectedTemplate.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <span className="capitalize">Category: {selectedTemplate.category}</span>
                      {selectedTemplate.isPremium && (
                        <div className="flex items-center space-x-1">
                          <StarIcon className="h-4 w-4 text-yellow-500" />
                          <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                            Premium Template
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <Button
                      onClick={() => {
                        // Preview functionality
                        window.open(selectedTemplate.thumbnail, '_blank');
                      }}
                      variant="outline"
                      size="sm"
                    >
                      Preview Full Size
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* ATS Information */}
          <Card className="p-6 mb-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
              What is ATS Compatibility?
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
              Applicant Tracking Systems (ATS) are used by 75% of companies to screen resumes. 
              Our templates are optimized to pass through these systems successfully.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-600" />
                <span className="text-blue-800 dark:text-blue-200">Clean formatting</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-600" />
                <span className="text-blue-800 dark:text-blue-200">Standard fonts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-4 w-4 text-green-600" />
                <span className="text-blue-800 dark:text-blue-200">Keyword optimized</span>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => navigate('/')}>
              {t('back')}
            </Button>
            <Button
              onClick={handleContinue}
              disabled={!selectedTemplate}
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