import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Components ---
import Navbar from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Roles from "./components/Roles.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Cta from "./components/Cta.jsx";
import CareerPath from "./pages/Careerpath.jsx";
import Footer from "./components/Footer.jsx";
import logo from "./assets/logo.png";
import Career from "./pages/Career.jsx";
import Us from "./components/Us.jsx";

// --- Main Landing Content ---
const HomeContent = () => (
  <>
    <Hero />
    <Roles />
    <Us />
    <Testimonials />
    <Cta />
  </>
);

function App() {
  return (
    <Router>
      {/* Navbar should remain outside Routes */}
      <Navbar logo={logo} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeContent />
              <Footer />
            </>
          }
        />

        <Route path="/courses" element={<Career />} />
        <Route path="/careerpath" element={<CareerPath />} />
      </Routes>
    </Router>
  );
}

export default App;
