import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>ProjectOps Dashboard</h1>
      <div className="nav-links">
        <NavLink to="/overview">Overview</NavLink>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/milestones">Milestones</NavLink>
        <NavLink to="/risks">Risks</NavLink>
        <NavLink to="/reports">Reports</NavLink>
      </div>
    </nav>
  );
}