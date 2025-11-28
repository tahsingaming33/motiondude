import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    <section id="project-request" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Start</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="16" viewBox="0 0 200 16" preserveAspectRatio="none">
                <path d="M0,10 Q50,4 100,10 T200,10" stroke="#FC787D" strokeWidth="4" fill="none" className="animate-draw-line" />
              </svg>
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
                  placeholder="Enter your name"
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
                  placeholder="Enter your email"
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number (Optional)</Label>
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
                <Label htmlFor="brandName">Brand / Creator Name (Optional)</Label>
                <Input
                  id="brandName"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="h-12"
                  placeholder="Optional"
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
                <Select value={formData.deadline} onValueChange={(value) => setFormData({ ...formData, deadline: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 day">1 day</SelectItem>
                    <SelectItem value="2 days">2 days</SelectItem>
                    <SelectItem value="3 days">3 days</SelectItem>
                    <SelectItem value="4 days">4 days</SelectItem>
                    <SelectItem value="5 days">5 days</SelectItem>
                    <SelectItem value="6 days">6 days</SelectItem>
                    <SelectItem value="7 days">7 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (Optional)</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="$300-$500">$300-$500</SelectItem>
                    <SelectItem value="$500-$700">$500-$700</SelectItem>
                    <SelectItem value="$700-$1000">$700-$1000</SelectItem>
                    <SelectItem value="$1000-$1500">$1000-$1500</SelectItem>
                    <SelectItem value="$1500-$2000">$1500-$2000</SelectItem>
                  </SelectContent>
                </Select>
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
