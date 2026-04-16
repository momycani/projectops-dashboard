import type { Milestone, ProjectSummary, Risk, Task, WeeklyReport } from '../types';

export const projectSummary: ProjectSummary = {
  projectName: 'Website Redesign & Client Portal Launch',
  status: 'On Track',
  percentComplete: 68,
  nextMilestone: 'QA Sign-Off',
  openTasks: 7,
  openRisks: 3,
};

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Finalize homepage wireframes',
    owner: 'Design Team',
    priority: 'High',
    status: 'Done',
    dueDate: '2026-04-10',
  },
  {
    id: 2,
    title: 'Build portal login page',
    owner: 'Frontend Dev',
    priority: 'High',
    status: 'In Progress',
    dueDate: '2026-04-18',
  },
  {
    id: 3,
    title: 'Validate API error messaging',
    owner: 'QA Team',
    priority: 'Medium',
    status: 'Not Started',
    dueDate: '2026-04-20',
  },
  {
    id: 4,
    title: 'Prepare launch communication plan',
    owner: 'Project Manager',
    priority: 'Medium',
    status: 'Blocked',
    dueDate: '2026-04-22',
  },
];

export const milestones: Milestone[] = [
  {
    id: 1,
    name: 'Design Approval',
    targetDate: '2026-04-05',
    status: 'Completed',
    notes: 'Approved by stakeholders.',
  },
  {
    id: 2,
    name: 'Frontend Build Complete',
    targetDate: '2026-04-18',
    status: 'On Track',
    notes: 'Core pages are in progress.',
  },
  {
    id: 3,
    name: 'QA Sign-Off',
    targetDate: '2026-04-25',
    status: 'On Track',
    notes: 'Dependent on development completion.',
  },
];

export const risks: Risk[] = [
  {
    id: 1,
    risk: 'QA timeline may slip due to late feature completion',
    impact: 'High',
    likelihood: 'Medium',
    mitigation: 'Prioritize critical features and begin QA in parallel where possible.',
    owner: 'Project Manager',
  },
  {
    id: 2,
    risk: 'Stakeholder feedback could delay final approval',
    impact: 'Medium',
    likelihood: 'Medium',
    mitigation: 'Schedule review checkpoints before final sign-off.',
    owner: 'Project Manager',
  },
];

export const weeklyReport: WeeklyReport = {
  weekOf: '2026-04-14',
  overallStatus: 'On Track',
  accomplishments: [
    'Completed homepage wireframes',
    'Started portal login page development',
    'Aligned stakeholders on revised QA schedule',
  ],
  blockers: [
    'Launch communication content pending approval',
  ],
  nextSteps: [
    'Complete login page',
    'Begin QA test cases',
    'Finalize launch communication plan',
  ],
};

export const projectOverview = {
  objective:
    'Launch a redesigned public website and client portal that improves user experience, streamlines access to account resources, and supports a more efficient customer journey.',

  businessProblem:
    'The current website experience is outdated, difficult to navigate, and does not provide a centralized portal for clients to access important information or services.',

  targetUsers: [
    'Prospective customers evaluating services',
    'Existing clients accessing account resources',
    'Internal support teams assisting customers',
  ],

  inScope: [
    'Public website redesign',
    'Client portal login experience',
    'Navigation and information architecture updates',
    'QA testing and launch readiness tracking',
  ],

  outOfScope: [
    'Backend platform replacement',
    'CRM migration',
    'Post-launch analytics expansion',
  ],

  stakeholders: [
    {
      name: 'Executive Sponsor',
      role: 'Approves timeline, budget, and final launch readiness',
    },
    {
      name: 'Design Team',
      role: 'Owns wireframes, UI design, and experience improvements',
    },
    {
      name: 'Engineering Team',
      role: 'Builds website and client portal functionality',
    },
    {
      name: 'QA Team',
      role: 'Validates functionality, defects, and release quality',
    },
    {
      name: 'Customer Support',
      role: 'Provides feedback on usability and support needs',
    },
  ],

  successMetrics: [
    'Launch delivered on schedule',
    'Reduction in navigation-related support requests',
    'Improved client access to portal resources',
    'Stakeholder approval of launch readiness',
  ],
};