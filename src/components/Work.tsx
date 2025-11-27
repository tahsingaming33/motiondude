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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                <div className="relative bg-gradient-to-br from-purple-light to-background aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all shadow-medium">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
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
