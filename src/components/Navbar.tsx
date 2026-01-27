import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Work", id: "work" },
    { label: "Services", id: "services" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "top-2" : ""
      }`}
    >
      <div className={`glass rounded-full px-6 py-3 shadow-medium transition-all duration-500 ${
        isScrolled ? "shadow-glow" : ""
      }`}>
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <img src={logo} alt="Motion Dude" className="h-10 w-10" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("project-request")} 
                className="bg-primary hover:bg-primary/90 rounded-full px-6 transition-all duration-300 hover:shadow-glow hover:scale-105"
                size="sm"
              >
                Request a Project
              </Button>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full mt-2 left-0 right-0 glass rounded-2xl shadow-medium p-4 animate-fade-in">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("project-request")}
              className="w-full bg-primary hover:bg-primary/90 rounded-full mt-2 transition-all duration-300"
            >
              Request a Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
