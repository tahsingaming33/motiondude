import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { useState } from "react";

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
        },
        {
          title: "McDonald's Motion Graphic Remake",
          description: "Animated infographic style",
          tags: ["UI", "Apple style"],
          url: "https://www.youtube.com/watch?v=g2m33404Pyc",
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
      projects: [
        {
          title: "QuakesLegacy Introduction video",
          description: "Engaging long-form YouTube introduction",
          tags: ["YouTube video", "Explainer"],
          url: "https://youtu.be/kAxTT5nkiQI",
        },
        {
          title: "Motivational video",
          description: "Inspiring storytelling with cinematic cuts",
          tags: ["Motivational", "YouTube"],
          url: "https://youtu.be/gsaPejctklY",
        },
        {
          title: "YouTube Long-form Edit",
          description: "Long-form storytelling video",
          tags: ["YouTube", "Long form"],
          url: "https://youtu.be/xjekzKwZ3QI",
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
    <section id="work" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Selected</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="16"
                viewBox="0 0 200 16"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q50,4 100,10 T200,10"
                  stroke="#FC787D"
                  strokeWidth="4"
                  fill="none"
                  className="animate-draw-line"
                />
              </svg>
            </span>{" "}
            Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A snapshot of the videos I've edited for brands and creators.
          </p>
        </div>

        {/* All Categories - Layer by Layer */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold">{category.name}</h3>
                <div className="flex-grow h-px bg-border"></div>
              </div>

              {/* Projects Grid */}
              <div
                className={`grid gap-4 ${
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
                    const thumbnailUrl = videoId 
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
                        className="group relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div
                          className={`relative bg-gradient-to-br from-purple-light to-background flex items-center justify-center ${
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
                                  className="absolute inset-0 w-full h-full object-cover"
                                  onError={(e) => {
                                    // Fallback to default thumbnail if maxresdefault doesn't exist
                                    e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                  }}
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all shadow-medium">
                                <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                              </div>
                            </>
                          )}
                        </div>

                      <div className="p-4">
                        <div className="mb-2">
                          <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {project.tags?.map((tag: string, tagIndex: number) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
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
