import React from 'react';

interface DataPoint {
  label: string;
  value: number;
}

interface MiniLineChartProps {
  data: DataPoint[];
  title: string;
  className?: string;
  color?: string;
}

export function MiniLineChart({ 
  data, 
  title, 
  className = "",
  color = "#3B82F6" 
}: MiniLineChartProps) {
  if (data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((point.value - minValue) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-200 ${className}`}>
      <h3 className="text-sm font-medium text-gray-600 mb-4">{title}</h3>
      
      <div className="relative h-32">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0"
        >
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#E5E7EB"
              strokeWidth="0.5"
            />
          ))}
          
          {/* Line chart */}
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={points}
          />
          
          {/* Data points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - ((point.value - minValue) / range) * 100;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="1.5"
                fill={color}
              />
            );
          })}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>{data[0]?.label}</span>
        <span>{data[data.length - 1]?.label}</span>
      </div>
    </div>
  );
}
