import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="header-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <span className="highlight">Zarifi Mohamed Abdelhadi</span>, a passionate Full Stack Developer 
              and AI Specialist with a genuine love for computer science and its latest innovations in artificial intelligence.
            </p>
            
            <p>
              I believe in turning visions and passion into reality through code. Every project I undertake is an opportunity 
              to solve real-world problems and create meaningful impact. My expertise spans across multiple domains:
            </p>

            <div className="expertise-grid">
              <div className="expertise-item">
                <h4>🎨 Frontend Development</h4>
                <p>Building beautiful, responsive interfaces with React, Next.js, and Three.js</p>
              </div>
              <div className="expertise-item">
                <h4>⚙️ Backend Development</h4>
                <p>Creating scalable APIs with Node.js, Express, NestJS, FastAPI, Django, and Java</p>
              </div>
              <div className="expertise-item">
                <h4>🧠 AI & Machine Learning</h4>
                <p>Developing intelligent models for medical imaging and diagnosis</p>
              </div>
              <div className="expertise-item">
                <h4>☁️ Cloud & DevOps</h4>
                <p>Deploying and managing applications with Docker and Kubernetes</p>
              </div>
            </div>

            <p className="motivation">
              I find genuine happiness in seeing my visions and passion come to life through completed projects. 
              I'm excited to collaborate and create great things together!
            </p>

            <div className="about-cta">
              <a href="mailto:mohamedzarifi12@gmail.com" className="email-btn">
                Get in Touch
              </a>
              <a href="https://www.linkedin.com/in/mohamed-zarifi-46b89627b/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-box">
              <div className="visual-content">
                <h3>Passionate Developer</h3>
                <p>Turning ideas into reality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
