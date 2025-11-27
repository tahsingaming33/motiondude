import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    // ... keep existing code
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Client{" "}
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Feedback</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="16" viewBox="0 0 200 16" preserveAspectRatio="none">
                <path d="M0,10 Q50,4 100,10 T200,10" stroke="#FBB130" strokeWidth="4" fill="none" className="animate-draw-line" />
              </svg>
            </span>
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
