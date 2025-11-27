import { Card } from "@/components/ui/card";
import { TrendingUp, Eye, Users } from "lucide-react";

const Results = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Clients{" "}
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Work With Me</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-highlight/30 -z-0"></span>
            </span>
          </h2>
        </div>

        <Card className="max-w-5xl mx-auto p-8 sm:p-12 shadow-medium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0"></div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full">
                <p className="text-sm font-semibold text-secondary">Case Study</p>
              </div>

              <h3 className="text-3xl font-bold">Trading Personal Brand</h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I worked with a client building their personal brand in the trading niche. By focusing on hooks,
                pacing, and clear visual storytelling, we created content that brought in more leads and kept viewers
                watching till the end.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">More leads generated</span> from short-form content
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">Improved viewer retention</span> with hook-first editing
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">Built engaged audience</span> through consistent quality
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-light to-background rounded-2xl shadow-soft flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-secondary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Video performance sample</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Results;
