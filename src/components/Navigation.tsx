import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Terminal, Home, User, Code, Briefcase, Mail, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", icon: Home, label: "home", command: "cd ~/" },
    { path: "/about", icon: User, label: "about", command: "whoami" },
    { path: "/projects", icon: Code, label: "projects", command: "ls -la" },
    { path: "/skills", icon: Settings, label: "skills", command: "which" },
    { path: "/experience", icon: Briefcase, label: "experience", command: "history" },
    { path: "/contact", icon: Mail, label: "contact", command: "ping" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-4 left-4 z-50">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <span className="text-muted-foreground text-xs ml-2">portfolio.sh</span>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-primary text-sm mb-4">
              <Terminal size={16} />
              <span>Navigation</span>
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block p-2 rounded text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-primary/20 text-primary glow-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={16} />
                    <span>${item.command}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="terminal-window p-3"
        >
          <Terminal className="text-primary" size={20} />
        </button>
        
        {isOpen && (
          <div className="terminal-window mt-2 w-64">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red"></div>
              <div className="terminal-dot terminal-dot-yellow"></div>
              <div className="terminal-dot terminal-dot-green"></div>
              <span className="text-muted-foreground text-xs ml-2">portfolio.sh</span>
            </div>
            <div className="p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block p-2 rounded text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-primary/20 text-primary glow-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={16} />
                      <span>${item.command}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;