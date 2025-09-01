import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { KPI } from '../types';

interface KpiCardProps {
  kpi: KPI;
  className?: string;
}

export function KpiCard({ kpi, className = "" }: KpiCardProps) {
  const getTrendIcon = () => {
    if (kpi.trend === 'up') return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (kpi.trend === 'down') return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  const getTrendColor = () => {
    if (kpi.trend === 'up') return 'text-green-600';
    if (kpi.trend === 'down') return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-200 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{kpi.label}</h3>
        {getTrendIcon()}
      </div>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-gray-900">
          {kpi.value.toLocaleString()}
        </span>
        {kpi.unit && (
          <span className="ml-2 text-lg text-gray-500">{kpi.unit}</span>
        )}
      </div>
      {kpi.trend && (
        <div className={`mt-2 text-sm font-medium ${getTrendColor()}`}>
          {kpi.trend === 'up' ? '+' : kpi.trend === 'down' ? '-' : ''}
          {kpi.trend !== null ? '12%' : '0%'} vs mes anterior
        </div>
      )}
    </div>
  );
}
