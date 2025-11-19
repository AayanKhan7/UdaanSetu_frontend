import React from 'react';
import { Radar, RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { Card } from '../ui/card';

interface RadarChartProps {
  currentCompetencies: { [key: string]: number };
  targetCompetencies: { [key: string]: number };
  title?: string;
}

export function RadarChart({ currentCompetencies, targetCompetencies, title }: RadarChartProps) {
  const data = Object.keys(targetCompetencies).map((key) => ({
    competency: key,
    current: currentCompetencies[key] || 0,
    target: targetCompetencies[key],
  }));

  return (
    <Card className="p-6">
      {title && <h3 className="mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={350}>
        <RechartsRadar data={data}>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis dataKey="competency" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fill: '#9ca3af' }} />
          <Radar name="Current" dataKey="current" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
          <Radar name="Target" dataKey="target" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
          <Legend wrapperStyle={{ color: '#9ca3af' }} />
        </RechartsRadar>
      </ResponsiveContainer>
    </Card>
  );
}
