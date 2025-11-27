import { Card } from "@/components/ui/card";
import { Film, Megaphone, Sparkles, Video, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    // ... keep existing code

  ];

  return (
    <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What I{" "}
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Do</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="16" viewBox="0 0 200 16" preserveAspectRatio="none">
                <path d="M0,10 Q50,4 100,10 T200,10" stroke="#1BB6F9" strokeWidth="4" fill="none" className="animate-draw-line" />
              </svg>
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
