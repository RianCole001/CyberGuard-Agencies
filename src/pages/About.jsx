import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const About = () => {
    // --- State for Payment Modal ---
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const handleClose = () => setShowPaymentModal(false);
    const handleShow = () => setShowPaymentModal(true);

    // --- Defined Colors & Styles ---
    const cyberTeal = '#00e0ff'; // Bright neon blue/teal
    const digitalGold = '#ffc107'; // Strong yellow/gold
    const deepBlue = '#111317'; // Primary dark background
    const secondaryAccent = '#00a35e'; // Green accent
    const darkCardBg = '#1a1d23'; // Darker card background for contrast

    // --- Helper function for Gradient Text ---
    const getGradientText = (text, startColor, endColor) => ({
        fontWeight: 'bolder',
        fontSize: 'inherit',
        backgroundImage: `linear-gradient(90deg, ${startColor}, ${endColor})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
    });

    // --- Data for Sections ---
    const teamMembers = [
        { name: "Marcus Chen", title: "Chief Security Officer", bio: "20+ years in cybersecurity with expertise in threat intelligence and enterprise security architecture. Former CISO at Fortune 500 companies.", imageUrl: "https://placehold.co/100x100/36454F/ffffff?text=MC" },
        { name: "Dr. Sarah Mitchell", title: "Director of Threat Research", bio: "Ph.D. in Computer Science specializing in malware analysis and zero-day vulnerabilities. Published researcher with 50+ security papers.", imageUrl: "https://placehold.co/100x100/36454F/ffffff?text=SM" },
        { name: "Alex Vlasenko", title: "Lead Penetration Tester", bio: "OSCP-certified ethical hacker focused on advanced web application and network penetration testing.", imageUrl: "https://placehold.co/100x100/36454F/ffffff?text=AV" },
        { name: "Jane Doe", title: "Cyber Forensics Expert", bio: "Specializes in incident response, digital forensics, and litigation support.", imageUrl: "https://placehold.co/100x100/36454F/ffffff?text=JD" },
    ];

    const services = [
        { id: "collapseOne", title: "Penetration Testing", iconClass: "fa-search", content: "Comprehensive security assessments that identify vulnerabilities before attackers do. Includes network, web application, and social engineering tests." },
        { id: "collapseTwo", title: "Managed Security Services", iconClass: "fa-shield-alt", content: "24/7 monitoring and protection for your entire digital infrastructure. Includes SIEM, threat hunting, and security operations center (SOC) support." },
        { id: "collapseThree", title: "Incident Response", iconClass: "fa-exclamation-triangle", content: "Rapid response to security breaches with expert containment, eradication, and recovery, minimizing damage and downtime." },
    ];

    const commitmentPoints = [
        { icon: "fa-lock", title: "100% Confidentiality", color: cyberTeal, description: "Your data and security posture remain strictly confidential under NDAs." },
        { icon: "fa-gavel", title: "Ethical Standards", color: digitalGold, description: "All testing follows strict ethical guidelines and industry best practices." },
        { icon: "fa-check-circle", title: "Proven Results", color: secondaryAccent, description: "Decades of combined experience protecting enterprises worldwide." },
    ];

    // --- Safaricom Till Number Details ---
    const safaricomTill = {
        number: '555999',
        businessName: 'CYBER GUARD SOLUTIONS',
        purpose: 'Course Booking / Digital Product Purchase'
    };

    // --- Payment Modal Component ---
    const PaymentModal = () => (
        <Modal show={showPaymentModal} onHide={handleClose} centered dialogClassName="modal-dark-style">
            <div style={{ backgroundColor: darkCardBg, color: 'white', borderRadius: '0.5rem', border: `1px solid ${cyberTeal}` }}>
                <Modal.Header closeButton style={{ borderBottom: `1px solid ${cyberTeal}` }}>
                    <Modal.Title className="fw-bold" style={getGradientText("Secure Your Transaction", cyberTeal, digitalGold)}>Secure Your Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <h5 className="mb-3 text-center">M-Pesa Payment Details</h5>
                    
                    <div className="p-3 mb-4 rounded" style={{ backgroundColor: deepBlue, border: `2px dashed ${digitalGold}` }}>
                        <p className="mb-1 text-uppercase small text-white-50">Business Name:</p>
                        <h4 className="fw-bold" style={{ color: digitalGold }}>{safaricomTill.businessName}</h4>
                        <p className="mb-1 text-uppercase small text-white-50">Till Number (Buy Goods):</p>
                        <h2 className="fw-bolder" style={{ color: cyberTeal }}>{safaricomTill.number}</h2>
                    </div>

                    <h6 className="fw-bold mb-2">Instructions:</h6>
                    <ol className="list-unstyled small text-white-75">
                        <li>1. Go to your M-PESA menu.</li>
                        <li>2. Select **"Lipa na M-Pesa"**.</li>
                        <li>3. Select **"Buy Goods and Services"**.</li>
                        <li>4. Enter the **Till Number** provided above.</li>
                        <li>5. Enter the **Amount** for your service/course.</li>
                        <li>6. Enter your M-Pesa PIN to complete.</li>
                    </ol>
                    <p className="mt-3 small text-center text-white-50">
                        *After payment, please send the M-Pesa confirmation message to our support team for immediate activation.*
                    </p>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: `1px solid ${digitalGold}` }}>
                    <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: deepBlue, borderColor: cyberTeal, color: cyberTeal }}>
                        Close
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
    );

    return (
        <div style={{ backgroundColor: deepBlue, color: 'white', fontFamily: 'Inter, sans-serif' }}>
            {/* 1. Hero / Intro Section */}
            <section className="position-relative text-center py-5 overflow-hidden" style={{ background: deepBlue }}>
                <div className="container py-5">
                    <i className="fas fa-shield-alt fa-3x mb-4" style={{ color: cyberTeal, textShadow: '0 0 15px rgba(0, 224, 255, 0.5)' }}></i>

                    <h1 className="display-2 fw-bolder mb-3">
                        Defending the 
                        <span style={getGradientText("Digital", secondaryAccent, digitalGold)}> Digital </span>
                        <span style={{ color: cyberTeal }}> Frontier</span>
                    </h1>
                    <p className="lead mx-auto mb-5 text-white-50" style={{ maxWidth: '800px' }}>
                        Elite cybersecurity expertise protecting your digital assets with precision, vigilance, and unwavering commitment to excellence.
                    </p>

                    <div className="d-flex justify-content-center gap-3">
                        <Button onClick={handleShow} className="btn btn-lg fw-bold rounded-pill px-5"
                            style={{ background: `linear-gradient(90deg, ${cyberTeal}, ${secondaryAccent})`, color: deepBlue, border: 'none', boxShadow: `0 0 20px rgba(0, 224, 255, 0.5)` }}>
                            Get Protected Now <i className="fas fa-arrow-right ms-2"></i>
                        </Button>
                        <a href="#services" className="btn btn-lg fw-bold rounded-pill px-5"
                            style={{ background: 'transparent', color: 'white', border: `2px solid ${digitalGold}` }}>
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* --- */}

            {/* 2. Mission and Vision (Our Covenant of Trust) */}
            <section className="py-5" style={{ backgroundColor: '#1a1d23' }}>
                <div className="container py-4">
                    <h2 className="text-center display-5 fw-bolder mb-2">
                        Our 
                        <span style={getGradientText("Covenant of Trust", cyberTeal, digitalGold)}> Covenant of Trust</span>
                    </h2>
                    <p className="text-center lead mb-5 text-white-50">Why we exist and where we're heading</p>

                    <div className="row g-4 justify-content-center">
                        {/* Mission Card */}
                        <div className="col-md-6">
                            <div className="p-4 rounded-4 h-100 shadow" style={{ backgroundColor: darkCardBg, border: `1px solid ${cyberTeal}` }}>
                                <h3 className="h4 fw-bold mb-3" style={{ color: cyberTeal }}><i className="fas fa-bullseye me-2"></i> Our Mission</h3>
                                <p className="text-white-75">To safeguard the digital infrastructure of organizations worldwide through cutting-edge security solutions, proactive threat intelligence, and unwavering dedication to protecting what matters most.</p>
                            </div>
                        </div>
                        {/* Vision Card */}
                        <div className="col-md-6">
                            <div className="p-4 rounded-4 h-100 shadow" style={{ backgroundColor: darkCardBg, border: `1px solid ${digitalGold}` }}>
                                <h3 className="h4 fw-bold mb-3" style={{ color: digitalGold }}><i className="fas fa-eye me-2"></i> Our Vision</h3>
                                <ul className="list-unstyled text-white-75">
                                    <li className="mb-2"><i className="fas fa-chevron-right small me-2" style={{ color: digitalGold }}></i> Become the global standard for cybersecurity excellence</li>
                                    <li className="mb-2"><i className="fas fa-chevron-right small me-2" style={{ color: digitalGold }}></i> Empower organizations with proactive defense strategies</li>
                                    <li className="mb-2"><i className="fas fa-chevron-right small me-2" style={{ color: digitalGold }}></i> Foster a cyber-resilient future for all</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* The Mwaah Factor Card */}
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10">
                            <div className="p-5 rounded-4 text-center shadow-lg"
                                style={{
                                    backgroundColor: '#0f172a', // Slightly lighter dark background
                                    border: `2px solid ${cyberTeal}`,
                                    boxShadow: `0 0 40px rgba(0, 224, 255, 0.5)` // Neon glow effect
                                }}>
                                <h3 className="h3 fw-bold mb-3" style={getGradientText("The Mwaah Factor", secondaryAccent, cyberTeal)}>The Mwaah Factor</h3>
                                <p className="lead text-white-75 mx-auto" style={{ maxWidth: '800px' }}>
                                    We don't just respond to threats—we anticipate them. Our proactive approach combines military-grade security protocols with innovative threat intelligence, ensuring your digital assets remain impenetrable. When others see complexity, we see opportunity to excel.
                                </p>
                                <p className="fw-bold mt-4" style={{ color: digitalGold }}>
                                    <i className="fas fa-star mx-2"></i> Excellence is our standard, not our goal <i className="fas fa-star mx-2"></i>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- */}

            {/* 3. Leadership (The Guardians Behind the Code) */}
            <section className="py-5">
                <div className="container py-4">
                    <h2 className="text-center display-5 fw-bolder mb-2">
                        The 
                        <span style={getGradientText("Guardians", cyberTeal, digitalGold)}> Guardians </span>
                        Behind the Code
                    </h2>
                    <p className="text-center lead mb-5 text-white-50">Meet the elite team protecting your digital frontier</p>

                    <div className="row g-4 justify-content-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="card h-100 p-3 text-center rounded-4 shadow" style={{ backgroundColor: darkCardBg, border: `1px solid ${deepBlue}` }}>
                                    <div className="d-flex justify-content-center mt-3 mb-4">
                                        <img src={member.imageUrl} alt={member.name} className="rounded-circle" style={{ width: '100px', height: '100px', border: `3px solid ${index % 2 === 0 ? cyberTeal : digitalGold}` }} />
                                    </div>
                                    <h5 className="fw-bold mb-1">{member.name}</h5>
                                    <p className="small fw-medium mb-3" style={{ color: index % 2 === 0 ? cyberTeal : digitalGold }}>{member.title}</p>
                                    <p className="text-white-50 small flex-grow-1">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- */}

            {/* 4. Core Services (Beyond the Firewall) */}
            <section id="services" className="py-5" style={{ backgroundColor: '#1a1d23' }}>
                <div className="container py-4">
                    <h2 className="text-center display-5 fw-bolder mb-2">
                        Beyond the 
                        <span style={getGradientText("Firewall", secondaryAccent, digitalGold)}> Firewall</span>
                    </h2>
                    <p className="text-center lead mb-5 text-white-50">Comprehensive security services tailored to your unique needs</p>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="accordion" id="servicesAccordion">
                                {services.map((service, index) => (
                                    <div key={index} className="accordion-item mb-3 rounded-4 shadow-lg" style={{ backgroundColor: darkCardBg, border: `1px solid ${deepBlue}` }}>
                                        <h2 className="accordion-header" id={`heading${service.id}`}>
                                            <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#${service.id}`} aria-expanded="false" aria-controls={service.id}
                                                style={{ backgroundColor: darkCardBg, borderBottom: 'none', borderRadius: '0.5rem' }}>
                                                <div className="d-flex align-items-center">
                                                    <span className="p-3 me-3 rounded-circle" style={{ backgroundColor: deepBlue, border: `1px solid ${cyberTeal}` }}>
                                                        <i className={`fas ${service.iconClass} fa-lg`} style={{ color: cyberTeal }}></i>
                                                    </span>
                                                    <div>
                                                        <span className="fw-bold h5 mb-0">{service.title}</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id={service.id} className="accordion-collapse collapse" aria-labelledby={`heading${service.id}`} data-bs-parent="#servicesAccordion">
                                            <div className="accordion-body text-white-75" style={{ backgroundColor: darkCardBg }}>
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

            {/* --- */}

            {/* 5. Commitment (Our Pledge: Precision and Integrity) */}
            <section className="py-5">
                <div className="container py-4">
                    <h2 className="text-center display-5 fw-bolder mb-2">
                        Our Pledge: 
                        <span style={getGradientText("Precision", secondaryAccent, cyberTeal)}> Precision </span>
                        and 
                        <span style={{ color: digitalGold }}> Integrity</span>
                    </h2>
                    <p className="text-center lead mb-5 text-white-50">Every engagement is backed by our commitment to excellence</p>

                    <div className="row text-center g-4">
                        {commitmentPoints.map((point, index) => (
                            <div key={index} className="col-md-4">
                                <i className={`fas ${point.icon} fa-3x mb-3`} style={{ color: point.color, textShadow: `0 0 10px ${point.color}` }}></i>
                                <h5 className="fw-bold mb-2">{point.title}</h5>
                                <p className="small text-white-50">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- */}

            {/* 6. Enrollment CTA / Footer CTA */}
            <section className="py-5" style={{ backgroundColor: '#1a1d23' }}>
                <div className="container">
                    <div className="p-5 rounded-4 text-center mx-auto" style={{
                        maxWidth: '900px',
                        background: 'linear-gradient(135deg, rgba(20, 20, 40, 0.9), rgba(30, 30, 50, 0.9))',
                        border: `2px solid ${cyberTeal}`,
                        boxShadow: `0 0 40px rgba(0, 224, 255, 0.3)`
                    }}>
                        <h2 className="display-6 fw-bolder mb-3">
                            Ready to Fortify Your 
                            <span style={getGradientText("Digital Defenses", secondaryAccent, digitalGold)}> Digital Defenses</span>?
                        </h2>
                        <p className="lead mb-4 text-white-75">
                            Let's discuss how our expertise can protect your organization from evolving cyber threats.
                        </p>

                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <Button onClick={handleShow} className="btn btn-lg fw-bold rounded-pill px-5"
                                style={{ background: `linear-gradient(90deg, ${cyberTeal}, ${secondaryAccent})`, color: deepBlue, border: 'none' }}>
                                <i className="fas fa-calendar-alt me-2"></i> Schedule Consultation
                            </Button>
                            <a href="tel:555CYBER99" className="btn btn-lg fw-bold rounded-pill px-5"
                                style={{ background: 'transparent', color: cyberTeal, border: `2px solid ${cyberTeal}` }}>
                                <i className="fas fa-phone-alt me-2"></i> Call: (555) CYBER-99
                            </a>
                        </div>
                        <p className="mt-3 small text-white-50">Available 24/7 for emergency security incidents</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-3 text-center small text-white-50" style={{ backgroundColor: deepBlue, borderTop: `1px solid ${deepBlue}` }}>
                © 2025 Cyber Guard Agencies. All rights reserved.
            </footer>
            
            {/* The Payment Modal */}
            <PaymentModal />
        </div>
    );
};

export default About;