import { Card } from "@/components/ui/card";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      image: testimonial1,
      rotation: -2,
      scale: 1,
    },
    {
      image: testimonial2,
      rotation: 3,
      scale: 0.95,
    },
    {
      image: testimonial3,
      rotation: -3,
      scale: 1.05,
    },
    {
      image: testimonial4,
      rotation: 2,
      scale: 0.98,
    },
    {
      image: testimonial5,
      rotation: -1,
      scale: 1.02,
    },
    {
      image: testimonial6,
      rotation: 2.5,
      scale: 0.96,
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Client{" "}
            <span className="relative inline-block font-handwritten animate-handwriting">
              <span className="relative z-10">Feedback</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="16" viewBox="0 0 200 16" preserveAspectRatio="none">
                <path d="M0,10 Q50,4 100,10 T200,10" stroke="#FBB130" strokeWidth="4" fill="none" className="animate-draw-underline" strokeDasharray="200" strokeDashoffset="200" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A few words from the brands and creators I've worked with.
          </p>
        </div>

        {/* Scattered floating cards layout */}
        <div className="relative max-w-6xl mx-auto min-h-[600px]">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="absolute overflow-hidden bg-background shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              style={{
                transform: `rotate(${testimonial.rotation}deg) scale(${testimonial.scale})`,
                animation: `float-${index % 3} 6s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`,
                // Scattered positioning
                left: `${(index % 3) * 30 + 5}%`,
                top: `${Math.floor(index / 3) * 280}px`,
                maxWidth: '320px',
                borderRadius: '1rem',
              }}
            >
              <div className="group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-300">
                <img 
                  src={testimonial.image} 
                  alt={`Client feedback ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(${testimonials[0]?.rotation || 0}deg); }
          50% { transform: translateY(-8px) rotate(${(testimonials[0]?.rotation || 0) + 1}deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(${testimonials[1]?.rotation || 0}deg); }
          50% { transform: translateY(-10px) rotate(${(testimonials[1]?.rotation || 0) - 1}deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(${testimonials[2]?.rotation || 0}deg); }
          50% { transform: translateY(-6px) rotate(${(testimonials[2]?.rotation || 0) + 2}deg); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
