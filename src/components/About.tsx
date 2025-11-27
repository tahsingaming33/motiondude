import { Card } from "@/components/ui/card";
import { Users, Clock, Target } from "lucide-react";
import profileImage from "@/assets/profile-tahsin.jpg";

const About = () => {
  const stats = [
    {
      icon: Clock,
      label: "2+ years freelance experience",
    },
    {
      icon: Users,
      label: "Multiple clients across different niches",
    },
    {
      icon: Target,
      label: "Specialized in high-retention, lead-generating content",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <img
                src={profileImage}
                alt="Tahsin Mahmud"
                className="w-full max-w-md mx-auto rounded-3xl shadow-medium"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                About{" "}
                <span className="relative inline-block font-handwritten">
                  <span className="relative z-10">Tahsin</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-secondary/30 -z-0"></span>
                </span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a Video Editor and Motion Designer currently in college. For almost 2 years, I've been working
                  as a freelance editor, helping brands and creators craft videos that generate leads and keep their
                  audience watching.
                </p>
                <p className="font-medium text-foreground">
                  My passion is making engaging, story-driven videos that feel effortless to watch.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 bg-background shadow-soft hover:shadow-medium transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-primary mb-3" />
                  <p className="text-sm font-medium leading-snug">{stat.label}</p>
                </Card>
              ))}
            </div>

            {/* Education */}
            <Card className="p-6 bg-purple-light border-primary/20 shadow-soft">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Currently studying in college</span> – continuously learning and
                experimenting with new editing styles and tools.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
