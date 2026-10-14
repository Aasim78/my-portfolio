import { useState } from "react";
import {
  FileText,
  ExternalLink,
  Code2,
  GraduationCap,
  Award,
  BookOpen,
  Menu,
  X,
  Copy,
  Check,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Download,
  Send,
} from "lucide-react";
import "./App.css";

// Clean, precise inline SVGs for GitHub and LinkedIn matching Lucide stroke aesthetics
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error
  const [formMessage, setFormMessage] = useState("");

  const emailAddress = "aasimshaibani25@gmail.com";
  const phoneNumber = "+91 9973717636";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setFormMessage("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        setFormMessage("Thank you! Your message has been sent successfully. I'll get back to you soon.");
        e.target.reset();
      } else {
        setFormStatus("error");
        setFormMessage(data.message || "Failed to send message. Please try emailing directly.");
      }
    } catch {
      setFormStatus("error");
      setFormMessage("Network error. Please email directly at aasimshaibani25@gmail.com.");
    }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C", "Java", "JavaScript", "SQL"],
    },
    {
      title: "Web & Backend",
      skills: ["React", "Node.js", "Express", "Flask", "REST APIs", "HTML5", "CSS3"],
    },
    {
      title: "Databases & ORM",
      skills: ["PostgreSQL", "MySQL", "MongoDB (Basic)", "Drizzle ORM"],
    },
    {
      title: "Computer Vision & ML",
      skills: ["OpenCV", "MediaPipe", "Scikit-learn", "Naive Bayes", "Feature Extraction"],
    },
    {
      title: "Core Computer Science",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Render", "Vite", "Linux"],
    },
  ];

  const projects = [
    {
      id: "mentor-connect",
      title: "MentorConnect",
      tagline: "Student Mentorship Platform",
      role: "Team Lead",
      badge: "Full-Stack Web System",
      description:
        "A full-stack mentor–mentee management system with role-based dashboards engineered to coordinate mentorship workflows, academic progress reviews, and meetings across multi-year engineering cohorts.",
      keyPoints: [
        "Architected role-based dashboards with authenticated access for students, faculty mentors, and institutional administrators.",
        "Engineered meeting scheduling, mentee progress reviews, and interactive communication using React and Express REST APIs.",
        "Modeled relational database schemas using PostgreSQL and Drizzle ORM, with production deployment on Render.",
      ],
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "REST APIs", "Render"],
      githubUrl: "https://github.com/Aasim78/MentorConnect",
      liveUrl: "https://mentorconnect-wjz6.onrender.com",
      publicationNote: "Peer-reviewed research published in IEEE ICKECS 2026",
    },
    {
      id: "gesture-control",
      title: "Gesture-Controlled Computer Interaction",
      tagline: "Computer Vision Application",
      role: null,
      badge: "Computer Vision",
      description:
        "A touchless human-computer interface translating real-time webcam video into native operating system inputs without specialized sensor hardware.",
      keyPoints: [
        "Processed live video streams using OpenCV and MediaPipe to track 21 3D hand landmarks at real-time framerates.",
        "Designed spatial gesture heuristics mapping index finger coordinates to smooth on-screen cursor navigation.",
        "Implemented landmark proximity thresholds for left/right clicks and interfaced with Windows OS APIs for system volume control.",
      ],
      technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "OS Automation"],
      githubUrl: "https://github.com/Aasim78/Gesture_Control",
      liveUrl: null,
    },
    {
      id: "spam-classifier",
      title: "Spam Email Classifier",
      tagline: "Machine Learning & NLP",
      role: null,
      badge: "Machine Learning / NLP",
      description:
        "An end-to-end NLP and machine learning pipeline that accurately distinguishes spam messages from legitimate communication using probabilistic text modeling.",
      keyPoints: [
        "Implemented text cleaning, tokenization, stop-word elimination, and vectorization pipelines.",
        "Trained and evaluated a Multinomial Naive Bayes classifier on text corpora for reliable message scoring.",
        "Built a lightweight Flask web interface for low-latency, real-time message inference and demonstration.",
      ],
      technologies: ["Python", "Scikit-learn", "Naive Bayes", "Flask", "NLP"],
      githubUrl: "https://github.com/Aasim78/naive-bayes-spam-classifier",
      liveUrl: null,
    },
  ];

  const achievements = [
    {
      title: "Top 5 Finalist — Skill Sangam Hackathon",
      category: "Competitive Hackathon",
      description: "Secured a top 5 position in a competitive multi-round hackathon building technical solutions under tight deadlines.",
    },
    {
      title: "3rd Position — Technical Poster Presentation",
      category: "Academic Competition",
      description: "Recognized for technical presentation, architectural clarity, and visual communication of engineering concepts.",
    },
    {
      title: "Basics of Python — Infosys SpringBoard",
      category: "Certification",
      description: "Demonstrated core competency in Python programming, object-oriented principles, and algorithmic problem-solving.",
    },
    {
      title: "Volunteer — Swachhanjali Plogging Drive (NSS)",
      category: "Community Initiative",
      description: "Active community volunteer contributing to social responsibility and environmental cleanliness initiatives under NSS.",
    },
  ];

  return (
    <div className="portfolio-wrapper">
      {/* NAVBAR */}
      <header className="navbar-container">
        <nav className="navbar" aria-label="Main Navigation">
          <a href="#hero" className="navbar-brand">
            <span className="brand-name">Aasim</span>
            <span className="brand-dot">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-desktop-links">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#publication" className="nav-link">Publication</a>
            <a href="#about" className="nav-link">About & Education</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#achievements" className="nav-link">Milestones</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="nav-actions">
            <a
              href="/Aasim_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-nav"
              title="Open Resume PDF in new tab"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              className="mobile-toggle"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer" role="dialog" aria-modal="true">
            <div className="mobile-drawer-links">
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                Projects
              </a>
              <a href="#publication" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                Publication
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                About & Education
              </a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                Skills
              </a>
              <a href="#achievements" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                Milestones
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                Contact
              </a>
              <a
                href="/Aasim_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-resume-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={15} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="hero-section" id="hero">
          <div className="status-badge" role="status">
            <span className="status-dot" aria-hidden="true"></span>
            <span className="status-text">
              CSE Undergrad (2023–2027) · Seeking Software Engineering Internships
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">Md Aasim Shaibani</span>.
          </h1>

          <p className="hero-subtitle">
            I build web applications and explore practical applications of computer vision and machine learning.
          </p>

          <p className="hero-description">
            Computer Science & Engineering student at Sahyadri College of Engineering & Management, Karnataka.
            Focused on building dependable full-stack systems with React, Node.js, and PostgreSQL,
            and developing real-time vision pipelines with OpenCV and MediaPipe.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <Code2 size={15} />
            </a>

            <a
              href="/Aasim_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FileText size={15} />
              <span>Resume (PDF)</span>
            </a>

            <a href="#contact" className="btn btn-ghost">
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Social Quick Bar */}
          <div className="hero-social-bar">
            <a
              href="https://github.com/Aasim78"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              aria-label="GitHub Profile"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mdaasim01/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              aria-label="Send email via Gmail"
            >
              <Mail size={15} />
              <span>{emailAddress}</span>
            </a>
          </div>

          {/* Clean Inline Academic Snapshot (Quiet, editorial, no card boxes) */}
          <div className="hero-academic-bar">
            <div className="academic-item">
              <span className="academic-label">Degree</span>
              <span className="academic-val">B.E. Computer Science</span>
            </div>
            <span className="academic-sep">/</span>
            <div className="academic-item">
              <span className="academic-label">Institution</span>
              <span className="academic-val">Sahyadri College, Karnataka</span>
            </div>
            <span className="academic-sep">/</span>
            <div className="academic-item">
              <span className="academic-label">Academic Standing</span>
              <span className="academic-val font-mono">CGPA 9.02</span>
            </div>
            <span className="academic-sep">/</span>
            <div className="academic-item">
              <span className="academic-label">Graduation</span>
              <span className="academic-val font-mono">2027</span>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section" id="projects">
          <div className="section-header">
            <span className="section-eyebrow">FEATURED WORK</span>
            <h2 className="section-heading">Projects I've Built</h2>
            <p className="section-lead">
              Practical software systems spanning full-stack web platforms, computer vision, and machine learning pipelines.
            </p>
          </div>

          <div className="projects-container">
            {projects.map((project, index) => (
              <article className="project-item" key={project.id}>
                <div className="project-item-top">
                  <div className="project-meta-left">
                    <span className="project-num font-mono">0{index + 1}</span>
                    <span className="project-badge">{project.badge}</span>
                    {project.role && (
                      <span className="project-role">{project.role}</span>
                    )}
                  </div>

                  <div className="project-links-right">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link"
                      title="View GitHub Repository"
                    >
                      <GithubIcon />
                      <span>Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link highlight"
                        title="View Live Application"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-heading">{project.title}</h3>
                <p className="project-sub">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>

                <ul className="project-bullet-list">
                  {project.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {project.publicationNote && (
                  <div className="project-publication-badge">
                    <BookOpen size={14} />
                    <span>{project.publicationNote}</span>
                  </div>
                )}

                <div className="project-tech-row">
                  {project.technologies.map((tech) => (
                    <span className="tech-pill font-mono" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* RESEARCH & PUBLICATION SECTION */}
        <section className="section" id="publication">
          <div className="section-header">
            <span className="section-eyebrow">RESEARCH & SCHOLARSHIP</span>
            <h2 className="section-heading">Peer-Reviewed Publication</h2>
            <p className="section-lead">
              Research authored on multi-year mentorship frameworks and academic tracking for engineering institutions.
            </p>
          </div>

          <div className="publication-card">
            <div className="pub-tag-row">
              <span className="pub-badge font-mono">IEEE ICKECS 2026</span>
              <span className="pub-status">Conference Proceedings</span>
            </div>

            <h3 className="pub-title">
              MentorConnect: A Data-Driven Multi-Year Mentorship System for Engineering Education
            </h3>

            <p className="pub-authors">
              <strong>Md Aasim Shaibani</strong>, et al.
            </p>

            <p className="pub-venue">
              Published in the <em>Proceedings of the 4th International Conference on Knowledge Engineering and Communication Systems (ICKECS 2026)</em>, IEEE.
            </p>

            <p className="pub-abstract">
              This research evaluates the systemic architecture and operational deployment of MentorConnect,
              an institutional mentorship platform designed to address student attrition and communication
              barriers in technical undergraduate institutions through role-based access, academic tracking, and structured reviews.
            </p>

            <div className="pub-actions">
              <a
                href="https://github.com/Aasim78/MentorConnect"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon />
                <span>Associated Project Code</span>
              </a>
              <a
                href="https://mentorconnect-wjz6.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                <ExternalLink size={14} />
                <span>Live System Demo</span>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT & EDUCATION SECTION */}
        <section className="section" id="about">
          <div className="section-header">
            <span className="section-eyebrow">BACKGROUND & ACADEMICS</span>
            <h2 className="section-heading">About & Education</h2>
            <p className="section-lead">
              Academic foundation, technical values, and areas of engineering focus.
            </p>
          </div>

          <div className="about-editorial-grid">
            <div className="about-narrative">
              <h3 className="block-title">Engineering Focus</h3>
              <p>
                I am a Computer Science and Engineering undergraduate at Sahyadri College of Engineering and Management, Karnataka.
                My work centers on building dependable full-stack applications with React, Node.js, and PostgreSQL, alongside
                hands-on experimentation in real-time computer vision and machine learning.
              </p>
              <p>
                I value practical engineering: writing clean and maintainable code, designing well-structured relational database schemas,
                and building tools that solve real operational needs—like coordinating student mentorship across college departments,
                touchless input systems, or text classification pipelines.
              </p>
              <p>
                I thrive in collaborative teams where I can take technical responsibility, learn from code reviews, and build dependable software.
              </p>

              <div className="about-meta-row">
                <div className="about-meta-item">
                  <MapPin size={15} className="meta-icon" />
                  <span>Karnataka, India</span>
                </div>
                <div className="about-meta-item">
                  <GraduationCap size={15} className="meta-icon" />
                  <span>Sahyadri College of Eng. & Mgmt.</span>
                </div>
              </div>
            </div>

            <div className="education-panel">
              <div className="edu-header">
                <span className="edu-badge">B.E. Computer Science</span>
                <span className="edu-cgpa font-mono">CGPA: 9.02 / 10.0</span>
              </div>

              <h4 className="edu-degree">Computer Science and Engineering</h4>
              <p className="edu-college">Sahyadri College of Engineering and Management</p>
              <p className="edu-dates font-mono">2023 – 2027 · Karnataka, India</p>

              <div className="edu-coursework">
                <span className="coursework-title">Core Academic Coursework:</span>
                <ul className="coursework-bullets">
                  <li>Data Structures & Algorithms (DSA)</li>
                  <li>Object-Oriented Programming (OOP)</li>
                  <li>Database Management Systems (DBMS)</li>
                  <li>Operating Systems</li>
                  <li>Computer Networks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section className="section" id="skills">
          <div className="section-header">
            <span className="section-eyebrow">TECHNICAL COMPETENCIES</span>
            <h2 className="section-heading">Skills & Tooling</h2>
            <p className="section-lead">
              Technologies, frameworks, and developer tools I work with regularly.
            </p>
          </div>

          <div className="skills-editorial-grid">
            {skillCategories.map((group) => (
              <div className="skill-row-item" key={group.title}>
                <h3 className="skill-row-title">{group.title}</h3>
                <div className="skill-pill-wrap">
                  {group.skills.map((skill) => (
                    <span className="skill-tag font-mono" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS & MILESTONES */}
        <section className="section" id="achievements">
          <div className="section-header">
            <span className="section-eyebrow">MILESTONES & ACTIVITIES</span>
            <h2 className="section-heading">Achievements & Certifications</h2>
            <p className="section-lead">
              Recognitions from hackathons, technical presentations, professional courses, and community service.
            </p>
          </div>

          <div className="milestones-grid">
            {achievements.map((item, idx) => (
              <div className="milestone-item" key={idx}>
                <div className="milestone-top">
                  <Award size={16} className="milestone-icon" />
                  <span className="milestone-cat">{item.category}</span>
                </div>
                <h3 className="milestone-title">{item.title}</h3>
                <p className="milestone-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION — BALANCED, UNIFIED HIGH-END DESIGN */}
        <section className="section contact-section" id="contact">
          <div className="section-header">
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2 className="section-heading">Let's Connect</h2>
            <p className="section-lead">
              I am actively seeking software engineering internship opportunities for 2025/2026.
              Whether you have an opening, a question about my work, or want to discuss a project, feel free to reach out.
            </p>
          </div>

          {/* Unified Contact Container with Perfect Visual Balance */}
          <div className="unified-contact-container">
            {/* Left: Direct Information & Channels */}
            <div className="contact-col-info">
              <div className="contact-intro">
                <h3 className="contact-block-heading">Direct Channels</h3>
                <p className="contact-block-desc">
                  I respond promptly to emails and inquiries. Feel free to copy my email or message me directly.
                </p>
              </div>

              {/* Direct Email with Quick Copy */}
              <div className="direct-email-box">
                <div className="email-label-group">
                  <span className="contact-field-label">Primary Email</span>
                  <div className="email-val-row">
                    <Mail size={16} className="text-cyan" />
                    <span className="email-address-text font-mono">{emailAddress}</span>
                  </div>
                </div>

                <div className="email-actions-inline">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-secondary btn-sm copy-btn"
                    title="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald" />
                        <span className="text-emerald">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                    title="Open Gmail to compose email"
                  >
                    <ArrowUpRight size={14} />
                    <span>Open Gmail</span>
                  </a>
                </div>
              </div>

              {/* Communication Details */}
              <div className="contact-meta-list">
                <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="contact-meta-entry">
                  <Phone size={15} className="contact-meta-icon" />
                  <div className="contact-meta-text">
                    <span className="meta-hint">Phone</span>
                    <span className="meta-data font-mono">{phoneNumber}</span>
                  </div>
                </a>

                <div className="contact-meta-entry static">
                  <MapPin size={15} className="contact-meta-icon" />
                  <div className="contact-meta-text">
                    <span className="meta-hint">Location</span>
                    <span className="meta-data">Karnataka, India</span>
                  </div>
                </div>

                <a
                  href="https://github.com/Aasim78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-meta-entry"
                >
                  <GithubIcon className="contact-meta-icon" />
                  <div className="contact-meta-text">
                    <span className="meta-hint">GitHub</span>
                    <span className="meta-data">github.com/Aasim78</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/mdaasim01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-meta-entry"
                >
                  <LinkedinIcon className="contact-meta-icon" />
                  <div className="contact-meta-text">
                    <span className="meta-hint">LinkedIn</span>
                    <span className="meta-data">linkedin.com/in/mdaasim01</span>
                  </div>
                </a>

                <a
                  href="/Aasim_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-meta-entry"
                >
                  <Download size={15} className="contact-meta-icon" />
                  <div className="contact-meta-text">
                    <span className="meta-hint">Resume (PDF)</span>
                    <span className="meta-data">View Document ↗</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Web3Forms Contact Form */}
            <div className="contact-col-form">
              <div className="contact-form-intro">
                <h3 className="contact-block-heading">Send a Message</h3>
                <p className="contact-block-desc">
                  Delivered straight to my inbox via Web3Forms.
                </p>
              </div>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleFormSubmit}
                className="clean-contact-form"
              >
                {/* Required Web3Forms Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="0c0aff87-35cf-4ba3-ab64-dad04a635f68"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Message from Portfolio Website"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <div className="form-group">
                  <label htmlFor="user-name" className="field-label">
                    Your Name <span className="req-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="user-name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="field-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user-email" className="field-label">
                    Your Email <span className="req-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="field-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user-message" className="field-label">
                    Message <span className="req-accent">*</span>
                  </label>
                  <textarea
                    id="user-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hello Aasim, I'd like to talk about an internship opportunity..."
                    className="field-textarea"
                  ></textarea>
                </div>

                {formStatus === "success" && (
                  <div className="form-notice success" role="alert">
                    <Check size={16} className="notice-icon" />
                    <span>{formMessage}</span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="form-notice error" role="alert">
                    <span>{formMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary submit-action-btn"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? (
                    <>
                      <span className="mini-spinner" aria-hidden="true"></span>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-name">Md Aasim Shaibani</p>
            <p className="footer-text">
              Computer Science & Engineering · Sahyadri College of Engineering & Management
            </p>
          </div>

          <div className="footer-right">
            <span className="footer-tech font-mono">React + Vite</span>
            <a href="#hero" className="back-to-top">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
