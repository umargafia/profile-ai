import React from 'react';
import { BrainIcon } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  showLogo?: boolean;
}

export default function LoadingSpinner({ 
  size = 'md', 
  message,
  showLogo = false 
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  if (showLogo) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="relative">
          <BrainIcon className="h-16 w-16 text-teal-600 animate-pulse" />
          <div className="absolute inset-0 h-16 w-16 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
        </div>
        {message && (
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizes[size]} border-2 border-gray-200 border-t-teal-600 rounded-full animate-spin`}></div>
      {message && (
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {message}
        </span>
      )}
    </div>
  );
}