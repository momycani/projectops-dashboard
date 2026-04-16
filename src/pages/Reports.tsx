import StatusBadge from '../components/StatusBadge';
import { weeklyReport, projectSummary, risks, tasks } from '../data/mockData';

export default function Reports() {
  const blockedTasks = tasks.filter((task) => task.status === 'Blocked').length;
  const completedTasks = tasks.filter((task) => task.status === 'Done').length;

  return (
    <div>
      <div className="page-header">
        <div>
          <h2>Weekly Status Report</h2>
          <p className="subtext">
            Executive summary of delivery progress, risks, and next actions
          </p>
        </div>
        <StatusBadge status={weeklyReport.overallStatus} />
      </div>

      <div className="summary-grid">
        <div className="card summary-card">
          <p>Week Of</p>
          <h2>{weeklyReport.weekOf}</h2>
        </div>

        <div className="card summary-card">
          <p>Overall Progress</p>
          <h2>{projectSummary.percentComplete}%</h2>
        </div>

        <div className="card summary-card">
          <p>Completed Tasks</p>
          <h2>{completedTasks}</h2>
        </div>

        <div className="card summary-card">
          <p>Blocked Tasks</p>
          <h2>{blockedTasks}</h2>
        </div>
      </div>

      <div className="reports-grid">
        <section className="card report-section">
          <h3>Accomplishments</h3>
          <ul>
            {weeklyReport.accomplishments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card report-section">
          <h3>Blockers</h3>
          <ul>
            {weeklyReport.blockers.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card report-section">
          <h3>Next Steps</h3>
          <ul>
            {weeklyReport.nextSteps.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card report-section">
          <h3>Open Risks</h3>
          <ul>
            {risks.map((risk) => (
              <li key={risk.id}>
                <strong>{risk.risk}</strong>
                <br />
                <span className="report-meta">
                  Impact: {risk.impact} | Likelihood: {risk.likelihood}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}