import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface Step {
  id: string;
  name: string;
  completed: boolean;
  current: boolean;
}

interface ProgressBarProps {
  steps: Step[];
}

export default function ProgressBar({ steps }: ProgressBarProps) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="flex items-center justify-center space-x-4 md:space-x-8">
        {steps.map((step, stepIdx) => (
          <li key={step.id} className="flex items-center">
            <div className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  step.completed
                    ? 'bg-teal-600 border-teal-600'
                    : step.current
                    ? 'border-teal-600 bg-white'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {step.completed ? (
                  <CheckIcon className="h-6 w-6 text-white" />
                ) : (
                  <span
                    className={`text-sm font-medium ${
                      step.current ? 'text-teal-600' : 'text-gray-500'
                    }`}
                  >
                    {stepIdx + 1}
                  </span>
                )}
              </div>
              <span
                className={`ml-3 text-sm font-medium ${
                  step.current
                    ? 'text-teal-600'
                    : step.completed
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {step.name}
              </span>
            </div>
            {stepIdx < steps.length - 1 && (
              <div className="ml-4 h-0.5 w-12 bg-gray-200 dark:bg-gray-700" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}