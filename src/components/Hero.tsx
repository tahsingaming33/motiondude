import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6 animate-fade-in text-center flex flex-col items-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground font-medium">
            Video Editor & Motion Designer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="font-handwritten text-5xl sm:text-6xl lg:text-7xl block mb-2">
              Engaging videos
            </span>
            <span className="font-bold">
              that keep viewers{" "}
              <span className="relative inline-block">
                <span className="relative z-10">hooked</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-highlight/30 -z-0"></span>
              </span>
              .
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <p className="text-sm text-muted-foreground">
              <span className="inline-block mr-2">✓</span>2+ years as a freelance editor
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="inline-block mr-2">✓</span>Focused on Reels, ads, YouTube videos & UI animations
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              onClick={() => scrollToSection("work")}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 group"
              onClick={() => scrollToSection("project-request")}
            >
              Request a Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Available for brands & creators worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
