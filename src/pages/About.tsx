import { User, MapPin, Calendar, Award, GraduationCap, Book, Linkedin, Github, Paperclip } from "lucide-react";
import TerminalPrompt from "@/components/TerminalPrompt";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "St John College of Engineering and Management",
      duration: "June 2019 – April 2021",
      metric: "CGPA: 8.67",
    },
    {
      degree: "HSC in Computer Science",
      institution: "Tarapur Vidya Mandir and Jr College",
      duration: "Dec 2021 – May 2025",
      metric: "Percentage: 89%",
    },
  ];

  const leadership = [
    {
      role: "Technical Head, ISTE SJCEM",
      description: "Led a team of 7+ members to conduct workshops and coding events.",
    },
    {
      role: "Event Management Lead, GDG",
      description: "Coordinated 5+ tech events with 200+ attendees.",
    },
  ];

  const achievements = [
    {
      title: "Smart India Hackathon - Finalist (2023)",
      description: "Organized by Government of India.",
    },
    {
      title: "Research Paper Published in JETIA Journal (2025)",
      link: "#", // Replace with actual link
    },
  ];

  const certifications = [
    { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", link: "#" },
    { name: "Coursera: CyberSecurity Certificate", link: "#" },
    { name: "Coursera: Data Structures Certificate", link: "#" },
    { name: "Coursera: Create a Virtual Machine and Deploy a Web Server", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:pl-64">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <span className="text-muted-foreground text-xs ml-2">about.sh</span>
          </div>
          <div className="p-6">
            <TerminalPrompt text="cat /etc/profile" />
            
            <div className="mt-6 space-y-8 animate-slide-up">
              {/* Education */}
              <div className="terminal-window">
                <div className="p-6">
                  <h3 className="text-primary text-lg mb-4 glow-primary flex items-center gap-2"><GraduationCap size={20} /> Education</h3>
                  <div className="space-y-4">
                    {education.map((edu, i) => (
                      <div key={i}>
                        <p className="font-semibold text-foreground">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm">{edu.degree}</p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{edu.duration}</span>
                          <span>{edu.metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="terminal-window">
                <div className="p-6">
                  <h3 className="text-secondary text-lg mb-4 glow-secondary flex items-center gap-2"><User size={20} /> Leadership / Extracurricular</h3>
                  <div className="space-y-3">
                    {leadership.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">{'>'}</span>
                        <div>
                          <p className="font-semibold text-foreground">{item.role}</p>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="terminal-window">
                <div className="p-6">
                  <h3 className="text-accent text-lg mb-4 glow-accent flex items-center gap-2"><Award size={20} /> Achievements</h3>
                  <div className="space-y-3">
                    {achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">{'>'}</span>
                        <div>
                          <p className="font-semibold text-foreground">{ach.title}</p>
                          <p className="text-muted-foreground text-sm">{ach.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="terminal-window">
                <div className="p-6">
                  <h3 className="text-terminal-amber text-lg mb-4 glow-terminal-amber flex items-center gap-2"><Paperclip size={20} /> Certifications</h3>
                  <div className="space-y-2">
                    {certifications.map((cert, i) => (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" key={i} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <span className="text-primary">-</span>
                        <span>{cert.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
