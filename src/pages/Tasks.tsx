import { useMemo, useState } from 'react';
import StatusBadge from '../components/StatusBadge';
import { tasks } from '../data/mockData';
import type { TaskStatus, Priority } from '../types';

export default function Tasks() {
  const [statusFilter, setStatusFilter] = useState<'All' | TaskStatus>('All');
  const [priorityFilter, setPriorityFilter] = useState<'All' | Priority>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesStatus =
        statusFilter === 'All' || task.status === statusFilter;

      const matchesPriority =
        priorityFilter === 'All' || task.priority === priorityFilter;

      const matchesSearch =
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.owner.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesStatus && matchesPriority && matchesSearch;
    });
  }, [statusFilter, priorityFilter, searchTerm]);

  return (
    <div>
      <div className="page-header">
        <div>
          <h2>Task Tracker</h2>
          <p className="subtext">
            Track work by status, priority, and owner
          </p>
        </div>
      </div>

      <div className="card filter-bar">
        <div className="filter-group">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search task or owner"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="statusFilter">Status</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value as 'All' | TaskStatus)
            }
          >
            <option value="All">All</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Blocked">Blocked</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="priorityFilter">Priority</label>
          <select
            id="priorityFilter"
            value={priorityFilter}
            onChange={(e) =>
              setPriorityFilter(e.target.value as 'All' | Priority)
            }
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="task-count">
          <span>{filteredTasks.length}</span>
          <p>Tasks Shown</p>
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Owner</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.owner}</td>
                <td>{task.priority}</td>
                <td>
                  <StatusBadge status={task.status} />
                </td>
                <td>{task.dueDate}</td>
              </tr>
            ))}

            {filteredTasks.length === 0 && (
              <tr>
                <td colSpan={5} className="empty-state">
                  No tasks match your current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}