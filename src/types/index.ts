export type ProjectStatus = 'On Track' | 'At Risk' | 'Delayed' | 'Completed';

export type TaskStatus = 'Not Started' | 'In Progress' | 'Blocked' | 'Done';
export type Priority = 'Low' | 'Medium' | 'High';

export interface ProjectSummary {
  projectName: string;
  status: ProjectStatus;
  percentComplete: number;
  nextMilestone: string;
  openTasks: number;
  openRisks: number;
}

export interface Task {
  id: number;
  title: string;
  owner: string;
  priority: Priority;
  status: TaskStatus;
  dueDate: string;
}

export interface Milestone {
  id: number;
  name: string;
  targetDate: string;
  status: ProjectStatus;
  notes: string;
}

export interface Risk {
  id: number;
  risk: string;
  impact: 'Low' | 'Medium' | 'High';
  likelihood: 'Low' | 'Medium' | 'High';
  mitigation: string;
  owner: string;
}

export interface WeeklyReport {
  weekOf: string;
  overallStatus: ProjectStatus;
  accomplishments: string[];
  blockers: string[];
  nextSteps: string[];
}