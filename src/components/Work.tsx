import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { useState } from "react";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("Motion graphic");

  const categories = [
    {
      name: "Motion graphic",
      projects: [
        {
          title: "Product Demo Animation",
          description: "UI showcase with smooth transitions",
          tags: ["UI", "Demo"],
        },
        {
          title: "Brand Explainer",
          description: "Animated infographic style",
          tags: ["Explainer", "2D"],
        },
        {
          title: "Logo Animation",
          description: "Dynamic brand reveal",
          tags: ["Logo", "Intro"],
        },
      ],
    },
    {
      name: "Long form",
      projects: [],
    },
    {
      name: "Short form",
      projects: [],
    },
  ];

  const currentCategory = categories.find(cat => cat.name === activeCategory);

  return (
    <section id="work" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Selected</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="16" viewBox="0 0 200 16" preserveAspectRatio="none">
                <path d="M0,10 Q50,4 100,10 T200,10" stroke="#FC787D" strokeWidth="4" fill="none" className="animate-draw-line" />
              </svg>
            </span>{" "}
            Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A snapshot of the videos I've edited for brands and creators.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-4 ${
          activeCategory === "Short form" 
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-4xl mx-auto" 
            : "sm:grid-cols-2 lg:grid-cols-3"
        }`}>
          {currentCategory?.projects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Coming soon...</p>
            </div>
          ) : (
            currentCategory?.projects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative bg-gradient-to-br from-purple-light to-background flex items-center justify-center ${
                  activeCategory === "Short form" ? "aspect-[9/16]" : "aspect-video"
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all shadow-medium">
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
