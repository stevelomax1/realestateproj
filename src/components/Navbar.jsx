import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();

  function closeMenu() {
    setMenuIsOpen(false);
  }

  useEffect(() => {
    const closeMenuTimer = window.setTimeout(closeMenu, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      window.clearTimeout(closeMenuTimer);
    };
  }, [location.pathname]);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
          aria-label="The Realty Group home page"
        >
          <span className="brand-mark" aria-hidden="true">
            TRG
          </span>

          <span className="brand-text">
            The Realty Group
            <small>Serving Virginia</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={
            menuIsOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuIsOpen}
          aria-controls="main-navigation-menu"
          onClick={() => setMenuIsOpen((currentState) => !currentState)}
        >
          {menuIsOpen ? (
            <X aria-hidden="true" />
          ) : (
            <Menu aria-hidden="true" />
          )}
        </button>

        <div
          id="main-navigation-menu"
          className={`nav-menu ${menuIsOpen ? "nav-menu-open" : ""}`}
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
              to={link.path}
              end={link.path === "/"}
            >
              {link.label}
            </NavLink>
          ))}

          <Link className="button button-small" to="/contact">
            Schedule a Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;