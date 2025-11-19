// Mock data for POWERGRID IDP System

export type UserRole = "hr" | "manager" | "employee";

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  department?: string;
  title?: string;
}

export interface Employee {
  id: string;
  name: string;
  title: string;
  department: string;
  managerId: string;
  nineBoxPosition: { performance: number; potential: number };
  competencies: {
    [key: string]: number;
  };
  targetRole: string;
  overallProgress: number;
  idpStatus: "draft" | "manager_approved" | "committee_approved" | "pending_revision";
  readinessLevel: "Ready Now" | "1 Year" | "3 Years";
  appraisalScores: {
    qualityOfWork: number;
    dependability: number;
    initiative: number;
    collaboration: number;
    leadership: number;
  };
}

export interface IDPActivity {
  id: string;
  employeeId: string;
  title: string;
  type: "training" | "rotation" | "mentorship" | "project";
  description: string;
  status: "not_started" | "in_progress" | "completed";
  progress: number;
  targetDate: string;
  remarks?: string;
}

export interface SuccessProfile {
  id: string;
  roleTitle: string;
  requiredCompetencies: {
    [key: string]: number;
  };
  functionalSkills: string[];
  geographicalExperience: string[];
  minimumExperience: number;
}

// Mock Users
export const mockUsers: User[] = [
  { id: "1", name: "HR Admin", role: "hr", email: "hr@powergrid.com" },
  { id: "2", name: "Rajesh Kumar", role: "manager", email: "rajesh@powergrid.com", department: "Operations", title: "Department Head" },
  { id: "3", name: "Anya Sharma", role: "employee", email: "anya@powergrid.com", department: "Operations", title: "Senior Engineer" },
];

// Mock Employees
export const mockEmployees: Employee[] = [
  {
    id: "3",
    name: "Anya Sharma",
    title: "Senior Engineer",
    department: "Operations",
    managerId: "2",
    nineBoxPosition: { performance: 3, potential: 3 },
    competencies: {
      "Strategic Thinking": 7,
      "Leadership": 6,
      "Financial Acumen": 5,
      "Operational Excellence": 8,
      "Stakeholder Management": 6,
      "Digital Transformation": 4,
    },
    targetRole: "General Manager",
    overallProgress: 65,
    idpStatus: "manager_approved",
    readinessLevel: "1 Year",
    appraisalScores: {
      qualityOfWork: 4,
      dependability: 5,
      initiative: 4,
      collaboration: 4,
      leadership: 3,
    },
  },
  {
    id: "4",
    name: "Priya Desai",
    title: "Manager, Finance",
    department: "Finance",
    managerId: "2",
    nineBoxPosition: { performance: 3, potential: 2 },
    competencies: {
      "Strategic Thinking": 6,
      "Leadership": 7,
      "Financial Acumen": 9,
      "Operational Excellence": 6,
      "Stakeholder Management": 7,
      "Digital Transformation": 5,
    },
    targetRole: "CFO",
    overallProgress: 45,
    idpStatus: "committee_approved",
    readinessLevel: "3 Years",
    appraisalScores: {
      qualityOfWork: 4,
      dependability: 4,
      initiative: 4,
      collaboration: 5,
      leadership: 4,
    },
  },
  {
    id: "5",
    name: "Vikram Singh",
    title: "Senior Project Manager",
    department: "Operations",
    managerId: "2",
    nineBoxPosition: { performance: 2, potential: 3 },
    competencies: {
      "Strategic Thinking": 5,
      "Leadership": 8,
      "Financial Acumen": 4,
      "Operational Excellence": 7,
      "Stakeholder Management": 8,
      "Digital Transformation": 6,
    },
    targetRole: "Director of Operations",
    overallProgress: 30,
    idpStatus: "draft",
    readinessLevel: "1 Year",
    appraisalScores: {
      qualityOfWork: 3,
      dependability: 4,
      initiative: 5,
      collaboration: 4,
      leadership: 4,
    },
  },
  {
    id: "6",
    name: "Meera Patel",
    title: "Technical Lead",
    department: "Engineering",
    managerId: "2",
    nineBoxPosition: { performance: 3, potential: 3 },
    competencies: {
      "Strategic Thinking": 6,
      "Leadership": 5,
      "Financial Acumen": 4,
      "Operational Excellence": 9,
      "Stakeholder Management": 5,
      "Digital Transformation": 9,
    },
    targetRole: "VP Engineering",
    overallProgress: 55,
    idpStatus: "manager_approved",
    readinessLevel: "1 Year",
    appraisalScores: {
      qualityOfWork: 5,
      dependability: 4,
      initiative: 4,
      collaboration: 4,
      leadership: 3,
    },
  },
  {
    id: "7",
    name: "Amit Verma",
    title: "Operations Manager",
    department: "Operations",
    managerId: "2",
    nineBoxPosition: { performance: 2, potential: 2 },
    competencies: {
      "Strategic Thinking": 5,
      "Leadership": 5,
      "Financial Acumen": 5,
      "Operational Excellence": 6,
      "Stakeholder Management": 6,
      "Digital Transformation": 4,
    },
    targetRole: "Senior Manager",
    overallProgress: 20,
    idpStatus: "draft",
    readinessLevel: "3 Years",
    appraisalScores: {
      qualityOfWork: 3,
      dependability: 3,
      initiative: 3,
      collaboration: 4,
      leadership: 3,
    },
  },
];

