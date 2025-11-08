import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../assets/ai.png'; 
import './heroStyles.css'; 

const Hero = () => {
  return (
    <section className="hero-section position-relative">
      {/* Background Image */}
      <div 
        className="hero-background position-absolute w-100 h-100"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1 }}
      ></div>

      {/* Content Overlay */}
      <div className="hero-content text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="hero-headline mb-3">
          Master Digital Warfare. <br />
          Become a Cyber Guard and Professional Hacker.
        </h1>
        <p className="hero-subtext mb-4 px-3 px-md-0">
          Elite training in ethical hacking, advanced threat detection, and defense architecture. Learn from industry leaders with real-world, hands-on labs.
        </p>

        {/* Responsive Button Group */}
        <div className="hero-cta-group d-flex flex-column flex-sm-row gap-3">
          <a href="#courses" className="btn btn-primary btn-lg">
            Explore Courses
          </a>
          <a href="#about" className="btn btn-secondary btn-lg">
            View Bootcamps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
