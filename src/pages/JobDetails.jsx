// import { useParams } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  /**
   * ┌─────────────────────────────────────────────┐
   * │     Alternative: Without Loader Function    │
   * └─────────────────────────────────────────────┘
   * useParams() extracts all parameters from the URL defined in the Route
   * In this case, :id from path `<Route path=":id" />` will be available as { id: "value_from_url" }
   * IMPORTANT: The parameter name must match exactly!
   * If Route path uses ":id" → destructure as { id }
   * If Route path uses ":userId" → destructure as { userId }
   * If Route path uses ":productId" → destructure as { productId }
   *
   * If you're NOT using a loader function, you can get URL parameters directly:
   * Example:
   * ```
   * import { useParams } from "react-router-dom";
   *
   * const JobDetails = () => {
   *   const { id } = useParams(); // Gets :id from Route path
   *
   *   // Then fetch data manually inside useEffect:
   *   useEffect(() => {
   *     fetch(`http://localhost:8080/jobs/${id}`)
   *       .then(res => res.json())
   *       .then(data => setJobDetails(data));
   *   }, [id]);
   * };
   * ```
   * Loader vs useParams comparison:
   * - Loader: Data fetched BEFORE component renders (better UX)
   * - useParams: Data fetched AFTER component mounts (loading state needed)
   */
  // const { id } = useParams();

  const jobDetails = useLoaderData();

  return (
    <div className="job-details">
      <p>
        <b>Job Title: </b>
        {jobDetails.title}
      </p>
      <p>
        <b>Salary: </b>
        {jobDetails.salary}
      </p>
      <p>
        <b>Location: </b>
        {jobDetails.location}
      </p>
      <p>
        <b>Description: </b>
        Are you passionate about creating exciting and user-friendly websites?
        We're looking for a friendly and talented Web Developer to join out
        vibrant team! In this role, you'all collaborate closely with designers
        and other developers to bring innovate web solutions to life. Your
        expertise will play a crucial role in enhancing our online presence and
        creating engaging use experiences
      </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;

/**
 * ┌────────────────────────────────┐
 * │     Fake API (json-server)     │
 * └────────────────────────────────┘
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
 *
 * ┌─────────────────────────────────┐
 * │     React Router Parameters     │
 * └─────────────────────────────────┘
 * React Router automatically passes route parameters to loader functions via the `params` object.
 * The `params` object contains all dynamic segments from the route path as key-value pairs.
 *
 * Example mapping from Route definition to loader params:
 * - Route path=":id" → params = { id: "actual_url_value" }
 * - Route path=":userId" → params = { userId: "actual_url_value" }
 * - Route path="user/:id/profile/:tab" → params = { id: "123", tab: "settings" }
 */
export const jobDetailsLoader = async ({ params }) => {
  /**
   * IMPORTANT: Parameter name consistency!
   * Since the Route path is ":id" → we destructure { id } from params
   * If Route path was ":jobId" → we would destructure { jobId } from params
   * If Route path was ":userId" → we would destructure { userId } from params
   *
   * The parameter name in the Route path must match the destructured property name.
   */
  const { id } = params;
  const resp = await fetch("http://localhost:8080/jobs/" + id);
  return resp.json();
};
