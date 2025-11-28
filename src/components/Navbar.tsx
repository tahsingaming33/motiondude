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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "top-2" : ""
      }`}
    >
      <div className={`bg-background/95 backdrop-blur-md shadow-medium rounded-full px-6 py-3 border border-border/50 transition-all duration-300`}>
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center justify-center hover:scale-110 transition-transform"
          >
            <img src={logo} alt="Motion Dude" className="h-10 w-10" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("project-request")} 
                className="bg-primary hover:bg-primary/90 rounded-full"
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
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full mt-2 left-0 right-0 bg-background rounded-2xl border border-border shadow-medium p-4">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 px-4 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("project-request")}
              className="w-full bg-primary hover:bg-primary/90 rounded-full mt-2"
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
