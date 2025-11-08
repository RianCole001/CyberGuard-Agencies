import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Components ---
import Navbar from "./components/Nav.jsx"; // Renamed from Navbar to Nav, assuming this is correct
import Hero from "./components/Hero.jsx";
import Roles from "./components/Roles.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Cta from "./components/Cta.jsx";
import CareerPath from "./pages/Careerpath.jsx"; // You've imported this but not used it in a route yet
import Footer from "./components/Footer.jsx";
import logo from "./assets/logo.png";
import Career from "./pages/Career.jsx"; // Assuming this is your Courses page content
import Us from "./components/Us.jsx"; // Assuming this is part of your Home content
import About from "./pages/About.jsx"; // Assuming this is your About page content
import Library from "./pages/Library.jsx"; // Your Library page content

// --- Main Landing Content (Home Page Specific Sections) ---
const HomeContent = () => (
  <>
    <Hero />
    <Roles />
    <Us />
    <Testimonials />
    <Cta />
    {/* The Footer was here, but we'll move it outside for global display */}
  </>
);

function App() {
  return (
    <Router>
      {/* Navbar will always be at the top, outside of specific route content */}
      <Navbar logo={logo} />

      {/* Main content area where different pages will be rendered */}
      <main> 
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<HomeContent />} /> {/* Only HomeContent here */}

          {/* Routes for other specific pages */}
          <Route path="/courses" element={<Career />} /> {/* Using Career.jsx for /courses */}
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />

          {/* If you intend to use CareerPath, you'd add a route for it here.
              For example: <Route path="/career-path" element={<CareerPath />} /> 
          */}
        </Routes>
      </main>

      {/* Footer will always be at the bottom, outside of specific route content */}
      <Footer />
    </Router>
  );
}

export default App;