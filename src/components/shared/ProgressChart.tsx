import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/card';

interface ProgressChartProps {
  progress: number;
  size?: number;
  showLabel?: boolean;
}

export function ProgressChart({ progress, size = 200, showLabel = true }: ProgressChartProps) {
  const data = [
    { name: 'Completed', value: progress },
    { name: 'Remaining', value: 100 - progress },
  ];

  const COLORS = ['#10b981', '#1f2937'];

  return (
    <div className="relative flex items-center justify-center">
      <ResponsiveContainer width={size} height={size}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size * 0.35}
            outerRadius={size * 0.45}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-4xl text-green-500">{progress}%</span>
          <span className="text-sm text-muted-foreground mt-1">Complete</span>
        </div>
      )}
    </div>
  );
}
