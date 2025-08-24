import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SwatchIcon, 
  SunIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon
} from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import ProgressBar from '../../components/UI/ProgressBar';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { useTranslation } from '../../hooks/useTranslation';
import { HeadshotStyle } from '../../types';

export default function HeadshotCustomize() {
  const [selectedStyle, setSelectedStyle] = useState<HeadshotStyle | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [settings, setSettings] = useState({
    background: 'white',
    lighting: 'natural',
  });
  
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps = [
    { id: 'upload', name: t('uploadSelfie'), completed: true, current: false },
    { id: 'style', name: t('selectStyle'), completed: true, current: false },
    { id: 'customize', name: t('customize'), completed: false, current: true },
    { id: 'download', name: t('download'), completed: false, current: false },
  ];

  const backgroundOptions = [
    { id: 'white', name: 'Pure White', color: '#FFFFFF' },
    { id: 'light-gray', name: 'Light Gray', color: '#F3F4F6' },
    { id: 'navy', name: 'Navy Blue', color: '#1E3A8A' },
    { id: 'gradient', name: 'Blue Gradient', color: 'linear-gradient(135deg, #3B82F6, #2DD4BF)' },
  ];

  const lightingOptions = [
    { id: 'natural', name: 'Natural', description: 'Soft, even lighting' },
    { id: 'soft', name: 'Soft Studio', description: 'Professional studio lighting' },
    { id: 'bright', name: 'Bright Professional', description: 'High-key lighting' },
    { id: 'warm', name: 'Warm Light', description: 'Golden hour warmth' },
    { id: 'cool', name: 'Cool Light', description: 'Clean, modern lighting' },
  ];

  useEffect(() => {
    // Load data from previous steps
    const styleData = sessionStorage.getItem('headshot_style');
    const imageData = sessionStorage.getItem('headshot_image');
    
    if (!styleData || !imageData) {
      navigate('/headshot');
      return;
    }

    setSelectedStyle(JSON.parse(styleData));
    setUploadedImage(imageData);
  }, [navigate]);

  const handleGenerate = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Store settings for next step
      sessionStorage.setItem('headshot_settings', JSON.stringify(settings));
      navigate('/headshot/preview');
    } catch (error) {
      console.error('Processing failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBack = () => {
    navigate('/headshot/style');
  };

  if (!selectedStyle || !uploadedImage) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <LoadingSpinner showLogo message="Loading..." />
      </div>
    );
  }

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
              Customize Your Headshot
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Fine-tune the background and lighting to perfect your professional look
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preview Area */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="aspect-[4/5] max-w-md mx-auto relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  {isProcessing ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800">
                      <LoadingSpinner 
                        showLogo 
                        message="Generating your professional headshot..." 
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={uploadedImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        style={{ transform: `scale(${zoom / 100})` }}
                      />
                      
                      {/* Style Overlay Indicator */}
                      <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
                        {selectedStyle.name}
                      </div>
                      
                      {/* Background Preview */}
                      <div 
                        className="absolute inset-0 -z-10"
                        style={{
                          background: backgroundOptions.find(bg => bg.id === settings.background)?.color
                        }}
                      />
                    </>
                  )}
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <button
                    onClick={() => setZoom(Math.max(50, zoom - 10))}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <MagnifyingGlassMinusIcon className="h-5 w-5" />
                  </button>
                  <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[60px] text-center">
                    {zoom}%
                  </span>
                  <button
                    onClick={() => setZoom(Math.min(200, zoom + 10))}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <MagnifyingGlassPlusIcon className="h-5 w-5" />
                  </button>
                </div>
              </Card>
            </div>

            {/* Customization Panel */}
            <div className="space-y-6">
              {/* Background Options */}
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <SwatchIcon className="h-5 w-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Background
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {backgroundOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="background"
                        value={option.id}
                        checked={settings.background === option.id}
                        onChange={(e) => setSettings(prev => ({ ...prev, background: e.target.value }))}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <div
                        className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600"
                        style={{ background: option.color }}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {option.name}
                      </span>
                    </label>
                  ))}
                </div>
              </Card>

              {/* Lighting Options */}
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <SunIcon className="h-5 w-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Lighting
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {lightingOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-start space-x-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="lighting"
                        value={option.id}
                        checked={settings.lighting === option.id}
                        onChange={(e) => setSettings(prev => ({ ...prev, lighting: e.target.value }))}
                        className="text-teal-600 focus:ring-teal-500 mt-1"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {option.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {option.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </Card>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                isLoading={isProcessing}
                disabled={isProcessing}
                className="w-full"
                size="lg"
              >
                {isProcessing ? 'Generating...' : 'Generate Headshot'}
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handleBack} disabled={isProcessing}>
              {t('back')}
            </Button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Processing time: ~10 seconds
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}