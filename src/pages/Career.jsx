import React from 'react';
import Footer from '../components/Footer'; 
// NOTE: Due to environment limitations, direct imports for local files like 
// 'bootstrap/dist/css/bootstrap.min.css' and '../assets/courseHeader.png'
// are not guaranteed to work. The Bootstrap styles are assumed to be loaded
// globally, and 'courseHeaderImage' is using a placeholder URL here.
// Please restore your original image import when using this code locally.

const courseHeaderImage = "https://placehold.co/1920x400/1a1a2e/ffffff?text=Cyber+Security+Track+Header";

const intakeData = [
  // Updated data to match the card structure
  { title: "Full-time physical", duration: "20 Weeks", mode: "100% physical | Mon - Fri 9 am - 5 pm GMT", startDate: "December 1st, 2025", tuitionFee: "Ksh 20,000", brochureLink: "#download" },
  { title: "Part-time physical", duration: "30 Weeks", mode: "100% Online | Mon & Wed 6 pm - 9 pm GMT", startDate: "December 1st, 2025", tuitionFee: "Ksh 20,000", brochureLink: "#download" },
];

const learningOutcomes = [
  "Advanced Network Reconnaissance", "Web Application Hacking (OWASP)", 
  "Buffer Overflows & Exploit Development", "Wireless and Cloud Security Auditing", 
  "Professional Penetration Test Reporting", "Incident Response & Forensics",
  "API Security Testing,exploitation", "Social Engineering Techniques",
  "Advanced Threat Simulation", "Red Team Operations",
  "Androis & iOS Penetration Testing", "Physical Security Assessments",

];

const curriculumModules = [
  { title: "Module 1: Foundations & Systems Security", content: "Deep dive into Linux command line, core networking, and secure system administration (e.g., Python scripting)." },
  { title: "Module 2: Network & Infrastructure Hacking", content: "Scanning, enumeration, and vulnerability assessment using industry tools like Nmap and Metasploit." },
  { title: "Module 3: Web and Application Exploitation", content: "Hands-on practice exploiting common web vulnerabilities (SQLi, XSS, CSRF) on live training platforms." },
  { title: "Module 4: Post-Exploitation & Defense", content: "Maintaining persistence, privilege escalation, log analysis, and professional reporting standards." },
];

const faqs = [
  { question: "Do I need to buy special equipment?", answer: "No. All lab environments and necessary tools are provided via our cloud-based Cyber Range access." },
  { question: "What certifications does this prepare me for?", answer: "This course aligns with objectives for the CEH, eJPT, and serves as excellent preparatory material for the highly demanding OSCP exam." },
];

