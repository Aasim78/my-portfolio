
import "./App.css";

function App() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "Python", "C++", "Java"],
    },
    {
      category: "Core Computer Science",
      items: ["Data Structures & Algorithms", "OOP", "DBMS"],
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "React"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB (Basic)"],
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "MentorConnect",
      subtitle: "Student Mentorship Platform",
      role: "Team Lead",
      description:
        "A full-stack mentor–mentee management platform with role-based dashboards for students, mentors and administrators.",
      details: [
        "Implemented authentication, mentor profiles and academic tracking.",
        "Developed meeting and chat functionality using React and Express REST APIs.",
        "Integrated PostgreSQL using Drizzle ORM and deployed using Render.",
      ],
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Drizzle ORM"],
      github: "https://github.com/nabilkhan-01/MentorConnect",
    },
    {
      number: "02",
      title: "Gesture-Controlled Computer Interaction",
      subtitle: "Computer Vision Application",
      description:
        "A real-time touchless computer-control system using webcam input, MediaPipe hand tracking and 21 hand landmarks.",
      details: [
        "Implemented gesture-based cursor movement and mouse clicks.",
        "Added Windows volume control through gesture recognition.",
        "Integrated computer vision processing with operating system controls.",
      ],
      technologies: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/Aasim78/Gesture_Control",
    },
    {
      number: "03",
      title: "Spam Email Classifier",
      subtitle: "Machine Learning Application",
      description:
        "A machine learning application that classifies emails as spam or legitimate using the Naive Bayes algorithm.",
      details: [
        "Applied text preprocessing and feature extraction.",
        "Used Naive Bayes for email classification.",
        "Developed a Flask-based interface for real-time predictions.",
      ],
      technologies: ["Python", "Naive Bayes", "Flask"],
      github: "https://github.com/Aasim78/naive-bayes-spam-classifier",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Aasim<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#publication">Publication</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <p className="greeting">HELLO, I'M</p>

        <h1>
          Md Aasim <span>Shaibani</span>
        </h1>

        <h2>Computer Science Engineering Student</h2>

        <p className="description">
          Passionate about software development, full-stack
          applications and exploring intelligent technologies.
          I enjoy transforming ideas into practical solutions
          through code.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work
          </a>

          <a
            href="/Aasim_Resume.pdf"
            className="secondary-btn"
            download
          >
            Download Resume ↓
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Aasim78"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/mdaasim01/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email ↗
          </a>
        </div>

        <div className="hero-stat">
          <div>
            <h3>9.02</h3>
            <p>CGPA</p>
          </div>

          <div>
            <h3>2027</h3>
            <p>Graduation</p>
          </div>

          <div>
            <h3>3+</h3>
            <p>Projects</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <p className="section-label">INTRODUCTION</p>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-card">
          <p>
            I am Md Aasim Shaibani, a Computer Science
            Engineering student at Sahyadri College of
            Engineering and Management, Karnataka.
          </p>

          <p>
            My technical interests include software
            development, full-stack web applications,
            machine learning and computer vision.
          </p>

          <p>
            I enjoy working on real-world problems,
            collaborating with teams and continuously
            improving my technical skills through
            hands-on projects.
          </p>

          <div className="education-box">
            <h3>Education</h3>
            <h4>
              B.E. in Computer Science Engineering
            </h4>
            <p>
              Sahyadri College of Engineering and Management
            </p>
            <p>Karnataka, India | 2023 – 2027</p>
            <span className="cgpa-badge">CGPA: 9.02</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <p className="section-label">MY EXPERTISE</p>
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        <div className="skills-container">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>

              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PUBLICATION */}
      <section className="section" id="publication">
        <p className="section-label">RESEARCH & PUBLICATION</p>
        <h2 className="section-title">
          IEEE <span>Publication</span>
        </h2>

        <div className="publication-card">
          <span className="publication-tag">
            IEEE ICKECS 2026
          </span>

          <h3>
            MentorConnect: A Data-Driven Multi-Year
            Mentorship System for Engineering Education
          </h3>

          <p>
            Md Aasim Shaibani et al.
          </p>

          <p>
            Published in the Proceedings of the 4th
            International Conference on Knowledge
            Engineering and Communication Systems (ICKECS 2026), IEEE.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <p className="section-label">WHAT I'VE BUILT</p>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <h3>{project.title}</h3>

              <p className="project-subtitle">
                {project.subtitle}
              </p>

              {project.role && (
                <span className="role-badge">
                  {project.role}
                </span>
              )}

              <p className="project-description">
                {project.description}
              </p>

              <ul>
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View GitHub Repository ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS AND ACHIEVEMENTS */}
      <section className="section" id="achievements">
        <p className="section-label">MILESTONES</p>
        <h2 className="section-title">
          Certifications & <span>Achievements</span>
        </h2>

        <div className="achievement-container">

          <div className="achievement-card">
            <h3>Certifications</h3>
            <p>
              Basics of Python – Infosys SpringBoard
            </p>
          </div>

          <div className="achievement-card">
            <h3>Achievements</h3>
            <ul>
              <li>
                Secured Top 5 position – Skill Sangam Hackathon
              </li>
              <li>
                Secured 3rd position – Poster Presentation
              </li>
              <li>
                Volunteer – Swachhanjali Plogging Drive (NSS)
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <p className="section-label">GET IN TOUCH</p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p>
          I'm always interested in connecting with people,
          exploring opportunities and discussing technology.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com" 
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          Send Me an Email ↗
        </a>

        <div className="contact-links">
          <a href="tel:+919973717636">
            +91 9973717636
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email ↗
          </a>

          <a
            href="https://github.com/Aasim78"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mdaasim01/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Md Aasim Shaibani. All rights reserved.
        </p>

        <a href="#home">Back to Top ↑</a>
      </footer>

    </div>
  );
}

export default App;
