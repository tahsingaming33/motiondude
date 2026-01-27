import { Card } from "@/components/ui/card";
import { Film, Megaphone, Sparkles, Video, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Reels Editing",
      description: "Fast-paced, engaging short-form content optimized for Instagram, TikTok, and YouTube Shorts.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Megaphone,
      title: "Ad Videos",
      description: "Conversion-focused video ads that capture attention and drive results for your campaigns.",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: Sparkles,
      title: "UI Animation",
      description: "Smooth, professional motion graphics and interface animations for apps and websites.",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      icon: Video,
      title: "YouTube Editing",
      description: "Long-form content editing with engaging pacing, graphics, and retention-focused storytelling.",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Briefcase,
      title: "Corporate Brand Videos",
      description: "Professional brand videos that communicate your message with clarity and style.",
      gradient: "from-violet-500/20 to-purple-500/20",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle top gradient divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">What I</span>{" "}
            <span className="relative inline-block font-handwritten text-primary animate-handwriting">
              <span className="relative z-10">Do</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="16" viewBox="0 0 200 16" preserveAspectRatio="none">
                <path 
                  d="M0,10 Q50,4 100,10 T200,10" 
                  stroke="hsl(250, 85%, 65%)" 
                  strokeWidth="4" 
                  fill="none" 
                  className="animate-draw-underline" 
                  strokeDasharray="200" 
                  strokeDashoffset="200" 
                />
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
              className="p-8 bg-card border-border/50 group cursor-pointer card-hover glow-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
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
