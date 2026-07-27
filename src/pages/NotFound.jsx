import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page-placeholder container">
      <p className="eyebrow">404 Error</p>
      <h1>We couldn’t find that page.</h1>
      <p>The page may have moved or no longer exists.</p>

      <Link className="button" to="/">
        Return Home
      </Link>
    </section>
  );
}

export default NotFound;