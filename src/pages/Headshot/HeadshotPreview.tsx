import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowDownTrayIcon,
  ShareIcon,
  EyeIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import ProgressBar from '../../components/UI/ProgressBar';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { useTranslation } from '../../hooks/useTranslation';
import { useApp } from '../../contexts/AppContext';
import { HeadshotStyle, GeneratedHeadshot } from '../../types';

export default function HeadshotPreview() {
  const [selectedStyle, setSelectedStyle] = useState<HeadshotStyle | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [settings, setSettings] = useState<any>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('23:45:30');
  const [isDownloading, setIsDownloading] = useState(false);
  
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state, dispatch } = useApp();

  const steps = [
    { id: 'upload', name: t('uploadSelfie'), completed: true, current: false },
    { id: 'style', name: t('selectStyle'), completed: true, current: false },
    // TODO: Re-enable customize step when needed
    // { id: 'customize', name: t('customize'), completed: true, current: false },
    { id: 'download', name: t('download'), completed: false, current: true },
  ];

  useEffect(() => {
    // Load data from previous steps
    const styleData = sessionStorage.getItem('headshot_style');
    const imageData = sessionStorage.getItem('headshot_image');
    const settingsData = sessionStorage.getItem('headshot_settings');
    
    if (!styleData || !imageData || !settingsData) {
      navigate('/headshot');
      return;
    }

    setSelectedStyle(JSON.parse(styleData));
    setOriginalImage(imageData);
    setSettings(JSON.parse(settingsData));

    // Simulate countdown timer
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        const [hours, minutes, seconds] = prev.split(':').map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return '00:00:00';
        }
        
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;
        
        return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleDownload = async () => {
    if (!state.user) {
      navigate('/login');
      return;
    }

    // Check usage limits
    if (state.user.usage.headshots.downloaded >= state.user.usage.headshots.limit) {
      alert('You have reached your download limit for this month. Please upgrade to premium.');
      return;
    }

    setIsDownloading(true);
    
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create generated headshot record
      const generatedHeadshot: GeneratedHeadshot = {
        id: Date.now().toString(),
        originalImage: originalImage!,
        processedImage: originalImage!, // In real app, this would be the AI-processed image
        style: selectedStyle!,
        settings,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
      };

      // Update user usage
      dispatch({
        type: 'UPDATE_USER_USAGE',
        payload: {
          headshots: {
            ...state.user.usage.headshots,
            downloaded: state.user.usage.headshots.downloaded + 1,
          },
        },
      });

      // Add to generated headshots
      dispatch({ type: 'ADD_HEADSHOT', payload: generatedHeadshot });

      // Trigger download (in real app, this would download the actual file)
      const link = document.createElement('a');
      link.href = originalImage!;
      link.download = `profiai-headshot-${Date.now()}.jpg`;
      link.click();

      alert('Headshot downloaded successfully!');
    } catch (error) {
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleNewHeadshot = () => {
    // Clear session data
    sessionStorage.removeItem('headshot_image');
    sessionStorage.removeItem('headshot_style');
    sessionStorage.removeItem('headshot_settings');
    navigate('/headshot');
  };

  if (!selectedStyle || !originalImage || !settings) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <LoadingSpinner showLogo message="Loading preview..." />
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
              Your Professional Headshot is Ready!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Download your headshot or create another one
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preview Area */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="aspect-[4/5] max-w-md mx-auto relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={originalImage}
                    alt="Generated headshot"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Watermark (Free tier) */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    ProfiAI
                  </div>
                </div>

                {/* Comparison Toggle */}
                <div className="flex justify-center mt-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowComparison(!showComparison)}
                  >
                    <EyeIcon className="h-4 w-4 mr-2" />
                    {showComparison ? 'Hide' : 'Show'} Original
                  </Button>
                </div>

                {showComparison && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <img
                          src={originalImage}
                          alt="Original"
                          className="w-full aspect-[4/5] object-cover rounded-lg"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Original</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={originalImage}
                          alt="Enhanced"
                          className="w-full aspect-[4/5] object-cover rounded-lg"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Enhanced</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </Card>
            </div>

            {/* Download Options */}
            <div className="space-y-6">
              {/* Download Card */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Download Options
                </h3>
                
                {/* Free Download */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">Free Download</span>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">FREE</span>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                    <li>• 400x480px resolution</li>
                    <li>• JPEG format</li>
                    <li>• Small watermark</li>
                    <li>• LinkedIn optimized</li>
                  </ul>
                  <Button
                    onClick={handleDownload}
                    isLoading={isDownloading}
                    className="w-full"
                  >
                    <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                    {isDownloading ? 'Downloading...' : 'Download Free'}
                  </Button>
                  
                  {state.user && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                      {state.user.usage.headshots.limit - state.user.usage.headshots.downloaded} downloads remaining this month
                    </p>
                  )}
                </div>

                {/* Premium Upsell */}
                <div className="border-2 border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">Premium Download</span>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">PREMIUM</span>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                    <li>• 1200x1440px high resolution</li>
                    <li>• Multiple formats (JPEG, PNG)</li>
                    <li>• No watermark</li>
                    <li>• Unlimited downloads</li>
                    <li>• 50+ additional styles</li>
                  </ul>
                  <Button variant="outline" className="w-full border-teal-300 text-teal-700 hover:bg-teal-100">
                    {t('upgrade')}
                  </Button>
                </div>
              </Card>

              {/* Auto-Delete Notice */}
              <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                      Auto-Delete Timer
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                      Your image will be automatically deleted in:
                    </p>
                    <div className="text-lg font-mono text-blue-800 dark:text-blue-200">
                      {timeRemaining}
                    </div>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                      Download now to keep your headshot
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Sharing (Placeholder) */}
              <Card className="p-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Share Your Success
                </h4>
                <Button variant="outline" className="w-full" disabled>
                  <ShareIcon className="h-4 w-4 mr-2" />
                  Share to LinkedIn (Coming Soon)
                </Button>
              </Card>

              {/* Create Another */}
              <Button
                variant="outline"
                onClick={handleNewHeadshot}
                className="w-full"
              >
                Create Another Headshot
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}