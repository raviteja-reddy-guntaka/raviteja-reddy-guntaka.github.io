import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/HeaderPage';
import Projects, { Project } from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

const projectsData: Record<string, Project> = {
  project1: {
    id: 'project1',
    title: "OpenSearch Sentiment Analyzer",
    shortDescription: "This project involves developing a scalable sentiment analysis plugin for OpenSearch, a powerful search and analytics engine. The plugin is designed to process customer review documents and provide actionable insights through interactive dashboards.",
    details: "This project involves developing a scalable sentiment analysis plugin for OpenSearch, a powerful search and analytics engine. The plugin is designed to process customer review documents and provide actionable insights through interactive dashboards.",
    tags: ["OpenSearch", "Flask", "Python", "Java", "Microservices", "Docker"],
    githubUrl: "https://github.com/raviteja-reddy-guntaka/opensearch-sentiment-analyzer"
  },
  project2: {
    id: 'project2',
    title: "Content Summarizer",
    shortDescription: "This project is an AI-powered PDF summarizer that uses Flask and Ollama to create concise, markdown-formatted summaries of uploaded PDF documents.",
    details: "This project is an AI-powered PDF summarizer that uses Flask and Ollama to create concise, markdown-formatted summaries of uploaded PDF documents.",
    tags: ["Flask", "Python", "Ollama", "pyPDF2", "LLMs"],
    githubUrl: "https://github.com/raviteja-reddy-guntaka/content-summarizer"
  },
  project3: {
    id: 'project3',
    title: "FusionAuth Flask React Integration",
    shortDescription: "This project demonstrates a robust integration of FusionAuth with a Flask backend and React frontend, providing a secure and seamless authentication system. It supports user registration, sign-in, and Google OAuth login, with session management implemented using secure HTTP-only cookies.",
    details: "This project demonstrates a robust integration of FusionAuth with a Flask backend and React frontend, providing a secure and seamless authentication system. It supports user registration, sign-in, and Google OAuth login, with session management implemented using secure HTTP-only cookies.",
    tags: ["OAuth", "Python", "Flask", "FusionAuth", "Microservices", "REST API", "React"],
    githubUrl: "https://github.com/raviteja-reddy-guntaka/fusionauth-flask-react-integration"
  },
  project4: {
    id: 'project4',
    title: "TAB OUT",
    shortDescription: "TAB OUT (TO) is a Chrome extension that simplifies sharing web pages between your PC and mobile devices. With a single click on the extension icon, it generates a QR code for the current tab's URL. Simply scan this code with any mobile device to instantly access the same page on your phone or tablet. This extension streamlines cross-device browsing, eliminating the need for manual typing or link sharing.",
    details: "TAB OUT (TO) is a Chrome extension that simplifies sharing web pages between your PC and mobile devices. With a single click on the extension icon, it generates a QR code for the current tab's URL. Simply scan this code with any mobile device to instantly access the same page on your phone or tablet. This extension streamlines cross-device browsing, eliminating the need for manual typing or link sharing.",
    tags: ["JavaScript", "Chrome Extension"],
    githubUrl: "https://github.com/raviteja-reddy-guntaka/tab-out"
  },
  // project5: {
  //   id: 'project5',
  //   title: "Secure IoT Device Management",
  //   shortDescription: "Built a comprehensive IoT device management platform.",
  //   details: "Built a comprehensive IoT device management platform with end-to-end encryption, firmware over-the-air updates, and real-time monitoring. Implemented zero-trust security and anomaly detection for device behavior.",
  //   tags: ["C++", "IoT", "Security", "MQTT", "Embedded Systems", "Cryptography"],
  //   githubUrl: "https://github.com/raviteja-reddy-guntaka/iot-device-management"
  // },
};

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Initialize the particle background similar to your script.js
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    const particleCount = 100;
    const connectionDistance = 150;
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      constructor() {
        this.x = Math.random() * (canvas!.width);
        this.y = Math.random() * (canvas!.height);
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas!.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas!.height || this.y < 0) this.speedY = -this.speedY;
      }
      draw() {
        ctx!.fillStyle = '#3498db';
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
      connect() {
        particles.forEach(other => {
          const distance = Math.hypot(this.x - other.x, this.y - other.y);
          if (distance < connectionDistance && this !== other) {
            ctx!.strokeStyle = `rgba(52, 152, 219, ${1 - distance / connectionDistance})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(this.x, this.y);
            ctx!.lineTo(other.x, other.y);
            ctx!.stroke();
          }
        });
      }
    }

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
        p.connect();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} id="background-canvas"></canvas>
      <div className="container">
        <Header />
        <Projects 
          projects={projectsData} 
          selectedProject={selectedProject} 
          setSelectedProject={setSelectedProject} 
        />
        <Experience />
        <Footer />
      </div>
    </div>
  );
};

export default App;
