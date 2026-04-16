import StatusBadge from '../components/StatusBadge';
import { tasks } from '../data/mockData';

export default function Tasks() {
  return (
    <div>
      <div className="page-header">
        <h2>Task Tracker</h2>
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
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.owner}</td>
                <td>{task.priority}</td>
                <td><StatusBadge status={task.status} /></td>
                <td>{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}