import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className = '', 
  hover = false, 
  selected = false,
  onClick 
}: CardProps) {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200';
  
  const hoverClasses = hover ? 'hover:shadow-md hover:-translate-y-1 cursor-pointer' : '';
  const selectedClasses = selected ? 'ring-2 ring-teal-500 border-teal-500' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      className={`${baseClasses} ${hoverClasses} ${selectedClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}