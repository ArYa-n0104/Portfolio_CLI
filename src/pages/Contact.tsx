import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TerminalPrompt from "@/components/TerminalPrompt";

const Contact = () => {
  const [showContent, setShowContent] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aryansi0109@gmail.com",
      link: "mailto:aryansi0109@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8600325326",
      link: "tel:+918600325326"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ArYa-n0104",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/aryan-singh-ba9371219",
      color: "text-secondary"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent! (Form submission logic to be implemented)");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 md:pl-64">
      <div className="max-w-5xl mx-auto pt-20">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
            <span className="text-muted-foreground text-xs ml-2">contact.sh</span>
          </div>
          <div className="p-6">
            <TerminalPrompt 
              text="ping Aryan --connect" 
              onComplete={() => setShowContent(true)}
            />
            
            {showContent && (
              <div className="mt-6 animate-slide-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Contact Form */}
                  <div className="space-y-6">
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="flex items-center gap-2">
                          <Send className="text-primary" size={16} />
                          <span className="text-sm font-medium">Send Message</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="text-muted-foreground text-sm block mb-2">Name</label>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your name"
                              className="bg-muted border-border text-foreground"
                              required
                            />
                          </div>
                          <div>
                            <label className="text-muted-foreground text-sm block mb-2">Email</label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your.email@example.com"
                              className="bg-muted border-border text-foreground"
                              required
                            />
                          </div>
                          <div>
                            <label className="text-muted-foreground text-sm block mb-2">Message</label>
                            <Textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Your message here..."
                              className="bg-muted border-border text-foreground min-h-[120px]"
                              required
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          >
                            <Send size={16} className="mr-2" />
                            Send Message
                          </Button>
                        </form>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <span className="text-sm font-medium">Social Networks</span>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                          {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                              <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-2 p-3 rounded bg-muted hover:bg-muted/70 transition-colors group"
                              >
                                <Icon className={`${social.color} group-hover:scale-110 transition-transform`} size={24} />
                                <span className="text-muted-foreground text-xs">{social.label}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="flex items-center gap-2">
                          <Mail className="text-secondary" size={16} />
                          <span className="text-sm font-medium">Contact Information</span>
                        </div>
                      </div>
                      <div className="p-4 space-y-4">
                        {contactInfo.map((info) => {
                          const Icon = info.icon;
                          return (
                            <div key={info.label} className="flex items-center gap-3">
                              <Icon className="text-primary" size={20} />
                              <div>
                                <div className="text-muted-foreground text-sm">{info.label}</div>
                                <a 
                                  href={info.link}
                                  className="text-foreground hover:text-primary transition-colors"
                                >
                                  {info.value}
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="terminal-window">
                      <div className="p-6">
                        <h3 className="text-accent text-lg mb-4 glow-accent">Let's Build Something Amazing</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          I'm always interested in new opportunities, whether it's a full-time position, 
                          freelance project, or just a chat about technology. Don't hesitate to reach out!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
