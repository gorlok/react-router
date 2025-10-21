import { Link } from "react-router-dom";



export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <p>Source: <a href="https://www.youtube.com/watch?v=oTIJunBa6MA" target="_blank">YouTube: React Router, by Cosden Solutions</a></p>
      <Link to={"/profiles"}>Profiles</Link>
      <br />
      <Link to={"/not-existing-page"}>Not Existing Page</Link>
    </div>
  );
}