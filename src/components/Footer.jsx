import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <Link className="footer-brand" to="/">
            The Realty Group
          </Link>

          <p>
            Helping buyers and sellers throughout Southwest Virginia find the perfect place to call home.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/properties">Properties</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} The Realty Group. Portfolio demonstration project.</p>
      </div>
    </footer>
  );
}

export default Footer;