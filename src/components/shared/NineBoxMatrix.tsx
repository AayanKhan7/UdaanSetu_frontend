import React from 'react';
import { Card } from '../ui/card';
import { Employee } from '../../lib/mockData';

interface NineBoxMatrixProps {
  employees: Employee[];
  onCellClick?: (performance: number, potential: number) => void;
  selectedCell?: { performance: number; potential: number } | null;
}

export function NineBoxMatrix({ employees, onCellClick, selectedCell }: NineBoxMatrixProps) {
  const getEmployeesInCell = (performance: number, potential: number) => {
    return employees.filter(
      (emp) => emp.nineBoxPosition.performance === performance && emp.nineBoxPosition.potential === potential
    );
  };

  const getCellColor = (performance: number, potential: number) => {
    const sum = performance + potential;
    if (sum >= 5) return 'bg-green-900/30 border-green-600';
    if (sum >= 4) return 'bg-yellow-900/30 border-yellow-600';
    return 'bg-red-900/30 border-red-600';
  };

  const getCellLabel = (performance: number, potential: number) => {
    if (performance === 3 && potential === 3) return 'High Performer\nHigh Potential';
    if (performance === 3 && potential === 2) return 'High Performer\nMedium Potential';
    if (performance === 3 && potential === 1) return 'High Performer\nLow Potential';
    if (performance === 2 && potential === 3) return 'Medium Performer\nHigh Potential';
    if (performance === 2 && potential === 2) return 'Core Performer';
    if (performance === 2 && potential === 1) return 'Medium Performer\nLow Potential';
    if (performance === 1 && potential === 3) return 'Low Performer\nHigh Potential';
    if (performance === 1 && potential === 2) return 'Low Performer\nMedium Potential';
    return 'Under Performer';
  };

  return (
    <Card className="p-6">
      <h3 className="mb-4">9-Box Matrix</h3>
      <div className="relative">
        {/* Y-axis label */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 text-sm text-muted-foreground whitespace-nowrap">
          Potential →
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {[3, 2, 1].map((potential) => (
            <React.Fragment key={`row-${potential}`}>
              {[1, 2, 3].map((performance) => {
                const empInCell = getEmployeesInCell(performance, potential);
                const isSelected = selectedCell?.performance === performance && selectedCell?.potential === potential;
                
                return (
                  <div
                    key={`cell-${performance}-${potential}`}
                    onClick={() => onCellClick?.(performance, potential)}
                    className={`
                      relative h-32 border-2 rounded-lg p-3 cursor-pointer
                      transition-all hover:scale-105 hover:shadow-lg
                      ${getCellColor(performance, potential)}
                      ${isSelected ? 'ring-2 ring-blue-500' : ''}
                    `}
                  >
                    <div className="text-xs text-muted-foreground mb-2 whitespace-pre-line leading-tight">
                      {getCellLabel(performance, potential)}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-background/80 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-sm">{empInCell.length}</span>
                    </div>
                    {empInCell.length > 0 && empInCell.length <= 3 && (
                      <div className="mt-1 space-y-1">
                        {empInCell.map((emp) => (
                          <div key={emp.id} className="text-xs truncate bg-background/50 px-2 py-0.5 rounded">
                            {emp.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        
        {/* X-axis label */}
        <div className="text-center text-sm text-muted-foreground mt-2">
          ← Performance →
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-900/30 border-2 border-green-600"></div>
          <span className="text-muted-foreground">High Priority</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-yellow-900/30 border-2 border-yellow-600"></div>
          <span className="text-muted-foreground">Medium Priority</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-900/30 border-2 border-red-600"></div>
          <span className="text-muted-foreground">Needs Attention</span>
        </div>
      </div>
    </Card>
  );
}
