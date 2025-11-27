import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import profileImage from "@/assets/profile-tahsin.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-4">
              <img
                src={profileImage}
                alt="Tahsin Mahmud"
                className="w-16 h-16 rounded-full border-4 border-background shadow-medium"
              />
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Video Editor & Motion Designer
              </p>
            </div>

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

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              I'm Tahsin Mahmud, a video editor and motion designer helping brands and creators turn ideas into
              scroll-stopping content.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <p className="text-sm text-muted-foreground">
                <span className="inline-block mr-2">✓</span>2+ years as a freelance editor
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="inline-block mr-2">✓</span>Focused on Reels, ads, YouTube videos & UI animations
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
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

          {/* Right Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-medium">
              <img
                src={heroVisual}
                alt="Video editing workspace"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-highlight/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-teal/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
