import { risks } from '../data/mockData';

export default function Risks() {
  return (
    <div>
      <div className="page-header">
        <h2>Risk Log</h2>
      </div>

      <div className="list-grid">
        {risks.map((risk) => (
          <div className="card" key={risk.id}>
            <h3>{risk.risk}</h3>
            <p><strong>Impact:</strong> {risk.impact}</p>
            <p><strong>Likelihood:</strong> {risk.likelihood}</p>
            <p><strong>Mitigation:</strong> {risk.mitigation}</p>
            <p><strong>Owner:</strong> {risk.owner}</p>
          </div>
        ))}
      </div>
    </div>
  );
}