import { useState } from "react";
import { Building, Calendar, MapPin, Award } from "lucide-react";
import TerminalPrompt from "@/components/TerminalPrompt";

const Experience = () => {
  const [showContent, setShowContent] = useState(true);

  const experiences = [
    {
      company: "Dynamo Computing",
      position: "Web Developer Intern",
      duration: "Oct 2023 – Jan 2024",
      location: "Remote",
      description: "Contributed to the development of a web application with secure login authentication and session handling for both seller and consumer dashboards.",
      achievements: [
        "Worked with React.js for building reusable frontend components and Java (JSP, Servlets) in the middleware layer.",
        "Designed SQL queries and procedures for features like real-time inventory updates and data backup.",
        "Integrated backend services using Node.js and JDBC for database communication.",
        "Improved understanding of combining Java-based middleware with MERN stack components."
      ],
      tech: ["MERN", "Java", "Web Applications", "SQL", "Node.js", "JDBC"]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:pl-64">
      <div className="max-w-5xl mx-auto pt-20">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <span className="text-muted-foreground text-xs ml-2">experience.sh</span>
          </div>
          <div className="p-6">
            <TerminalPrompt 
              text="history --work --detailed" 
              onComplete={() => setShowContent(true)}
            />
            
            {showContent && (
              <div className="mt-6 animate-slide-up">
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <div key={exp.company} className="terminal-window hover:animate-terminal-glow transition-all duration-300">
                      <div className="terminal-header">
                        <div className="flex items-center gap-2">
                          <Building className="text-primary" size={16} />
                          <span className="text-sm font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 ml-auto text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 space-y-4">
                        <div>
                          <h3 className="text-secondary text-lg font-semibold glow-secondary">{exp.position}</h3>
                          <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-accent text-sm font-semibold mb-2 flex items-center gap-2">
                            <Award size={14} />
                            Key Contributions
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                                <span className="text-primary">{"•"}</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.tech.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
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

export default Experience;
