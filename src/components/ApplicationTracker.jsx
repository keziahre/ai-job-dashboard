import { applications } from "../data/database";

function ApplicationTracker() {
  return (
    <div>
      <h2>Application Tracker</h2>

      <ul>
        {applications.map((app) => (
          <li key={app.id}>
            {app.company} - {app.role} ({app.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApplicationTracker;