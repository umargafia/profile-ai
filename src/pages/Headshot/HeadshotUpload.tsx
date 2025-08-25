import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CloudArrowUpIcon,
  PhotoIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import ProgressBar from '../../components/UI/ProgressBar';
import { useTranslation } from '../../hooks/useTranslation';

export default function HeadshotUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const changePhotoRef = useRef<HTMLInputElement>(null);

  const steps = [
    { id: 'upload', name: t('uploadSelfie'), completed: false, current: true },
    { id: 'style', name: t('selectStyle'), completed: false, current: false },
    { id: 'customize', name: t('customize'), completed: false, current: false },
    { id: 'download', name: t('download'), completed: false, current: false },
  ];

  const validateFile = (file: File): string | null => {
    if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
      return 'Please upload a JPEG or PNG image';
    }
    if (file.size > 5 * 1024 * 1024) {
      return 'File size must be less than 5MB';
    }
    return null;
  };

  const handleFileSelect = useCallback((file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log('File input change:', files); // Debug log
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
      // Reset the input value to allow selecting the same file again
      e.target.value = '';
    }
  };

  const handleContinue = () => {
    if (selectedFile) {
      // Store file in sessionStorage for next step
      const reader = new FileReader();
      reader.onload = () => {
        sessionStorage.setItem('headshot_image', reader.result as string);
        navigate('/headshot/style');
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const tips = [
    { icon: '💡', text: t('tipLighting') },
    { icon: '👤', text: t('tipFacing') },
    { icon: '🖼️', text: t('tipBackground') },
    { icon: '😊', text: t('tipSmile') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgressBar steps={steps} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Upload Area */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Upload Your Selfie
                </h1>

                {/* Upload Zone */}
                <div
                  className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 cursor-pointer group ${
                    isDragOver
                      ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                      : selectedFile
                      ? 'border-green-300 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-300 dark:border-gray-600 hover:border-teal-400'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => {
                    if (!selectedFile) {
                      console.log('Upload zone clicked'); // Debug log
                      fileInputRef.current?.click();
                    }
                  }}
                >
                  {preview ? (
                    <div className="space-y-4">
                      <img
                        src={preview}
                        alt="Preview"
                        className="mx-auto h-48 w-48 object-cover rounded-lg shadow-md"
                      />
                      <div className="flex justify-center space-x-4">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSelectedFile(null);
                            setPreview(null);
                            setError('');
                          }}
                        >
                          Remove
                        </Button>
                        <div className="relative">
                          <input
                            ref={changePhotoRef}
                            type="file"
                            id="change-photo"
                            className="hidden"
                            accept="image/jpeg,image/jpg,image/png"
                            onChange={handleFileInput}
                          />
                          <Button
                            variant="ghost"
                            onClick={() => {
                              console.log('Change photo button clicked'); // Debug log
                              changePhotoRef.current?.click();
                            }}
                          >
                            Change Photo
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <CloudArrowUpIcon className="mx-auto h-16 w-16 text-gray-400 group-hover:text-teal-500 transition-colors" />
                      <div>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                          {t('dragDropText')}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {t('fileRequirements')}
                        </p>
                        <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                          Click anywhere in this area to browse files
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          ref={fileInputRef}
                          type="file"
                          id="file-upload"
                          className="hidden"
                          accept="image/jpeg,image/jpg,image/png"
                          onChange={handleFileInput}
                        />
                        <Button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering upload zone click
                            console.log('Browse button clicked'); // Debug log
                            fileInputRef.current?.click();
                          }}
                        >
                          <PhotoIcon className="h-5 w-5 mr-2" />
                          Browse Files
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {error}
                    </p>
                  </div>
                )}

                {/* Privacy Notice */}
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md">
                  <div className="flex items-start space-x-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>{t('secureUpload')}</strong> -{' '}
                        {t('privacyNotice')}
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                        {t('dataEncrypted')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Continue Button */}
                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={handleContinue}
                    disabled={!selectedFile}
                    size="lg"
                  >
                    {t('continue')}
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Tips Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <InformationCircleIcon className="h-5 w-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t('tipsTitle')}
                  </h3>
                </div>

                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-lg">{tip.icon}</span>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {tip.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Example Images */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Good vs. Poor Examples
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <img
                        src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                        alt="Good example"
                        className="w-full h-20 object-cover rounded-md"
                      />
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        ✓ Good
                      </p>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                        alt="Poor example"
                        className="w-full h-20 object-cover rounded-md grayscale"
                      />
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        ✗ Avoid
                      </p>
                    </div>
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
