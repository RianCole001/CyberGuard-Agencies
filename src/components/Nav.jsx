import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// 💡 Import the specific module (Collapse) directly from bootstrap
import { Collapse } from 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// NOTE: We rely on `bootstrap.bundle.min.js` being imported in `main.jsx`
// for dropdown functionality, so no need to import it here.

function Navbar({ logo }) {
  const location = useLocation();
  const navbarCollapseRef = useRef(null);
  const bsCollapseInstanceRef = useRef(null);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Initialize the Bootstrap Collapse instance once the component mounts
  useEffect(() => {
    if (navbarCollapseRef.current) {
      bsCollapseInstanceRef.current = new Collapse(navbarCollapseRef.current, {
        toggle: false // We will control the toggling via React
      });

      // Event listeners for Bootstrap's Collapse show/hide events
      const collapseElement = navbarCollapseRef.current;
      const handleShow = () => setIsNavExpanded(true);
      const handleHidden = () => setIsNavExpanded(false);

      collapseElement.addEventListener('shown.bs.collapse', handleShow);
      collapseElement.addEventListener('hidden.bs.collapse', handleHidden);

      // Set the initial state based on current collapse status
      setIsNavExpanded(collapseElement.classList.contains('show'));

      // Cleanup function: remove event listeners and destroy the instance
      return () => {
        collapseElement.removeEventListener('shown.bs.collapse', handleShow);
        collapseElement.removeEventListener('hidden.bs.collapse', handleHidden);
        if (bsCollapseInstanceRef.current) {
          bsCollapseInstanceRef.current.dispose();
        }
      };
    }
  }, []); // Run only once on mount

  // Watch for route changes (location.pathname) to automatically close the navbar
  useEffect(() => {
    const instance = bsCollapseInstanceRef.current;
    if (instance && isNavExpanded) {
      instance.hide();
      // setIsNavExpanded will be updated by the 'hidden.bs.collapse' event listener
    }
  }, [location.pathname]);

  // Handle manual toggling of the navbar
  const handleTogglerClick = () => {
    const instance = bsCollapseInstanceRef.current;
    if (instance) {
      instance.toggle();
      // setIsNavExpanded will be updated by the 'shown.bs.collapse' or 'hidden.bs.collapse' event listener
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        {/* Brand with optional logo */}
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          {logo && (
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
              className="d-inline-block align-top"
            />
          )}
          Cyber Guard Academy
        </Link>

        {/* Hamburger toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleTogglerClick} // Use React onClick handler
          aria-controls="navbarNav"
          aria-expanded={isNavExpanded} // Controlled by React state
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        {/* Set the ref here to get the DOM element */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link> {/* Changed from Cs-Bootcamp to Courses for consistency */}
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/library">Library</Link> {/* 💡 Corrected to="/library" */}
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            {/* Dropdown example */}
            {/* If the dropdown title is "More", then Blog/FAQ fit.
                If the dropdown title is "Courses", then the items should be courses.
                I've set it to "More" for now to match Blog/FAQ. Adjust as needed. */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#" // Keep to="#" for dropdown toggle
                role="button"
                data-bs-toggle="dropdown" // This relies on global Bootstrap JS
                aria-expanded="false"
              >
                More {/* 💡 Changed dropdown title */}
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to="/blog">Blog</Link></li> {/* Ensure /blog route exists */}
                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>   {/* Ensure /faq route exists */}
                {/* You can add actual course categories/links here if this dropdown is meant for Courses */}
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-primary ms-2" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;