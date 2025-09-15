import { useEffect, useState } from "react";

interface TerminalPromptProps {
  text: string;
  delay?: number;
  showCursor?: boolean;
  onComplete?: () => void;
}

const TerminalPrompt = ({ text, delay = 50, showCursor = true, onComplete }: TerminalPromptProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, delay, isComplete, onComplete]);

  return (
    <div className="font-mono">
      <span className="text-primary">$</span>
      <span className="text-foreground ml-2">{displayText}</span>
      {showCursor && (
        <span className={`cursor ${isComplete ? 'animate-blink' : ''}`}>|</span>
      )}
    </div>
  );
};

export default TerminalPrompt;