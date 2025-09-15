import { useEffect, useState } from "react";
import { Terminal, Code, User, Briefcase, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TerminalPrompt from "@/components/TerminalPrompt";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showCommands, setShowCommands] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const quickCommands = [
    { command: "whoami", description: "Learn more about me", icon: User, path: "/about", color: "text-primary" },
    { command: "ls projects", description: "View my work", icon: Code, path: "/projects", color: "text-secondary" },
    { command: "history", description: "Career timeline", icon: Briefcase, path: "/experience", color: "text-accent" },
    { command: "ping", description: "Get in touch", icon: Mail, path: "/contact", color: "text-terminal-amber" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl w-full">
          <div className="terminal-window animate-terminal-glow">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <span className="text-muted-foreground text-xs ml-2">portfolio.sh</span>
              <div className="ml-auto text-xs text-muted-foreground">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="text-muted-foreground text-sm">
                  Last login: {currentTime.toLocaleDateString()} on terminal
                </div>
                
                <TerminalPrompt 
                  text="echo 'Welcome to my portfolio'" 
                  onComplete={() => setShowWelcome(true)}
                />
                
                {showWelcome && (
                  <div className="space-y-4 animate-slide-up">
                    <div className="text-4xl md:text-6xl font-bold">
                      <span className="glow-primary">Aryan</span>{" "}
                      <span className="glow-secondary">Singh</span>
                    </div>
                    <div className="text-lg md:text-xl text-muted-foreground">
                      Web Developer • MERN Stack • Java
                    </div>
                    
                    <div className="mt-6">
                      <TerminalPrompt 
                        text="cat intro.txt" 
                        delay={30}
                        onComplete={() => setShowCommands(true)}
                      />
                    </div>
                    
                    {showCommands && (
                      <div className="space-y-6 animate-slide-up">
                        <div className="bg-muted/30 rounded p-4 border-l-4 border-primary">
                          <p className="text-muted-foreground">
                            A passionate developer specializing in the MERN stack and Java. Experienced in building web applications with a focus on secure authentication, session handling, and creating reusable components.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="text-primary text-sm">Available commands:</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {quickCommands.map((cmd) => {
                              const Icon = cmd.icon;
                              return (
                                <Link key={cmd.command} to={cmd.path}>
                                  <div className="group flex items-center gap-3 p-3 rounded bg-muted/20 hover:bg-muted/40 border border-border hover:border-primary/50 transition-all duration-200">
                                    <Icon className={`${cmd.color} group-hover:scale-110 transition-transform`} size={20} />
                                    <div className="flex-1">
                                      <div className="text-sm font-mono text-foreground">
                                        $ {cmd.command}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {cmd.description}
                                      </div>
                                    </div>
                                    <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" size={16} />
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Link to="/projects">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                              <Code size={16} className="mr-2" />
                              View My Work
                            </Button>
                          </Link>
                          <Link to="/contact">
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                              <Mail size={16} className="mr-2" />
                              Let's Connect
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="mt-4 terminal-window">
            <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Status: Available for work</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>Maharashtra, India</span>
                <span>•</span>
                <span>B.E. Computer Engineering</span>
                <span>•</span>
                <span>Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;