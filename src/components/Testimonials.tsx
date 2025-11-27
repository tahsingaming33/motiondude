import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Tahsin's editing style perfectly captured our brand voice. The reels he created drove significant engagement and new leads.",
      author: "Trading Niche Creator",
      role: "Personal Brand Client",
    },
    {
      quote: "Professional, creative, and always delivers on time. The UI animations brought our product demo to life.",
      author: "Tech Startup Founder",
      role: "B2B SaaS",
    },
    {
      quote: "Working with Tahsin was effortless. He understood the vision immediately and exceeded expectations.",
      author: "Content Creator",
      role: "YouTube Channel",
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Client</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-secondary/30 -z-0"></span>
            </span>{" "}
            Feedback
          </h2>
          <p className="text-lg text-muted-foreground">
            A few words from the brands and creators I've worked with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-background shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
