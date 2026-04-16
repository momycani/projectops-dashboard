import StatusBadge from '../components/StatusBadge';
import { milestones } from '../data/mockData';

export default function Milestones() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h2>Milestones</h2>
          <p className="subtext">
            Track major project checkpoints and delivery targets
          </p>
        </div>
      </div>

      <div className="milestone-timeline">
        {milestones.map((milestone) => (
          <div className="milestone-item card" key={milestone.id}>
            <div className="milestone-marker" />

            <div className="milestone-content">
              <div className="milestone-top">
                <div>
                  <h3>{milestone.name}</h3>
                  <p className="milestone-date">{milestone.targetDate}</p>
                </div>

                <StatusBadge status={milestone.status} />
              </div>

              <p className="milestone-notes">{milestone.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}