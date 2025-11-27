import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, TrendingUp } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "Trading Personal Brand",
      description: "Lead-Generating Reels",
      tags: ["Reel", "Lead Gen"],
      featured: true,
      highlight: "Helped a client building their personal brand with trading content that generated more leads and kept viewers hooked.",
    },
    {
      title: "YouTube Long-form Edit",
      description: "Engaging storytelling",
      tags: ["YouTube", "Long-form"],
      featured: false,
    },
    {
      title: "Product Demo",
      description: "UI Animation showcase",
      tags: ["UI Animation", "Demo"],
      featured: false,
    },
    {
      title: "Brand Ad Campaign",
      description: "Social media ad series",
      tags: ["Ad", "Campaign"],
      featured: false,
    },
    {
      title: "Creator Reels Package",
      description: "High-retention short-form",
      tags: ["Reel", "Creator"],
      featured: false,
    },
    {
      title: "Corporate Explainer",
      description: "Professional brand video",
      tags: ["Corporate", "Explainer"],
      featured: false,
    },
  ];

  return (
    <section id="work" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Selected</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-highlight/30 -z-0"></span>
            </span>{" "}
            Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A snapshot of the videos I've edited for brands and creators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer ${
                project.featured ? "sm:col-span-2 lg:col-span-3" : ""
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative bg-gradient-to-br from-purple-light to-background ${
                  project.featured ? "aspect-[21/9]" : "aspect-video"
                } flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all shadow-medium">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  {project.featured && <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0" />}
                </div>

                {project.highlight && (
                  <p className="text-sm text-foreground mb-4 bg-secondary/10 p-3 rounded-lg border border-secondary/20">
                    {project.highlight}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
