import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineViewColumns,
  HiOutlineClipboardDocumentList,
  HiOutlineCalendarDays,
  HiOutlineExclamationTriangle,
  HiOutlineDocumentChartBar,
} from 'react-icons/hi2';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>ProjectOps Dashboard</h1>

      <div className="nav-links">
        <NavLink to="/overview">
          <HiOutlineHome className="nav-icon" />
          Overview
        </NavLink>

        <NavLink to="/">
          <HiOutlineViewColumns className="nav-icon" />
          Dashboard
        </NavLink>

        <NavLink to="/tasks">
          <HiOutlineClipboardDocumentList className="nav-icon" />
          Tasks
        </NavLink>

        <NavLink to="/milestones">
          <HiOutlineCalendarDays className="nav-icon" />
          Milestones
        </NavLink>

        <NavLink to="/risks">
          <HiOutlineExclamationTriangle className="nav-icon" />
          Risks
        </NavLink>

        <NavLink to="/reports">
          <HiOutlineDocumentChartBar className="nav-icon" />
          Reports
        </NavLink>
      </div>
    </nav>
  );
}