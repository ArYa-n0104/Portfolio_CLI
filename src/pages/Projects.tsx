import { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import TerminalPrompt from "@/components/TerminalPrompt";

const Projects = () => {
  const [showContent, setShowContent] = useState(true);

  const projects = [
    {
      name: "Car Rental System",
      description: "Developed a platform managing 100+ cars with authentication and payment integration. Implemented booking and payment features using React.js for the frontend and Node.js with MySQL for backend operations.",
      tech: ["MERN", "Authentication", "Payment Integration", "React.js", "Node.js", "MySQL"],
      links: {
        demo: "https://rent-car-c2nq.onrender.com/", 
        github: "https://github.com/ArYa-n0104/Car-rental"
      }
    },
    {
      name: "Job Portal Website",
      description: "Developed a responsive job portal platform where users can create accounts and explore job listings. Implemented a Python-based API for fetching and serving job data, including preprocessing and automation tasks.",
      tech: ["MERN", "REST API", "Deployment", "Python", "MongoDB", "React.js"],
      links: {
        demo: "https://job-portal-as.netlify.app/", 
        github: "#"
      }
    },
    {
      name: "InternTrack – Smart Internship Tracking Portal",
      description: "Built a full-stack internship management system with secure authentication and role-based dashboards for students, companies, and administrators. Enabled companies to post internships and students to apply seamlessly.",
      tech: ["Spring Boot", "React", "MySQL", "JWT"],
      links: {
        demo: "#", // Replace with live link
        github: "#" // Replace with github link
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:pl-64">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <span className="text-muted-foreground text-xs ml-2">projects.sh</span>
          </div>
          <div className="p-6">
            <TerminalPrompt 
              text="ls -la ~/projects --detailed" 
              onComplete={() => setShowContent(true)}
            />
            
            {showContent && (
              <div className="mt-6 animate-slide-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {projects.map((project) => (
                      <div key={project.name} className="terminal-window hover:animate-terminal-glow transition-all duration-300">
                        <div className="terminal-header">
                          <div className="flex items-center gap-2">
                            <Code className="text-primary" size={16} />
                            <span className="text-sm font-medium">{project.name}</span>
                          </div>
                        </div>
                        <div className="p-4 space-y-4">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span 
                                key={tech} 
                                className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-4 pt-2">
                            <a 
                              href={project.links.demo}
                              target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm transition-colors"
                            >
                              <ExternalLink size={14} />
                              Live Link
                            </a>
                            <a 
                              href={project.links.github}
                              target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm transition-colors"
                            >
                              <Github size={14} />
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
