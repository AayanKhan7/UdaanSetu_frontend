import React, { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { User, UserRole } from '../lib/mockData';

interface LoginScreenProps {
  onLogin: (user: User) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login logic
    if (username === 'hr' || username === 'admin') {
      onLogin({ id: '1', name: 'HR Admin', role: 'hr', email: 'hr@powergrid.com' });
    } else if (username === 'manager' || username === 'rajesh') {
      onLogin({ 
        id: '2', 
        name: 'Rajesh Kumar', 
        role: 'manager', 
        email: 'rajesh@powergrid.com',
        department: 'Operations',
        title: 'Department Head'
      });
    } else {
      onLogin({ 
        id: '3', 
        name: 'Anya Sharma', 
        role: 'employee', 
        email: 'anya@powergrid.com',
        department: 'Operations',
        title: 'Senior Engineer'
      });
    }
  };

  const handleQuickLogin = (role: UserRole) => {
    if (role === 'hr') {
      onLogin({ id: '1', name: 'HR Admin', role: 'hr', email: 'hr@powergrid.com' });
    } else if (role === 'manager') {
      onLogin({ 
        id: '2', 
        name: 'Rajesh Kumar', 
        role: 'manager', 
        email: 'rajesh@powergrid.com',
        department: 'Operations',
        title: 'Department Head'
      });
    } else {
      onLogin({ 
        id: '3', 
        name: 'Anya Sharma', 
        role: 'employee', 
        email: 'anya@powergrid.com',
        department: 'Operations',
        title: 'Senior Engineer'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 100%)' }}>
      <Card className="w-full max-w-md p-8 bg-card/95 backdrop-blur">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="mb-2">UdaanSetu</h1>
          <p className="text-muted-foreground">Intelligent IDP Recommendation System</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-input"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Sign In
          </Button>
        </form>

        {/* Demo Quick Access */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-3">Quick Demo Access</p>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickLogin('hr')}
              className="text-xs"
            >
              HR Admin
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickLogin('manager')}
              className="text-xs"
            >
              Manager
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickLogin('employee')}
              className="text-xs"
            >
              Employee
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}