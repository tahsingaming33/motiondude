import { Card } from "@/components/ui/card";
import { Film, Megaphone, Sparkles, Video, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Reels Editing",
      description: "Short, punchy edits optimized for attention and watch time.",
      color: "text-primary",
    },
    {
      icon: Megaphone,
      title: "Ad Videos",
      description: "Conversion-focused edits for paid campaigns and social ads.",
      color: "text-secondary",
    },
    {
      icon: Sparkles,
      title: "UI Animation",
      description: "Smooth interface animations to showcase apps and digital products.",
      color: "text-highlight",
    },
    {
      icon: Video,
      title: "YouTube Editing",
      description: "Clean, engaging edits for long-form and short-form YouTube content.",
      color: "text-primary",
    },
    {
      icon: Briefcase,
      title: "Corporate Brand Videos",
      description: "Professional edits for company profiles, explainers, and internal content.",
      color: "text-secondary",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What I{" "}
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Do</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-teal/30 -z-0"></span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I help brands and creators with end-to-end video content, from idea to final export.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-background shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-light to-background flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
