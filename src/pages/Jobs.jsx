import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();

  return (
    <div className="jobs">
      {jobsData.map((job) => (
        <Link key={job.id} to={job.id.toString()}>
          <h4>{job.title}</h4>
          <p>{job.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Jobs;

/**
 * Loader function to fetch jobs data from json-server fake API.
 *
 * Reference: https://www.npmjs.com/package/json-server
 *
 * Setup Requirements:
 * 1. Check if installed: `json-server --version`
 * 2. Install globally if needed: `npm install -g json-server`
 * 3. Navigate to your assets folder: `cd <project>/src/assets`
 * 4. Start the fake API server: `npx json-server --watch data.json --port 8080`
 * 5. Stop the server: Ctrl + C
 *
 * API Routes:
 * - Index: http://localhost:8080/
 * - Endpoints: http://localhost:8080/jobs
 *
 * This setup is useful for development and testing with mock data.
 */
export const jobsLoader = async () => {
  const resp = await fetch("http://localhost:8080/jobs");
  return resp.json();
};
