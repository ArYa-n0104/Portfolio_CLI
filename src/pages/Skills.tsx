import { useState } from "react";
import { Code, Database, Cloud, Wrench, Brain } from "lucide-react";
import TerminalPrompt from "@/components/TerminalPrompt";

const Skills = () => {
  const [showContent, setShowContent] = useState(true);

  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      color: "text-primary",
      skills: ["JavaScript (ES6+)", "Java", "Python", "SQL"],
    },
    {
      name: "Frontend",
      icon: Code,
      color: "text-secondary",
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      name: "Backend",
      icon: Database,
      color: "text-accent",
      skills: ["Node.js", "Express", "Spring Boot", "Python APIs"],
    },
    {
      name: "Database",
      icon: Database,
      color: "text-terminal-purple",
      skills: ["MySQL"],
    },
    {
      name: "Other",
      icon: Wrench,
      color: "text-terminal-amber",
      skills: ["REST API Integration", "Cloud Deployment (AWS)", "Git", "GenAI Basics", "Figma"],
    },
    {
      name: "Soft Skills",
      icon: Brain,
      color: "text-primary",
      skills: ["Problem Solving", "Collaboration", "Agile Practices"],
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:pl-64">
      <div className="max-w-5xl mx-auto pt-20">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <span className="text-muted-foreground text-xs ml-2">skills.sh</span>
          </div>
          <div className="p-6">
            <TerminalPrompt 
              text="./display_skills --all"
              onComplete={() => setShowContent(true)}
            />
            
            {showContent && (
              <div className="mt-6 space-y-6 animate-slide-up">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div key={category.name} className="terminal-window">
                        <div className="terminal-header">
                          <div className={`flex items-center gap-2 ${category.color}`}>
                            <Icon size={16} />
                            <span className="text-sm font-medium">{category.name}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-2">
                            {category.skills.map((skill) => (
                              <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className={category.color}>{">>"}</span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
