import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="terminal-window max-w-md w-full">
        <div className="terminal-header">
          <div className="terminal-dot terminal-dot-red"></div>
          <div className="terminal-dot terminal-dot-yellow"></div>
          <div className="terminal-dot terminal-dot-green"></div>
          <span className="text-muted-foreground text-xs ml-2">error.sh</span>
        </div>
        <div className="p-6 text-center space-y-6">
          <div className="flex justify-center">
            <AlertTriangle className="text-accent" size={64} />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary glow-primary mb-2">404</h1>
            <p className="text-lg text-secondary glow-secondary mb-4">Command Not Found</p>
            <p className="text-muted-foreground text-sm">
              The path "{location.pathname}" does not exist in the file system.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">ls: cannot access '{location.pathname}': No such file or directory</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">Suggestion: Try 'cd /' to return home</span>
            </div>
          </div>
          <a href="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Home size={16} className="mr-2" />
              cd ~/
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
