import React, { useRef, useEffect } from 'react';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  details: string;
  tags: string[];
  githubUrl: string;
}

interface ProjectsProps {
  projects: Record<string, Project>;
  selectedProject: string | null;
  setSelectedProject: (id: string | null) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, selectedProject, setSelectedProject }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Horizontal scroll handlers
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  // Auto scroll project details into view when selected
  useEffect(() => {
    if (selectedProject && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedProject]);

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-container">
      <div className="section-title">
        <h2>Projects</h2>
        <div className="scroll-controls">
          <button className="scroll-control" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-control" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="projects-scroll" id="projects-scroll" ref={scrollRef}>
        {Object.values(projects).map(project => (
          <div 
            key={project.id} 
            className={`project-card ${selectedProject === project.id ? 'selected' : ''}`}
            onClick={(e) => {
              // Prevent click if GitHub link is clicked
              if ((e.target as HTMLElement).closest('.github-link')) return;
              setSelectedProject(project.id);
            }}
          >
            <h3>{project.title}</h3>
            <p className="project-description">{project.shortDescription}</p>
            <div className="tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <div className="github-link-container">
              <a 
                href={project.githubUrl} 
                className="github-link" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-github"></i> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="project-details visible" id="project-details" ref={detailsRef}>
          {(() => {
            const project = projects[selectedProject];
            if (!project) return null;
            return (
              <>
                <div className="project-details-header">
                  <h3 className="project-details-title">{project.title}</h3>
                  <div className="project-details-actions">
                    <a 
                      href={project.githubUrl} 
                      className="project-details-github" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </a>
                    <button className="close-details" onClick={closeDetails} aria-label="Close project details">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <div className="project-details-content">
                  <p>{project.details}</p>
                  <div className="project-details-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-details-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </section>
  );
};

export default Projects;