const CareerPath = () => {
  const accentColor = '#00e0ff';
  const urgentColor = '#ff6b00'; // Matched the card's accent orange for consistency
  const cardAccentColor = '#ff6b00'; // Orange color for the card's title/button
  
  // Array of data pairs for the intake cards, matching the image design
  const cardDetails = [
    { label: "Start Date:", key: "startDate" },
    { label: "Course Duration:", key: "duration" },
    { label: "Mode of Learning:", key: "mode" },
    { label: "Tuition Fee:", key: "tuitionFee" },
    { label: "Brochure:", key: "brochureLink", isLink: true },
  ];

  return (
    <div className="bg-dark text-white"> 
      <main>
        {/* 1. Header & Intake Cards */}
        <section className="py-5" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #2c2c54 100%)' }}>
          <div className="container text-center py-5">
            <h1 className="display-4 fw-bold mb-3" style={{ color: accentColor }}>
              Ethical Hacking & Penetration Testing Bootcamp (Physical Track)
            </h1>
            <p className="lead text-white-50 mb-5">
              Step into the world of offensive cybersecurity with our comprehensive Specialist Track. Master hands-on skills through guided labs and real-world Capstone projects.
            </p>

            <h2 className="h4 text-light mb-4" style={{ color: accentColor }}>2025 - 2026 Intakes in Progress</h2> 

            <div className="row justify-content-center g-4">
              {intakeData.map((data, index) => (
                <div key={index} className="col-12 col-sm-10 col-md-6 col-lg-5">
                  {/* NEW CARD STRUCTURE START */}
                  <div
                    className="card shadow-lg border-0 h-100 p-3 rounded-4"
                    style={{ backgroundColor: '#fff5ed', border: `1px dotted ${cardAccentColor}` }}
                  >
                    <div className="card-body p-4 text-start text-dark">
                      
                      {/* Card Title */}
                      <h3 className="card-title fw-bolder mb-4 fs-3" style={{ color: cardAccentColor }}>
                        {data.title}
                      </h3>

                      {/* Details List */}
                      <div className="mb-4">
                        {cardDetails.map((detail, detailIndex) => (
                          <div key={detailIndex} 
                            className={`d-flex justify-content-between py-2 ${detailIndex < cardDetails.length - 1 ? 'border-bottom border-secondary border-opacity-25' : ''}`}
                          >
                            <span className="fw-medium">{detail.label}</span>
                            {detail.isLink ? (
                              <a href={data[detail.key]} className="fw-bold" style={{ color: cardAccentColor }}>
                                Download Here
                              </a>
                            ) : (
                              <span className="fw-bold">{data[detail.key]}</span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Apply Button */}
                      <div className="d-grid mt-4">
                        <a href="#apply" className="btn btn-lg fw-bold rounded-pill shadow-sm"
                          style={{ backgroundColor: cardAccentColor, color: '#fff' }}>
                          Apply Here
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* NEW CARD STRUCTURE END */}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 2. Learning Outcomes */}
        <section id="outcomes" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: accentColor }}>What You Will Master(Overview)</h2>
            <div className="row g-3 justify-content-center">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="p-3 rounded text-start text-white" style={{ backgroundColor: `hsl(${index * 50}, 70%, 30%)` }}>
                    <p className="mb-0 fw-medium"><span className="me-2">✅</span>{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Curriculum Breakdown */}
        <section id="curriculum" className="py-5 bg-dark">
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: accentColor }}> Curriculum Overview</h2>
            <div className="row justify-content-center g-3">
              {curriculumModules.map((module, index) => (
                <div key={index} className="col-12 col-lg-10">
                  <div className="card shadow border-0" style={{ backgroundColor: `hsl(${index * 40}, 50%, 20%)` }}>
                    <div className="card-body">
                      <h3 className="h5 fw-bold mb-2" style={{ color: accentColor }}>{module.title}</h3>
                      <p className="text-white-50 mb-0">{module.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Enrollment CTA */}
        <section id="prereq" className="py-5 text-center" style={{ backgroundColor: '#111' }}>
          <div className="container">
            <h2 className="mb-4" style={{ color: urgentColor }}>Ready to Launch Your Career?</h2>
            <p className="lead mb-4 text-white-50">
              Ideal for IT professionals, sysadmins, and developers pivoting into offensive security. 
              <br /><strong>Prerequisite:</strong> Basic understanding of networking & Linux CLI.
            </p>
            <a href="#apply" className="btn btn-lg fw-bold rounded-pill px-5 py-3" style={{ backgroundColor: urgentColor, color: '#fff' }}>
              Secure Your Spot Today
            </a>
          </div>
        </section>

        {/* 5. FAQs */}
        <section id="faqs" className="py-5 bg-dark">
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: accentColor }}>Frequently Asked Questions</h2>
            <div className="row justify-content-center g-3">
              {faqs.map((faq, index) => (
                <div key={index} className="col-12 col-lg-10">
                  <div className="card shadow border-0" style={{ backgroundColor: '#222' }}>
                    <div className="card-body">
                      <h4 className="h6 fw-bold mb-2">{faq.question}</h4>
                      <p className="text-white-50 mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Since you have an external component for Footer, I kept the reference but ensure it's not imported/used if unavailable */}
      {/* <Footer /> */} 
    </div>
  );
};

export default CareerPath;