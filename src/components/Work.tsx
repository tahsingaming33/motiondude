import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { useState } from "react";
import maagnusThumbnail from "@/assets/maagnus-thumbnail.jpg";
import stripeThumbnail from "@/assets/stripe-thumbnail.jpg";
import mcdonaldsThumbnail from "@/assets/mcdonalds-thumbnail.jpg";
import quakeslegacyThumbnail from "@/assets/quakeslegacy-thumbnail.jpg";
import calendlyThumbnail from "@/assets/calendly-thumbnail.jpg";
import klyraThumbnail from "@/assets/motion-thumbnail-4.png";

// Helper function to extract YouTube video ID from various URL formats
const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
};

const Work = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  
  const categories = [
    {
      name: "Motion graphic",
      projects: [
        {
          title: "Stripe SaaS Demo Video",
          description: "UI showcase with smooth transitions",
          tags: ["SaaS", "Explainer"],
          url: "https://youtu.be/XKqEbWrIgXA",
          customThumbnail: stripeThumbnail,
        },
        {
          title: "McDonald's Motion Graphic Remake",
          description: "Animated infographic style",
          tags: ["UI", "Apple style"],
          url: "https://www.youtube.com/watch?v=g2m33404Pyc",
          customThumbnail: mcdonaldsThumbnail,
        },
        {
          title: "Maagnus SaaS Demo Video",
          description: "Stylized motion graphics animation",
          tags: ["SaaS", "Demo video", "Explainer video"],
          url: "https://youtu.be/W7llHXOgpl0",
          customThumbnail: maagnusThumbnail,
        },
        {
          title: "QuakesLegacy Introduction video",
          description: "Engaging long-form YouTube introduction",
          tags: ["YouTube video", "Explainer"],
          url: "https://youtu.be/kAxTT5nkiQI",
          customThumbnail: quakeslegacyThumbnail,
        },
        {
          title: "Calendly Ui Animation",
          description: "Sleek UI animation showcase",
          tags: ["Ui animation", "Motion", "Apple style"],
          url: "https://youtube.com/shorts/0reDsA_9aMg",
          customThumbnail: calendlyThumbnail,
        },
        {
          title: "Klyra Design",
          description: "Clean motion graphics branding",
          tags: ["Motion", "Branding"],
          url: "https://youtu.be/PeGg6NdF59M",
          customThumbnail: klyraThumbnail,
        },
      ],
    },
    {
      name: "Long form",
      projects: [
        {
          title: "Motivational video",
          description: "Inspiring storytelling with cinematic cuts",
          tags: ["Motivational", "YouTube"],
          url: "https://youtu.be/gsaPejctklY",
        },
        {
          title: "Coming Soon",
          description: "New project in the works",
          tags: ["Upcoming"],
        },
      ],
    },
    {
      name: "Short form",
      projects: [
        {
          url: "https://youtube.com/shorts/ZfkVxPcEtJg",
          title: "Short-form Edit 1",
          description: "High-impact reel edit",
          tags: ["Reel", "Short"],
        },
        {
          url: "https://youtube.com/shorts/6oWz9p_cR8I",
          title: "Short-form Edit 2",
          description: "Dynamic transitions and pacing",
          tags: ["Reel", "Short"],
        },
        {
          url: "https://youtube.com/shorts/ixlYjJjxkss",
          title: "Short-form Edit 3",
          description: "Snappy, scroll-stopping content",
          tags: ["Reel", "Short"],
        },
        {
          url: "https://youtube.com/shorts/qSViH5uKNXI",
          title: "Short-form Edit 4",
          description: "Fast-paced storytelling",
          tags: ["Reel", "Short"],
        },
        {
          url: "https://youtube.com/shorts/hlU7Njb3j7g",
          title: "Short-form Edit 5",
          description: "Eye-catching motion graphics",
          tags: ["Reel", "Short"],
        },
        {
          url: "https://youtube.com/shorts/DLcAWdVQBh4",
          title: "Short-form Edit 6",
          description: "Bold text and animations",
          tags: ["Reel", "Short"],
        },
        {
          url: "https://youtube.com/shorts/cbb_m2etYSQ",
          title: "Short-form Edit 7",
          description: "Smooth cuts and rhythm",
          tags: ["Reel", "Short"],
        },
      ],
    },
  ];

  return (
    <section id="work" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="relative inline-block font-handwritten text-primary animate-handwriting">
              <span className="relative z-10">Selected</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="16"
                viewBox="0 0 200 16"
                preserveAspectRatio="none"
              >
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
            </span>{" "}
            <span className="text-foreground">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A snapshot of the videos I've edited for brands and creators.
          </p>
        </div>

        {/* All Categories - Layer by Layer */}
        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <div 
              key={category.name} 
              className="space-y-8 animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{category.name}</h3>
                <div className="flex-grow h-px bg-gradient-to-r from-border to-transparent"></div>
              </div>

              {/* Projects Grid */}
              <div
                className={`grid gap-6 ${
                  category.name === "Short form"
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {category.projects.length === 0 ? (
                  <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                ) : (
                  category.projects.map((project, index) => {
                    const videoId = getYouTubeVideoId(project.url || "");
                    const isPlaying = playingVideo === `${category.name}-${index}`;
                    const thumbnailUrl = project.customThumbnail 
                      ? project.customThumbnail 
                      : videoId 
                        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                        : null;

                    return (
                      <Card
                        key={index}
                        onClick={() => {
                          if (videoId && !isPlaying) {
                            setPlayingVideo(`${category.name}-${index}`);
                          }
                        }}
                        className="group relative overflow-hidden bg-card border-border/50 cursor-pointer card-hover glow-border"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div
                          className={`relative bg-gradient-to-br from-muted to-card flex items-center justify-center overflow-hidden ${
                            category.name === "Short form" ? "aspect-[9/16]" : "aspect-video"
                          }`}
                        >
                          {isPlaying && videoId ? (
                            <iframe
                              className="absolute inset-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                              title={project.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <>
                              {thumbnailUrl && (
                                <img
                                  src={thumbnailUrl}
                                  alt={project.title}
                                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  onError={(e) => {
                                    e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                  }}
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-glow">
                                <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                              </div>
                            </>
                          )}
                        </div>

                        <div className="p-5">
                          <div className="mb-3">
                            <h3 className="font-semibold text-base mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tags?.map((tag: string, tagIndex: number) => (
                              <Badge 
                                key={tagIndex} 
                                variant="secondary" 
                                className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
