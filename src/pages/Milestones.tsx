import StatusBadge from '../components/StatusBadge';
import { milestones } from '../data/mockData';

export default function Milestones() {
  return (
    <div>
      <div className="page-header">
        <h2>Milestones</h2>
      </div>

      <div className="list-grid">
        {milestones.map((milestone) => (
          <div className="card" key={milestone.id}>
            <h3>{milestone.name}</h3>
            <p>Target Date: {milestone.targetDate}</p>
            <p>Status: <StatusBadge status={milestone.status} /></p>
            <p>{milestone.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}