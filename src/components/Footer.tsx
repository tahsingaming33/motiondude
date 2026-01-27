const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50 relative">
      {/* Gradient overlay at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Motion Dude. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            {["Home", "Work", "Services", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
