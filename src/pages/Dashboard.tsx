import SummaryCard from '../components/SummaryCard';
import SectionCard from '../components/SectionCard';
import StatusBadge from '../components/StatusBadge';
import { projectSummary, tasks, risks, milestones } from '../data/mockData';

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h2>{projectSummary.projectName}</h2>
        <StatusBadge status={projectSummary.status} />
      </div>

      <div className="summary-grid">
        <SummaryCard title="Percent Complete" value={`${projectSummary.percentComplete}%`} />
        <SummaryCard title="Next Milestone" value={projectSummary.nextMilestone} />
        <SummaryCard title="Open Tasks" value={projectSummary.openTasks} />
        <SummaryCard title="Open Risks" value={projectSummary.openRisks} />
      </div>

      <div className="two-column-grid">
        <SectionCard title="Upcoming Milestones">
          <ul>
            {milestones.map((milestone) => (
              <li key={milestone.id}>
                <strong>{milestone.name}</strong> — {milestone.targetDate}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Priority Items">
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
      </div>
    </div>
  );
}