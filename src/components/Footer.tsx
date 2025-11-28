const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Motion Dude. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
