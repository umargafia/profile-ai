import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import ProgressBar from '../../components/UI/ProgressBar';
import { useTranslation } from '../../hooks/useTranslation';
import Input from '../../components/UI/Input';

export default function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps = [
    { id: 'personal', name: 'Personal Info', completed: false, current: true },
    { id: 'experience', name: 'Experience', completed: false, current: false },
    { id: 'education', name: 'Education', completed: false, current: false },
    { id: 'skills', name: 'Skills', completed: false, current: false },
    { id: 'generate', name: 'Generate', completed: false, current: false },
  ];

  // Form data state
  const [formData, setFormData] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      summary: '',
    },
    experience: [
      {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      },
    ],
    education: [
      {
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
      },
    ],
    skills: {
      technical: '',
      soft: '',
      languages: '',
      certifications: '',
    },
  });

  const updateFormData = (
    section: string,
    field: string,
    value: any,
    index?: number
  ) => {
    setFormData((prev) => {
      if (index !== undefined) {
        // Handle array updates (experience, education)
        const newArray = [...prev[section as keyof typeof prev]];
        newArray[index] = { ...newArray[index], [field]: value };
        return { ...prev, [section]: newArray };
      } else {
        // Handle direct field updates
        return {
          ...prev,
          [section]: { ...prev[section as keyof typeof prev], [field]: value },
        };
      }
    });
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          gpa: '',
        },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    setIsProcessing(true);

    try {
      // Store form data for next step
      sessionStorage.setItem('resume_data', JSON.stringify(formData));

      // Simulate AI processing time
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Navigate to resume preview
      navigate('/resume/preview');
    } catch (error) {
      console.error('Generation failed:', error);
      alert('Failed to generate resume. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Personal Info
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Start with Your Personal Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Tell us about yourself so we can create a personalized resume
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                placeholder="John Doe"
                value={formData.personal.fullName}
                onChange={(value) =>
                  updateFormData('personal', 'fullName', value)
                }
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="john.doe@email.com"
                value={formData.personal.email}
                onChange={(value) => updateFormData('personal', 'email', value)}
                required
              />
              <Input
                label="Phone"
                placeholder="+1 (555) 123-4567"
                value={formData.personal.phone}
                onChange={(value) => updateFormData('personal', 'phone', value)}
              />
              <Input
                label="Location"
                placeholder="City, State"
                value={formData.personal.location}
                onChange={(value) =>
                  updateFormData('personal', 'location', value)
                }
              />
              <Input
                label="LinkedIn Profile"
                placeholder="linkedin.com/in/johndoe"
                value={formData.personal.linkedin}
                onChange={(value) =>
                  updateFormData('personal', 'linkedin', value)
                }
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Professional Summary
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="A brief summary of your professional background, key skills, and career objectives..."
                value={formData.personal.summary}
                onChange={(e) =>
                  updateFormData('personal', 'summary', e.target.value)
                }
              />
            </div>
          </motion.div>
        );

      case 1: // Experience
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Work Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Add your professional experience to showcase your career
                progression
              </p>
            </div>

            {formData.experience.map((exp, index) => (
              <Card key={index} className="p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Experience #{index + 1}
                  </h3>
                  {formData.experience.length > 1 && (
                    <button
                      onClick={() => removeExperience(index)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Company"
                    placeholder="Company Name"
                    value={exp.company}
                    onChange={(value) =>
                      updateFormData('experience', 'company', value, index)
                    }
                    required
                  />
                  <Input
                    label="Position"
                    placeholder="Job Title"
                    value={exp.position}
                    onChange={(value) =>
                      updateFormData('experience', 'position', value, index)
                    }
                    required
                  />
                  <Input
                    label="Start Date"
                    type="month"
                    value={exp.startDate}
                    onChange={(value) =>
                      updateFormData('experience', 'startDate', value, index)
                    }
                    required
                  />
                  <Input
                    label="End Date"
                    type="month"
                    value={exp.endDate}
                    onChange={(value) =>
                      updateFormData('experience', 'endDate', value, index)
                    }
                    disabled={exp.current}
                  />
                </div>

                <div className="mt-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) =>
                        updateFormData(
                          'experience',
                          'current',
                          e.target.checked,
                          index
                        )
                      }
                      className="text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      I currently work here
                    </span>
                  </label>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Describe your responsibilities and achievements..."
                    value={exp.description}
                    onChange={(e) =>
                      updateFormData(
                        'experience',
                        'description',
                        e.target.value,
                        index
                      )
                    }
                  />
                </div>
              </Card>
            ))}

            <Button
              onClick={addExperience}
              variant="outline"
              className="w-full"
            >
              + Add Another Experience
            </Button>
          </motion.div>
        );

      case 2: // Education
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Education
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Add your educational background and qualifications
              </p>
            </div>

            {formData.education.map((edu, index) => (
              <Card key={index} className="p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Education #{index + 1}
                  </h3>
                  {formData.education.length > 1 && (
                    <button
                      onClick={() => removeEducation(index)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Institution"
                    placeholder="University/College Name"
                    value={edu.institution}
                    onChange={(value) =>
                      updateFormData('education', 'institution', value, index)
                    }
                    required
                  />
                  <Input
                    label="Degree"
                    placeholder="Bachelor's, Master's, etc."
                    value={edu.degree}
                    onChange={(value) =>
                      updateFormData('education', 'degree', value, index)
                    }
                    required
                  />
                  <Input
                    label="Field of Study"
                    placeholder="Computer Science, Business, etc."
                    value={edu.field}
                    onChange={(value) =>
                      updateFormData('education', 'field', value, index)
                    }
                    required
                  />
                  <Input
                    label="GPA (Optional)"
                    placeholder="3.8"
                    value={edu.gpa}
                    onChange={(value) =>
                      updateFormData('education', 'gpa', value, index)
                    }
                  />
                  <Input
                    label="Start Date"
                    type="month"
                    value={edu.startDate}
                    onChange={(value) =>
                      updateFormData('education', 'startDate', value, index)
                    }
                    required
                  />
                  <Input
                    label="End Date"
                    type="month"
                    value={edu.endDate}
                    onChange={(value) =>
                      updateFormData('education', 'endDate', value, index)
                    }
                    required
                  />
                </div>
              </Card>
            ))}

            <Button onClick={addEducation} variant="outline" className="w-full">
              + Add Another Education
            </Button>
          </motion.div>
        );

      case 3: // Skills
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Skills & Expertise
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Highlight your key skills to make your resume stand out
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Technical Skills
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="e.g., JavaScript, React, Python, AWS, Docker, Git..."
                  value={formData.skills.technical}
                  onChange={(e) =>
                    updateFormData('skills', 'technical', e.target.value)
                  }
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Separate skills with commas
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Soft Skills
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="e.g., Leadership, Communication, Problem Solving, Teamwork..."
                  value={formData.skills.soft}
                  onChange={(e) =>
                    updateFormData('skills', 'soft', e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Languages
                </label>
                <textarea
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="e.g., English (Native), Spanish (Fluent), French (Intermediate)..."
                  value={formData.skills.languages}
                  onChange={(e) =>
                    updateFormData('skills', 'languages', e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Certifications
                </label>
                <textarea
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="e.g., AWS Certified Solutions Architect, PMP, Google Analytics..."
                  value={formData.skills.certifications}
                  onChange={(e) =>
                    updateFormData('skills', 'certifications', e.target.value)
                  }
                />
              </div>
            </div>
          </motion.div>
        );

      case 4: // Generate
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Generate Your Resume?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Review your information and let AI create your professional
                resume
              </p>
            </div>

            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Summary of Your Information
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Personal Info
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formData.personal.fullName} • {formData.personal.email} •{' '}
                    {formData.personal.location}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Experience
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formData.experience.length} position
                    {formData.experience.length !== 1 ? 's' : ''} added
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Education
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formData.education.length} degree
                    {formData.education.length !== 1 ? 's' : ''} added
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Skills
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {
                      formData.skills.technical
                        .split(',')
                        .filter((s) => s.trim()).length
                    }{' '}
                    technical skills,{' '}
                    {
                      formData.skills.soft.split(',').filter((s) => s.trim())
                        .length
                    }{' '}
                    soft skills
                  </p>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button
                onClick={handleGenerate}
                disabled={isProcessing}
                size="lg"
                className="w-full max-w-md"
              >
                {isProcessing ? (
                  <>
                    <DocumentTextIcon className="h-5 w-5 mr-2 animate-pulse" />
                    Generating Your Resume...
                  </>
                ) : (
                  <>
                    <StarIcon className="h-5 w-5 mr-2" />
                    Generate My Resume
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgressBar steps={steps} />

        {/* Loading Overlay */}
        {isProcessing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Generating Your Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI is crafting your professional resume...
              </p>
            </div>
          </div>
        )}

        <div className="mt-8">{renderStep()}</div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            Previous
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button
              onClick={nextStep}
              size="lg"
              className="flex items-center space-x-2"
            >
              Next
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
