import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { NineBoxMatrix } from '../shared/NineBoxMatrix';
import { mockEmployees, Employee } from '../../lib/mockData';
import { Users, ClipboardCheck, Clock, TrendingUp, Upload, FileText, ChevronRight, BarChart3 } from 'lucide-react';
import { DataUpload } from './DataUpload';
import { SuccessProfileManagement } from './SuccessProfileManagement';
import { EmployeeDetailView } from './EmployeeDetailView';

type View = 'dashboard' | 'data-upload' | 'success-profiles' | 'employee-detail';

export function HRDashboard() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ performance: number; potential: number } | null>(null);

  const totalEmployees = mockEmployees.length;
  const pendingApprovals = mockEmployees.filter(emp => emp.idpStatus === 'manager_approved').length;
  const approvedIDPs = mockEmployees.filter(emp => emp.idpStatus === 'committee_approved').length;
  const avgReadiness = Math.round(mockEmployees.reduce((sum, emp) => sum + emp.overallProgress, 0) / totalEmployees);

  const handleCellClick = (performance: number, potential: number) => {
    setSelectedCell({ performance, potential });
  };

  const handleEmployeeClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setCurrentView('employee-detail');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedEmployee(null);
    setSelectedCell(null);
  };

  if (currentView === 'data-upload') {
    return <DataUpload onBack={handleBackToDashboard} />;
  }

  if (currentView === 'success-profiles') {
    return <SuccessProfileManagement onBack={handleBackToDashboard} />;
  }

  if (currentView === 'employee-detail' && selectedEmployee) {
    return <EmployeeDetailView employee={selectedEmployee} onBack={handleBackToDashboard} />;
  }

  const employeesInSelectedCell = selectedCell
    ? mockEmployees.filter(
        (emp) =>
          emp.nineBoxPosition.performance === selectedCell.performance &&
          emp.nineBoxPosition.potential === selectedCell.potential
      )
    : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>HR Committee Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Succession planning oversight and IDP management
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentView('data-upload')}
            className="gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload Data
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentView('success-profiles')}
            className="gap-2"
          >
            <FileText className="w-4 h-4" />
            Success Profiles
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-blue-600/20">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Pipeline</p>
              <p className="text-2xl mt-1">{totalEmployees}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600/20">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Awaiting Review</p>
              <p className="text-2xl mt-1">{pendingApprovals}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-green-600/20">
              <ClipboardCheck className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Approved IDPs</p>
              <p className="text-2xl mt-1">{approvedIDPs}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-purple-600/20">
              <TrendingUp className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Readiness</p>
              <p className="text-2xl mt-1">{avgReadiness}%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 9-Box Matrix */}
        <div className="lg:col-span-2">
          <NineBoxMatrix
            employees={mockEmployees}
            onCellClick={handleCellClick}
            selectedCell={selectedCell}
          />
        </div>

        {/* Approval Queue */}
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-500" />
            IDPs Awaiting Review
          </h3>
          <div className="space-y-3">
            {mockEmployees
              .filter((emp) => emp.idpStatus === 'manager_approved')
              .map((emp) => (
                <div
                  key={emp.id}
                  className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                  onClick={() => handleEmployeeClick(emp)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p>{emp.name}</p>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-muted-foreground">{emp.title}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-blue-600 text-xs">
                      → {emp.targetRole}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {emp.readinessLevel}
                    </Badge>
                  </div>
                </div>
              ))}
            {mockEmployees.filter((emp) => emp.idpStatus === 'manager_approved').length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                No pending approvals
              </p>
            )}
          </div>
        </Card>
      </div>

      {/* Selected Cell Details */}
      {selectedCell && employeesInSelectedCell.length > 0 && (
        <Card className="p-6">
          <h3 className="mb-4">
            Employees in Selected Cell ({employeesInSelectedCell.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employeesInSelectedCell.map((emp) => (
              <div
                key={emp.id}
                className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                onClick={() => handleEmployeeClick(emp)}
              >
                <div className="flex items-center justify-between mb-2">
                  <p>{emp.name}</p>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{emp.title}</p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600 text-xs">
                    → {emp.targetRole}
                  </Badge>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span>{emp.overallProgress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${emp.overallProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Organizational Gap Analysis */}
      <Card className="p-6">
        <h3 className="mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Organizational Competency Gap Analysis
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Strategic Thinking', 'Leadership', 'Financial Acumen', 'Operational Excellence', 'Stakeholder Management', 'Digital Transformation'].map((competency) => {
            const avgScore = Math.round(
              mockEmployees.reduce((sum, emp) => sum + (emp.competencies[competency] || 0), 0) / totalEmployees
            );
            const targetScore = 8;
            const gap = Math.max(0, targetScore - avgScore);
            
            return (
              <div key={competency} className="p-4 bg-muted rounded-lg text-center">
                <p className="text-sm mb-2">{competency}</p>
                <p className="text-2xl mb-1">{avgScore}/10</p>
                {gap > 0 && (
                  <Badge variant="outline" className="text-xs">
                    Gap: {gap}
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
