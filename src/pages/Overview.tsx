import { projectOverview, projectSummary } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';
import {
  HiOutlineClipboardDocumentList,
  HiOutlineExclamationCircle,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineUserGroup,
} from 'react-icons/hi2';

export default function Overview() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h2>Project Overview</h2>
          <p className="subtext">
            High-level project summary, scope, stakeholders, and success criteria
          </p>
        </div>
        <StatusBadge status={projectSummary.status} />
      </div>

      <div className="overview-grid">
        <section className="card overview-section">
          <div className="section-title-row">
            <HiOutlineClipboardDocumentList className="section-icon" />
            <h3>Project Objective</h3>
          </div>
          <p>{projectOverview.objective}</p>
        </section>

        <section className="card overview-section">
          <div className="section-title-row">
            <HiOutlineExclamationCircle className="section-icon" />
            <h3>Business Problem</h3>
          </div>
          <p>{projectOverview.businessProblem}</p>
        </section>

        <section className="card overview-section">
          <div className="section-title-row">
            <HiOutlineUsers className="section-icon" />
            <h3>Target Users</h3>
          </div>
          <ul>
            {projectOverview.targetUsers.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </section>

        <section className="card overview-section">
          <div className="section-title-row">
            <HiOutlineChartBar className="section-icon" />
            <h3>Success Metrics</h3>
          </div>
          <ul>
            {projectOverview.successMetrics.map((metric, index) => (
              <li key={index}>{metric}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="overview-grid secondary-overview-grid">
        <section className="card overview-section">
          <div className="section-title-row">
            <HiOutlineCheckCircle className="section-icon" />
            <h3>In Scope</h3>
          </div>
          <ul>
            {projectOverview.inScope.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card overview-section">
          <div className="section-title-row">
            <HiOutlineXCircle className="section-icon" />
            <h3>Out of Scope</h3>
          </div>
          <ul>
            {projectOverview.outOfScope.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="card overview-section stakeholder-section">
        <div className="section-title-row">
          <HiOutlineUserGroup className="section-icon" />
          <h3>Stakeholder Summary</h3>
        </div>

        <div className="stakeholder-list">
          {projectOverview.stakeholders.map((stakeholder, index) => (
            <div className="stakeholder-card" key={index}>
              <h4>{stakeholder.name}</h4>
              <p>{stakeholder.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}