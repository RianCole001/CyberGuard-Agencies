import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// 💡 Import the specific module (Collapse) directly from bootstrap
import { Collapse } from 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// NOTE: We no longer need to import the full bundle JS:
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function Navbar({ logo }) {
  const location = useLocation();
  // 1. Use useRef to hold a reference to the DOM element and the Bootstrap Collapse instance
  const navbarCollapseRef = useRef(null);
  const bsCollapseInstanceRef = useRef(null);
  // 2. Use useState to track if the navbar is currently open/expanded
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Initialize the Bootstrap Collapse instance once the component mounts
  useEffect(() => {
    // Ensure the DOM element is available and the Bootstrap Collapse class is imported
    if (navbarCollapseRef.current) {
      // Create the Bootstrap Collapse instance
      bsCollapseInstanceRef.current = new Collapse(navbarCollapseRef.current, {
        toggle: false // We will control the toggling via React
      });
      // Set the initial state
      setIsNavExpanded(navbarCollapseRef.current.classList.contains('show'));
    }

    // Cleanup function: destroy the instance when the component unmounts
    return () => {
      if (bsCollapseInstanceRef.current) {
        bsCollapseInstanceRef.current.dispose();
      }
    };
  }, []); // Run only once on mount

  // Watch for route changes (location.pathname) to automatically close the navbar
  useEffect(() => {
    const instance = bsCollapseInstanceRef.current;
    if (instance && isNavExpanded) {
      instance.hide();
      setIsNavExpanded(false); // Update React state
    }
  }, [location.pathname]);

  // Handle manual toggling of the navbar
  const handleTogglerClick = () => {
    const instance = bsCollapseInstanceRef.current;
    if (instance) {
      // Toggle the Bootstrap instance
      instance.toggle();
      // Update the React state immediately (Collapse component handles the visual change)
      setIsNavExpanded(prev => !prev); 
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
          onClick={handleTogglerClick} // 💡 Use React onClick handler
          aria-controls="navbarNav"
          aria-expanded={isNavExpanded} // 💡 Controlled by React state
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        {/* 💡 Set the ref here to get the DOM element */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses">Cs-Bootcamp</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

 <li className="nav-item">
              <Link className="nav-link" to="/about">Library</Link>
            </li>
            {/* Dropdown example */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown" // Keep this, as it controls the dropdown sub-component
                aria-expanded="false"
              >
                Courses
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
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