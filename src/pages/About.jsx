import React from 'react';

const About = () => {
    // Defined Colors
    const cyberTeal = '#00e0ff'; // Bright accent color (Used for the glow and key text)
    const digitalGold = '#ffc107'; // Secondary accent color (Used for emphasis and buttons)
    const deepBlue = '#111317'; // New primary background deep color (Slightly darker for contrast)
    const darkCard = '#1e2024'; // Background color for internal cards
    const secondaryAccent = '#00a35e'; // New green accent for specific text/icons
    
    // Placeholder Data (Updated where necessary)
    const teamMembers = [
        // Updated bios and roles to be more impactful
        { name: "Marcus Chen", title: "Chief Security Officer", bio: "20+ years in cybersecurity with expertise in threat intelligence and enterprise security architecture. Former CISO at Fortune 500 companies.", img: "https://placehold.co/100x100/343a40/ffffff?text=MC" },
        { name: "Dr. Sarah Mitchell", title: "Director of Threat Research", bio: "Ph.D. in Computer Science specializing in malware analysis and zero-day vulnerabilities. Published researcher with 50+ security papers.", img: "https://placehold.co/100x100/343a40/ffffff?text=SM" },
        // Adding two more for the grid
        { name: "Alex Vexler", title: "Head of Cloud Security", bio: "Certified AWS and Azure security expert leading our multi-cloud protection strategies and governance programs.", img: "https://placehold.co/100x100/343a40/ffffff?text=AV" },
        { name: "Liana Wu", title: "Incident Response Lead", bio: "Certified GIAC GCIH. Specialized in rapid containment, forensic analysis, and comprehensive recovery planning.", img: "https://placehold.co/100x100/343a40/ffffff?text=LW" }
    ];

    const services = [
        { 
            title: "Penetration Testing", 
            description: "Comprehensive security assessments that identify vulnerabilities before attackers do.",
            icon: "fas fa-search",
            content: "Our certified ethical hackers simulate real-world attacks across networks, applications, and cloud infrastructure to identify hidden weaknesses before adversaries can exploit them. We deliver clear, prioritized, and actionable remediation reports."
        },
        { 
            title: "Managed Security Services", 
            description: "24/7 monitoring and protection for your entire digital infrastructure.",
            icon: "fas fa-shield-alt",
            content: "We provide 24/7/365 monitoring, threat detection, and proactive defense using cutting-edge SIEM and SOAR technologies. Offload your security burden and ensure constant, expert protection."
        },
        { 
            title: "Incident Response", 
            description: "Rapid response to security breaches with expert containment and recovery.",
            icon: "fas fa-exclamation-triangle",
            content: "When the worst happens, our rapid-response team contains the breach, eradicates the threat, and conducts a thorough digital forensic analysis to determine the root cause, minimizing downtime and legal exposure."
        }
    ];
    
    // Inline CSS for Gradient Text 
    const getGradientText = (text, startColor, endColor) => ({
        // This makes the text bold and sets the font color
        fontWeight: 'bold', 
        fontSize: 'inherit',
        
        // Webkit properties for gradient text
        backgroundImage: `linear-gradient(90deg, ${startColor}, ${endColor})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block' // Important for the gradient clip to work
    });

    // Custom Neon Glow Effect for the 'Mwaah' Card
    const mwaahCardStyle = {
        background: 'linear-gradient(135deg, #1e2024, #111317)',
        border: `1px solid ${cyberTeal}`,
        borderRadius: '1.5rem',
        padding: '3rem',
        boxShadow: `0 0 50px rgba(0, 224, 255, 0.5), inset 0 0 20px rgba(0, 224, 255, 0.2)`
    };

    return (
        <div className="text-white" style={{ backgroundColor: deepBlue }}>
            <main>
                {/* --- 1. Hero/Intro Section (Matches a1.jpg) --- */}
                <section 
                    className="py-6 py-lg-7 text-center position-relative overflow-hidden" 
                    style={{ 
                        // Using uploaded image for background
                        background: `url(uploaded:a1.jpg-1069ca10-6204-4791-b716-fbaca65220c3) no-repeat center center`, 
                        backgroundSize: 'cover',
                        height: '70vh',
                        minHeight: '500px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: `2px solid ${darkCard}`
                    }}
                >
                    {/* Dark Overlay for contrast */}
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
                    
                    <div className="container position-relative z-1">
                        {/* Shield Icon */}
                        <i className="fas fa-shield-alt fa-3x mb-4" style={{ color: cyberTeal, textShadow: `0 0 15px ${cyberTeal}` }}></i>

                        {/* Defending the Digital Frontier with Gradient Text */}
                        <h1 className="display-2 fw-bolder mb-3 text-uppercase">
                            Defending the 
                            <span style={getGradientText("Digital-", secondaryAccent, cyberTeal)}> Digital-</span>

                            <span style={getGradientText("Frontier", digitalGold, cyberTeal)}> -Frontier</span>
                        </h1>
                        <p className="lead fw-light text-white-50 mx-auto mb-5" style={{ maxWidth: '800px' }}>
                            Elite cybersecurity expertise protecting your digital assets with precision, vigilance, and unwavering commitment to excellence.
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#contact" className="btn btn-lg fw-bold rounded-3 px-5 py-3" 
                                style={{ 
                                    background: `linear-gradient(90deg, ${cyberTeal}, ${secondaryAccent})`, 
                                    color: deepBlue,
                                    border: 'none'
                                }}
                            >
                                Get Protected Now <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                            <a href="#mission" className="btn btn-lg fw-bold rounded-3 px-5 py-3" 
                                style={{ 
                                    background: 'transparent', 
                                    color: cyberTeal, 
                                    border: `2px solid ${cyberTeal}` 
                                }}
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- 2. Mission & Vision (Matches a2.PNG) --- */}
                <section id="mission" className="py-5 py-lg-7" style={{ backgroundColor: deepBlue }}>
                    <div className="container">
                        <h2 className="text-center display-5 fw-bolder mb-3">
                            Our 
                            <span style={getGradientText("Covenant", digitalGold, cyberTeal)}> Covenant </span>
                            of Trust
                        </h2>
                        <p className="text-center lead text-white-50 mb-5">
                            Why we exist and where we're heading
                        </p>

                        <div className="row justify-content-center g-4">
                            {/* Mission Card */}
                            <div className="col-12 col-md-6">
                                <div className="p-4 p-md-5 rounded-4 shadow-lg h-100" 
                                    style={{ background: darkCard, border: `1px solid ${darkCard}` }}
                                >
                                    <h3 className="h3 fw-bold mb-3 d-flex align-items-center" style={{ color: cyberTeal }}>
                                        <i className="fas fa-bullseye me-3 p-2 rounded-circle" style={{ border: `2px solid ${cyberTeal}`, fontSize: '1.2rem' }}></i>
                                        Our Mission
                                    </h3>
                                    <p className="lead text-white-75">
                                        To safeguard the digital infrastructure of organizations worldwide through cutting-edge security solutions, proactive threat intelligence, and unwavering dedication to protecting what matters most.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Vision Card */}
                            <div className="col-12 col-md-6">
                                <div className="p-4 p-md-5 rounded-4 shadow-lg h-100" 
                                    style={{ background: darkCard, border: `1px solid ${darkCard}` }}
                                >
                                    <h3 className="h3 fw-bold mb-3 d-flex align-items-center" style={{ color: digitalGold }}>
                                        <i className="fas fa-eye me-3 p-2 rounded-circle" style={{ border: `2px solid ${digitalGold}`, fontSize: '1.2rem' }}></i>
                                        Our Vision
                                    </h3>
                                    <ul className="list-unstyled text-white-75">
                                        <li className="mb-2"><span style={{ color: cyberTeal }}>•</span> Become the global standard for cybersecurity excellence</li>
                                        <li className="mb-2"><span style={{ color: cyberTeal }}>•</span> Empower organizations with proactive defense strategies</li>
                                        <li className="mb-2"><span style={{ color: cyberTeal }}>•</span> Foster a cyber-resilient future for all</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 3. The "Mwaah" Factor Card (Matches a3.jpg) --- */}
                <section className="py-5 py-lg-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10">
                                <div className="text-center" style={mwaahCardStyle}>
                                    <h2 className="display-6 fw-bold mb-4" style={getGradientText("The Mwaah Factor", secondaryAccent, cyberTeal)}>
                                        The Mwaah Factor
                                    </h2>
                                    <p className="lead text-white-75 mx-auto mb-4" style={{ maxWidth: '850px' }}>
                                        We don't just respond to threats—we anticipate them. Our proactive approach combines military-grade security protocols with innovative threat intelligence, ensuring your digital assets remain impenetrable. When others see complexity, we see opportunity to excel.
                                    </p>
                                    <p className="fw-bold fs-5" style={{ color: digitalGold }}>
                                        <i className="fas fa-star me-2"></i> Excellence is our standard, not our goal <i className="fas fa-star ms-2"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 4. Our Expertise (Leadership Grid - Matches a4.PNG) --- */}
                <section className="py-5 py-lg-7" style={{ backgroundColor: deepBlue }}>
                    <div className="container">
                        <h2 className="text-center display-5 fw-bolder mb-3">
                            The 
                            <span style={getGradientText("Guardians", cyberTeal, digitalGold)}> Guardians </span>
                            Behind the Code
                        </h2>
                        <p className="text-center lead text-white-50 mb-5">
                            Meet the elite team protecting your digital frontier
                        </p>
                        
                        <div className="row g-4 justify-content-center">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="col-12 col-sm-6 col-lg-3">
                                    <div className="card h-100 border-0 shadow-sm rounded-4" style={{ backgroundColor: darkCard }}>
                                        <div className="card-body text-center p-4">
                                            <img 
                                                src={member.img} 
                                                alt={member.name} 
                                                className="rounded-circle mb-3 border border-3"
                                                style={{ borderColor: digitalGold, width: '100px', height: '100px', objectFit: 'cover' }}
                                            />
                                            <h4 className="h5 mb-1 fw-bold text-white">{member.name}</h4>
                                            <p className="mb-3 small fw-medium" style={{ color: cyberTeal }}>{member.title}</p>
                                            <p className="card-text small text-white-50">{member.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- 5. Core Services (Accordion - Matches a5.PNG) --- */}
                <section className="py-5 py-lg-7">
                    <div className="container">
                        <h2 className="text-center display-5 fw-bolder mb-3">
                            Beyond the 
                            <span style={getGradientText("Firewall", secondaryAccent, digitalGold)}> Firewall</span>
                        </h2>
                        <p className="text-center lead text-white-50 mb-5">
                            Comprehensive security services tailored to your unique needs
                        </p>
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="accordion" id="serviceAccordion">
                                    {services.map((service, index) => (
                                        <div key={index} className="accordion-item my-3 rounded-4 overflow-hidden" style={{ border: 'none', backgroundColor: darkCard }}>
                                            <h2 className="accordion-header" id={`heading${index}`}>
                                                <button 
                                                    className={`accordion-button collapsed fw-bold text-white`} 
                                                    type="button" 
                                                    data-bs-toggle="collapse" 
                                                    data-bs-target={`#collapse${index}`} 
                                                    aria-expanded="false" 
                                                    aria-controls={`collapse${index}`}
                                                    style={{ backgroundColor: darkCard, color: 'white', padding: '1.5rem 1.5rem' }}
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <i className={`${service.icon} fa-lg me-4 p-3 rounded-circle`} 
                                                            style={{ 
                                                                color: cyberTeal, 
                                                                backgroundColor: '#2b2e35',
                                                                boxShadow: `0 0 10px rgba(0, 224, 255, 0.3)`
                                                            }}
                                                        ></i>
                                                        <div>
                                                            <div className="h5 mb-1 fw-bold">{service.title}</div>
                                                            <div className="small text-white-50 fw-normal">{service.description}</div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div 
                                                id={`collapse${index}`} 
                                                className="accordion-collapse collapse" 
                                                aria-labelledby={`heading${index}`} 
                                                data-bs-parent="#serviceAccordion"
                                            >
                                                <div className="accordion-body text-white-75" style={{ backgroundColor: deepBlue }}>
                                                    {service.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* --- 6. Our Pledge: Precision and Integrity (Matches a6.PNG) --- */}
                <section className="py-5 py-lg-7" style={{ backgroundColor: darkCard }}>
                    <div className="container text-center">
                        <h2 className="display-5 fw-bolder mb-3">
                            Our Pledge: 
                            <span style={getGradientText("Precision", secondaryAccent, cyberTeal)}> Precision </span>
                            and 
                            <span style={getGradientText("Integrity", digitalGold, secondaryAccent)}> Integrity</span>
                        </h2>
                        <p className="lead text-white-50 mb-5">
                            Every engagement is backed by our commitment to excellence
                        </p>

                        <div className="row g-4 justify-content-center text-center">
                            {/* Feature 1: Confidentiality */}
                            <div className="col-12 col-md-4 p-4">
                                <div className="p-3 d-inline-block rounded-circle mb-3" style={{ border: `3px solid ${cyberTeal}` }}>
                                    <i className="fas fa-check fa-2x" style={{ color: cyberTeal }}></i>
                                </div>
                                <h3 className="h4 fw-bold mb-2 text-white">100% Confidentiality</h3>
                                <p className="text-white-50">Your data and security posture remain strictly confidential under NDAs</p>
                            </div>
                            
                            {/* Feature 2: Ethical Standards */}
                            <div className="col-12 col-md-4 p-4">
                                <div className="p-3 d-inline-block rounded-circle mb-3" style={{ border: `3px solid ${digitalGold}` }}>
                                    <i className="fas fa-check fa-2x" style={{ color: digitalGold }}></i>
                                </div>
                                <h3 className="h4 fw-bold mb-2 text-white">Ethical Standards</h3>
                                <p className="text-white-50">All testing follows strict ethical guidelines and industry best practices</p>
                            </div>

                            {/* Feature 3: Proven Results */}
                            <div className="col-12 col-md-4 p-4">
                                <div className="p-3 d-inline-block rounded-circle mb-3" style={{ border: `3px solid ${cyberTeal}` }}>
                                    <i className="fas fa-check fa-2x" style={{ color: cyberTeal }}></i>
                                </div>
                                <h3 className="h4 fw-bold mb-2 text-white">Proven Results</h3>
                                <p className="text-white-50">Decades of combined experience protecting enterprises worldwide</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* --- 7. Final Contact CTA (Matches a7.PNG) --- */}
                <section className="py-5 py-lg-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10">
                                <div className="p-5 rounded-4 text-center" 
                                    style={{
                                        background: 'linear-gradient(135deg, #1e2024, #2b2e35)', // Dark subtle gradient
                                        border: `1px solid ${darkCard}`,
                                        boxShadow: `0 0 25px rgba(0, 0, 0, 0.5)`
                                    }}
                                >
                                    <h2 className="display-6 fw-bold mb-3">
                                        Ready to Fortify Your 
                                        <span style={getGradientText("Digital Defenses", secondaryAccent, digitalGold)}> Digital Defenses</span>
                                        ?
                                    </h2>
                                    <p className="lead text-white-50 mb-5">
                                        Let's discuss how our expertise can protect your organization from evolving cyber threats.
                                    </p>
                                    
                                    <div className="d-grid gap-3 d-md-flex justify-content-center">
                                        <a href="#schedule" className="btn btn-lg fw-bold rounded-3 px-5 py-3" 
                                            style={{ 
                                                background: `linear-gradient(90deg, ${cyberTeal}, ${secondaryAccent})`, 
                                                color: deepBlue,
                                                border: 'none',
                                                boxShadow: `0 4px 15px rgba(0, 224, 255, 0.4)`
                                            }}
                                        >
                                            <i className="fas fa-calendar-alt me-2"></i> Schedule Consultation
                                        </a>
                                        <a href="tel:555-29237-99" className="btn btn-lg fw-bold rounded-3 px-5 py-3" 
                                            style={{ 
                                                background: 'transparent', 
                                                color: cyberTeal, 
                                                border: `2px solid ${cyberTeal}` 
                                            }}
                                        >
                                            <i className="fas fa-phone me-2"></i> Call: (555) CYBER-99
                                        </a>
                                    </div>
                                    <p className="mt-3 small text-white-50">Available 24/7 for emergency security incidents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Footer Placeholder --- */}
                <footer className="text-center py-3 small" style={{ backgroundColor: '#0e1013' }}>
                    &copy; 2025 Cyber Guard Agencies. All rights reserved.
                </footer>
            </main>
            
            {/* NOTE: Ensure Bootstrap JS and Font Awesome are included in the main HTML file 
            for the accordion, icons, and hover effects to function correctly. */}
        </div>
    );
};

export default About;