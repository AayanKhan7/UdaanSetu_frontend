import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { NineBoxMatrix } from '../shared/NineBoxMatrix';
import { ProgressChart } from '../shared/ProgressChart';
import { getEmployeesByManagerId, Employee } from '../../lib/mockData';
import { Users, ClipboardList, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';
import { ManagerInputForm } from './ManagerInputForm';
import { IDPApproval } from './IDPApproval';

interface ManagerDashboardProps {
  managerId: string;
}

type View = 'dashboard' | 'input-form' | 'idp-approval';

export function ManagerDashboard({ managerId }: ManagerDashboardProps) {
  const teamMembers = getEmployeesByManagerId(managerId);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const pendingInputs = teamMembers.filter(emp => !emp.appraisalScores);
  const pendingApprovals = teamMembers.filter(emp => emp.idpStatus === 'draft');
  const awaitingCommittee = teamMembers.filter(emp => emp.idpStatus === 'manager_approved');

  const handleInputClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setCurrentView('input-form');
  };

  const handleApprovalClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setCurrentView('idp-approval');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedEmployee(null);
  };

  if (currentView === 'input-form' && selectedEmployee) {
    return (
      <ManagerInputForm
        employee={selectedEmployee}
        onBack={handleBackToDashboard}
        onSubmit={() => {
          handleBackToDashboard();
        }}
      />
    );
  }

  if (currentView === 'idp-approval' && selectedEmployee) {
    return (
      <IDPApproval
        employee={selectedEmployee}
        onBack={handleBackToDashboard}
        onApprove={() => {
          handleBackToDashboard();
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1>Team Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Manage your team's development and succession planning
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-blue-600/20">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team Size</p>
              <p className="text-2xl mt-1">{teamMembers.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600/20">
              <ClipboardList className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Inputs</p>
              <p className="text-2xl mt-1">{pendingInputs.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-yellow-600/20">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Reviews</p>
              <p className="text-2xl mt-1">{pendingApprovals.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-green-600/20">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Approved IDPs</p>
              <p className="text-2xl mt-1">{awaitingCommittee.length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* To-Do Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Inputs */}
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <ClipboardList className="w-5 h-5" />
            Pending Appraisal Inputs
          </h3>
          <div className="space-y-3">
            {pendingInputs.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                All appraisals completed! 🎉
              </p>
            ) : (
              pendingInputs.map((emp) => (
                <div
                  key={emp.id}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div>
                    <p>{emp.name}</p>
                    <p className="text-sm text-muted-foreground">{emp.title}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleInputClick(emp)}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Add Input
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Pending IDP Reviews */}
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Pending IDP Reviews
          </h3>
          <div className="space-y-3">
            {pendingApprovals.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No pending reviews
              </p>
            ) : (
              pendingApprovals.map((emp) => (
                <div
                  key={emp.id}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div>
                    <p>{emp.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {emp.title} → {emp.targetRole}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleApprovalClick(emp)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Review
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>

      {/* Team 9-Box Matrix */}
      <NineBoxMatrix employees={teamMembers} />

      {/* Team Members List */}
      <Card className="p-6">
        <h3 className="mb-4">Team Members</h3>
        <div className="space-y-3">
          {teamMembers.map((emp) => (
            <div
              key={emp.id}
              className="flex items-center justify-between p-4 bg-muted rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-lg">{emp.name.charAt(0)}</span>
                </div>
                <div>
                  <p>{emp.name}</p>
                  <p className="text-sm text-muted-foreground">{emp.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Target Role</p>
                  <p className="text-sm">{emp.targetRole}</p>
                </div>

                <div className="flex items-center gap-2">
                  <ProgressChart progress={emp.overallProgress} size={60} showLabel={false} />
                  <span className="text-sm">{emp.overallProgress}%</span>
                </div>

                {emp.idpStatus === 'draft' ? (
                  <Badge className="bg-orange-600">Needs Review</Badge>
                ) : emp.idpStatus === 'manager_approved' ? (
                  <Badge className="bg-green-600">Approved</Badge>
                ) : emp.idpStatus === 'committee_approved' ? (
                  <Badge className="bg-blue-600">Committee Approved</Badge>
                ) : (
                  <Badge variant="outline">Draft</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
