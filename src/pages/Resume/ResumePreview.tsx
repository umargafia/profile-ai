import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowDownTrayIcon,
  ShareIcon,
  EyeIcon,
  DocumentTextIcon,
  StarIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import ProgressBar from '../../components/UI/ProgressBar';
import { useTranslation } from '../../hooks/useTranslation';

export default function ResumePreview() {
  const [resumeData, setResumeData] = useState<any>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps = [
    { id: 'personal', name: 'Personal Info', completed: true, current: false },
    { id: 'experience', name: 'Experience', completed: true, current: false },
    { id: 'education', name: 'Education', completed: true, current: false },
    { id: 'skills', name: 'Skills', completed: true, current: false },
    { id: 'generate', name: 'Generate', completed: true, current: false },
  ];

  useEffect(() => {
    // Load resume data from session storage
    const data = sessionStorage.getItem('resume_data');
    if (!data) {
      navigate('/resume');
      return;
    }
    setResumeData(JSON.parse(data));
  }, [navigate]);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Simulate download process
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real app, this would generate and download the PDF
      alert('Resume downloaded successfully!');
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleBack = () => {
    navigate('/resume');
  };

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading resume...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgressBar steps={steps} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Professional Resume is Ready!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Review your AI-generated resume and download it in your preferred
              format
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Resume Preview */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Resume Preview
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.print()}
                    >
                      <EyeIcon className="h-4 w-4 mr-2" />
                      Print View
                    </Button>
                  </div>
                </div>

                {/* Resume Content */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 space-y-6">
                  {/* Header */}
                  <div className="text-center border-b border-gray-200 pb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {resumeData.personal.fullName}
                    </h1>
                    <p className="text-lg text-gray-600 mb-3">
                      {resumeData.personal.summary}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                      <span>{resumeData.personal.email}</span>
                      <span>{resumeData.personal.phone}</span>
                      <span>{resumeData.personal.location}</span>
                      {resumeData.personal.linkedin && (
                        <span>{resumeData.personal.linkedin}</span>
                      )}
                    </div>
                  </div>

                  {/* Experience */}
                  {resumeData.experience.length > 0 && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Professional Experience
                      </h2>
                      <div className="space-y-4">
                        {resumeData.experience.map(
                          (exp: any, index: number) => (
                            <div key={index} className="mb-4">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-gray-900">
                                  {exp.position}
                                </h3>
                                <span className="text-sm text-gray-500">
                                  {exp.startDate} -{' '}
                                  {exp.current ? 'Present' : exp.endDate}
                                </span>
                              </div>
                              <p className="font-medium text-gray-700 mb-2">
                                {exp.company}
                              </p>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {exp.description}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Education */}
                  {resumeData.education.length > 0 && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                        Education
                      </h2>
                      <div className="space-y-4">
                        {resumeData.education.map((edu: any, index: number) => (
                          <div key={index} className="mb-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-gray-900">
                                {edu.degree} in {edu.field}
                              </h3>
                              <span className="text-sm text-gray-500">
                                {edu.startDate} - {edu.endDate}
                              </span>
                            </div>
                            <p className="font-medium text-gray-700 mb-2">
                              {edu.institution}
                            </p>
                            {edu.gpa && (
                              <p className="text-gray-600 text-sm">
                                GPA: {edu.gpa}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                      Skills & Expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {resumeData.skills.technical && (
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">
                            Technical Skills
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {resumeData.skills.technical}
                          </p>
                        </div>
                      )}
                      {resumeData.skills.soft && (
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">
                            Soft Skills
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {resumeData.skills.soft}
                          </p>
                        </div>
                      )}
                      {resumeData.skills.languages && (
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">
                            Languages
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {resumeData.skills.languages}
                          </p>
                        </div>
                      )}
                      {resumeData.skills.certifications && (
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">
                            Certifications
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {resumeData.skills.certifications}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Download Options */}
            <div className="space-y-6">
              {/* Free Download */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Download Options
                </h3>

                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Free Download
                      </span>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        FREE
                      </span>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                      <li>• PDF format</li>
                      <li>• Standard quality</li>
                      <li>• Basic templates</li>
                    </ul>
                    <Button
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="w-full"
                    >
                      {isDownloading ? 'Downloading...' : 'Download Free'}
                    </Button>
                  </div>

                  <div className="border-2 border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Premium Download
                      </span>
                      <div className="flex items-center space-x-1">
                        <StarIcon className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                          PREMIUM
                        </span>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                      <li>• Multiple formats (PDF, Word, HTML)</li>
                      <li>• High resolution</li>
                      <li>• Premium templates</li>
                      <li>• ATS optimization</li>
                      <li>• Unlimited downloads</li>
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full border-teal-300 text-teal-700 hover:bg-teal-100"
                    >
                      {t('upgrade')}
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Resume Tips */}
              <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  Resume Tips
                </h3>
                <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <div className="flex items-start space-x-2">
                    <CheckIcon className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Customize for each job application</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckIcon className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Use action verbs and quantifiable results</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckIcon className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Keep it concise (1-2 pages)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckIcon className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Proofread for errors</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handleBack}>
              {t('back')}
            </Button>
            <Button onClick={() => navigate('/')} size="lg">
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
