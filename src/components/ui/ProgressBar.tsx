import React from 'react';
import { clsx } from 'clsx';

interface ProgressBarProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
}

export function ProgressBar({ progress, size = 'md', color = 'primary', showLabel = false }: ProgressBarProps) {
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const colorClasses = {
    primary: 'bg-[#3A6EA5]',
    success: 'bg-[#4CAF50]',
    warning: 'bg-[#FFA726]',
    error: 'bg-[#E53935]'
  };

  return (
    <div className="w-full">
      <div className={clsx('bg-gray-200 rounded-full overflow-hidden', sizeClasses[size])}>
        <div 
          className={clsx('transition-all duration-300 ease-out rounded-full', colorClasses[color])}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-xs text-gray-600">{Math.round(progress)}% complete</div>
      )}
    </div>
  );
}