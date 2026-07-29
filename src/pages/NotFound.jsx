import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="container not-found-content">
        <p className="not-found-number">404</p>
        <p className="eyebrow">Page not found</p>

        <h1>We couldn’t find that address.</h1>

        <p>
          The page may have moved, the address may be incorrect, or the content
          may no longer be available.
        </p>

        <div className="not-found-actions">
          <Link className="button" to="/">
            <Home size={18} aria-hidden="true" />
            Return Home
          </Link>

          <Link className="text-button" to="/properties">
            <ArrowLeft size={18} aria-hidden="true" />
            Browse Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;