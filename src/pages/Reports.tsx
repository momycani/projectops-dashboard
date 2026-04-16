import StatusBadge from '../components/StatusBadge';
import { weeklyReport } from '../data/mockData';

export default function Reports() {
  return (
    <div>
      <div className="page-header">
        <h2>Weekly Status Report</h2>
        <StatusBadge status={weeklyReport.overallStatus} />
      </div>

      <div className="card">
        <p><strong>Week Of:</strong> {weeklyReport.weekOf}</p>

        <h3>Accomplishments</h3>
        <ul>
          {weeklyReport.accomplishments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Blockers</h3>
        <ul>
          {weeklyReport.blockers.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Next Steps</h3>
        <ul>
          {weeklyReport.nextSteps.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}