// Mock IDP Activities
export const mockIDPActivities: IDPActivity[] = [
  {
    id: "a1",
    employeeId: "3",
    title: "Advanced Financial Modelling Course",
    type: "training",
    description: "Complete certification in advanced financial modelling and analysis",
    status: "completed",
    progress: 100,
    targetDate: "2025-06-30",
  },
  {
    id: "a2",
    employeeId: "3",
    title: "Lead Q4 Digital Transformation Project",
    type: "project",
    description: "Lead the digital transformation initiative for the operations division",
    status: "in_progress",
    progress: 65,
    targetDate: "2025-12-31",
    remarks: "Project is on track. Completed phase 1 and 2.",
  },
  {
    id: "a3",
    employeeId: "3",
    title: "Mentorship with GM",
    type: "mentorship",
    description: "Monthly mentorship sessions with current General Manager",
    status: "in_progress",
    progress: 50,
    targetDate: "2026-03-31",
  },
  {
    id: "a4",
    employeeId: "3",
    title: "Strategic Leadership Workshop",
    type: "training",
    description: "Attend executive leadership program at IIM",
    status: "not_started",
    progress: 0,
    targetDate: "2026-06-30",
  },
  {
    id: "a5",
    employeeId: "3",
    title: "Cross-functional Rotation - Finance",
    type: "rotation",
    description: "3-month rotation in Finance department",
    status: "not_started",
    progress: 0,
    targetDate: "2026-09-30",
  },
];

// Mock Success Profiles
export const mockSuccessProfiles: SuccessProfile[] = [
  {
    id: "sp1",
    roleTitle: "General Manager",
    requiredCompetencies: {
      "Strategic Thinking": 8,
      "Leadership": 8,
      "Financial Acumen": 7,
      "Operational Excellence": 8,
      "Stakeholder Management": 9,
      "Digital Transformation": 7,
    },
    functionalSkills: ["Operations Management", "P&L Management", "Team Leadership", "Strategic Planning"],
    geographicalExperience: ["North", "South", "West"],
    minimumExperience: 15,
  },
  {
    id: "sp2",
    roleTitle: "CFO",
    requiredCompetencies: {
      "Strategic Thinking": 9,
      "Leadership": 8,
      "Financial Acumen": 10,
      "Operational Excellence": 7,
      "Stakeholder Management": 9,
      "Digital Transformation": 6,
    },
    functionalSkills: ["Financial Planning", "Risk Management", "Compliance", "Investment Strategy"],
    geographicalExperience: ["Pan-India"],
    minimumExperience: 20,
  },
  {
    id: "sp3",
    roleTitle: "Director of Operations",
    requiredCompetencies: {
      "Strategic Thinking": 7,
      "Leadership": 9,
      "Financial Acumen": 6,
      "Operational Excellence": 9,
      "Stakeholder Management": 8,
      "Digital Transformation": 7,
    },
    functionalSkills: ["Process Optimization", "Team Management", "Project Execution", "Quality Control"],
    geographicalExperience: ["Regional"],
    minimumExperience: 12,
  },
];

// Get employee by ID
export const getEmployeeById = (id: string): Employee | undefined => {
  return mockEmployees.find((emp) => emp.id === id);
};

// Get activities by employee ID
export const getActivitiesByEmployeeId = (employeeId: string): IDPActivity[] => {
  return mockIDPActivities.filter((activity) => activity.employeeId === employeeId);
};

// Get success profile by role title
export const getSuccessProfileByRole = (roleTitle: string): SuccessProfile | undefined => {
  return mockSuccessProfiles.find((profile) => profile.roleTitle === roleTitle);
};

// Get employees by manager ID
export const getEmployeesByManagerId = (managerId: string): Employee[] => {
  return mockEmployees.filter((emp) => emp.managerId === managerId);
};
