import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">TRG</span>

          <span className="brand-text">
            The Realty Group
            <small>Serving Virginia</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={menuIsOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuIsOpen}
          onClick={() => setMenuIsOpen((currentState) => !currentState)}
        >
          {menuIsOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-menu ${menuIsOpen ? "nav-menu-open" : ""}`}>
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
              to={link.path}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}

          <Link className="button button-small" to="/contact" onClick={closeMenu}>
            Schedule a Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
