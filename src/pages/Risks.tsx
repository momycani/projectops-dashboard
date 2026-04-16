import { risks } from '../data/mockData';

export default function Risks() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h2>Risk Register</h2>
          <p className="subtext">
            Monitor delivery risks, assess impact, and track mitigation plans
          </p>
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Risk</th>
              <th>Impact</th>
              <th>Likelihood</th>
              <th>Owner</th>
              <th>Mitigation Plan</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((risk) => (
              <tr key={risk.id}>
                <td>{risk.risk}</td>
                <td>
                  <span className={`risk-pill ${risk.impact.toLowerCase()}`}>
                    {risk.impact}
                  </span>
                </td>
                <td>
                  <span className={`risk-pill ${risk.likelihood.toLowerCase()}`}>
                    {risk.likelihood}
                  </span>
                </td>
                <td>{risk.owner}</td>
                <td>{risk.mitigation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}