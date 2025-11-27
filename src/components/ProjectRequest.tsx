import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ProjectRequest = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    brandName: "",
    projectTypes: [] as string[],
    description: "",
    deadline: "",
    budget: "",
  });

  const projectTypes = [
    "Reels",
    "Ad Video",
    "YouTube Editing",
    "UI Animation",
    "Corporate Video",
    "Other",
  ];

  const handleCheckboxChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Project request sent!",
      description: "I'll get back to you within 24-48 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      brandName: "",
      projectTypes: [],
      description: "",
      deadline: "",
      budget: "",
    });
  };

  return (
    <section id="project-request" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Start</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-highlight/30 -z-0"></span>
            </span>{" "}
            a Project
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell me about the video you want to create, and I'll get back to you with ideas and a quote.
          </p>
        </div>

        <Card className="p-8 sm:p-12 shadow-medium">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="h-12"
                  placeholder="Optional"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brandName">Brand / Creator Name</Label>
                <Input
                  id="brandName"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Project Type *</Label>
              <div className="grid sm:grid-cols-3 gap-3">
                {projectTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={formData.projectTypes.includes(type)}
                      onCheckedChange={() => handleCheckboxChange(type)}
                    />
                    <label htmlFor={type} className="text-sm cursor-pointer">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Tell me about your project goals, target audience, and vision..."
                className="min-h-32"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline / Timeline</Label>
                <Input
                  id="deadline"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  placeholder="e.g., 2 weeks, ASAP"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (Optional)</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="e.g., $500-$1000"
                  className="h-12"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 group">
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Send Project Request
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              I usually reply within 24–48 hours.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ProjectRequest;
