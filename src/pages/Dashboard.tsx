import SummaryCard from '../components/SummaryCard';
import SectionCard from '../components/SectionCard';
import StatusBadge from '../components/StatusBadge';
import { projectSummary, tasks, risks, milestones } from '../data/mockData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const taskStatusData = [
    { name: 'Done', value: tasks.filter((task) => task.status === 'Done').length },
    { name: 'In Progress', value: tasks.filter((task) => task.status === 'In Progress').length },
    { name: 'Not Started', value: tasks.filter((task) => task.status === 'Not Started').length },
    { name: 'Blocked', value: tasks.filter((task) => task.status === 'Blocked').length },
  ];

  const chartColors = ['#22c55e', '#3b82f6', '#9ca3af', '#f59e0b'];

  return (
    <div>
      <div className="page-header">
        <div>
          <h2>{projectSummary.projectName}</h2>
          <p className="subtext">Project delivery overview and status snapshot</p>
        </div>
        <StatusBadge status={projectSummary.status} />
      </div>

      <div className="summary-grid">
        <SummaryCard title="Percent Complete" value={`${projectSummary.percentComplete}%`} />
        <SummaryCard title="Next Milestone" value={projectSummary.nextMilestone} />
        <SummaryCard title="Open Tasks" value={projectSummary.openTasks} />
        <SummaryCard title="Open Risks" value={projectSummary.openRisks} />
      </div>

      <div className="card progress-card">
        <div className="progress-header">
          <h3>Overall Progress</h3>
          <span>{projectSummary.percentComplete}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${projectSummary.percentComplete}%` }}
          />
        </div>
      </div>

      <div className="dashboard-grid">
        <SectionCard title="Upcoming Milestones">
          <ul>
            {milestones.map((milestone) => (
              <li key={milestone.id}>
                <strong>{milestone.name}</strong> — {milestone.targetDate}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Priority Tasks">
          <ul>
            {tasks.slice(0, 3).map((task) => (
              <li key={task.id}>
                <strong>{task.title}</strong> — {task.status}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Current Risks">
          <ul>
            {risks.map((risk) => (
              <li key={risk.id}>{risk.risk}</li>
            ))}
          </ul>
        </SectionCard>

        <section className="card section-card">
          <h2>Task Status Breakdown</h2>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={taskStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {taskStatusData.map((_,index) => (
                    <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
}