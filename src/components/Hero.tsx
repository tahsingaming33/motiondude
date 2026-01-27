import { Button } from "@/components/ui/button";
import AvailabilityBadge from "./AvailabilityBadge";
import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 text-center flex flex-col items-center">
          {/* Availability Badge */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <AvailabilityBadge />
          </div>
          
          {/* Subtitle */}
          <p 
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Video Editor & Motion Designer
          </p>

          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="font-handwritten text-5xl sm:text-6xl lg:text-8xl block mb-4 text-primary animate-handwriting">
              Engaging videos
            </span>
            <span className="font-bold text-foreground">
              that keep viewers{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">hooked</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path 
                    d="M0,8 Q50,2 100,8 T200,8" 
                    stroke="hsl(250, 85%, 65%)" 
                    strokeWidth="3" 
                    fill="none" 
                    className="animate-draw-underline" 
                    strokeDasharray="200" 
                    strokeDashoffset="200" 
                  />
                </svg>
              </span>
              .
            </span>
          </h1>

          {/* Credentials */}
          <div 
            className="flex flex-col sm:flex-row gap-4 pt-2 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </span>
              2+ years as a freelance editor
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xs">✓</span>
              </span>
              Focused on Reels, ads, YouTube videos & UI animations
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:shadow-glow hover:scale-105"
              onClick={() => scrollToSection("work")}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 bg-card/50 backdrop-blur-sm group px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:bg-card hover:border-primary/50"
              onClick={() => scrollToSection("project-request")}
            >
              Request a Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Availability Text */}
          <p 
            className="text-sm text-muted-foreground pt-4 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Available for{" "}
            <span className="relative inline-block text-foreground font-medium">
              brands & creators
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </span>
            {" "}worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
