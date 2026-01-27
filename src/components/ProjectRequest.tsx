import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const ProjectRequest = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        whatsapp: formData.whatsapp || "Not provided",
        brand_name: formData.brandName || "Not provided",
        project_types: formData.projectTypes.join(", ") || "Not specified",
        description: formData.description,
        deadline: formData.deadline || "Not specified",
        budget: formData.budget || "Not specified",
      };

      await emailjs.send(
        'service_jt6qxw7',
        'template_xwlg5dc',
        templateParams,
        '9bGP8MzDiD46xuquV'
      );

      toast({
        title: "Project request sent!",
        description: "I'll get back to you within 24-48 hours.",
      });

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
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send request",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="project-request" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle top gradient divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="relative inline-block font-handwritten text-primary">
              <span className="relative z-10">Start</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="16" viewBox="0 0 200 16" preserveAspectRatio="none">
                <path 
                  d="M0,10 Q50,4 100,10 T200,10" 
                  stroke="hsl(250, 85%, 65%)" 
                  strokeWidth="4" 
                  fill="none" 
                  className="animate-draw-line" 
                />
              </svg>
            </span>{" "}
            <span className="text-foreground">a Project</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell me about the video you want to create, and I'll get back to you with ideas and a quote.
          </p>
        </div>

        <Card className="p-8 sm:p-12 bg-card border-border/50 shadow-glow glow-border">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground">WhatsApp Number (Optional)</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                  placeholder="Optional"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brandName" className="text-foreground">Brand / Creator Name (Optional)</Label>
                <Input
                  id="brandName"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-foreground">Project Type *</Label>
              <div className="grid sm:grid-cols-3 gap-4">
                {projectTypes.map((type) => (
                  <div 
                    key={type} 
                    className={`flex items-center space-x-3 p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                      formData.projectTypes.includes(type) 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border/50 hover:border-primary/50'
                    }`}
                    onClick={() => handleCheckboxChange(type)}
                  >
                    <Checkbox
                      id={type}
                      checked={formData.projectTypes.includes(type)}
                      onCheckedChange={() => handleCheckboxChange(type)}
                      className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label htmlFor={type} className="text-sm cursor-pointer text-foreground">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-foreground">Project Description *</Label>
              <Textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Tell me about your project goals, target audience, and vision..."
                className="min-h-32 bg-secondary/50 border-border/50 focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="deadline" className="text-foreground">Deadline / Timeline</Label>
                <Select value={formData.deadline} onValueChange={(value) => setFormData({ ...formData, deadline: value })}>
                  <SelectTrigger className="h-12 bg-secondary/50 border-border/50">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="3 days">3 days</SelectItem>
                    <SelectItem value="4 days">4 days</SelectItem>
                    <SelectItem value="5 days">5 days</SelectItem>
                    <SelectItem value="6 days">6 days</SelectItem>
                    <SelectItem value="7 days">7 days</SelectItem>
                    <SelectItem value="no-timeline">Don't have any</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-foreground">Budget Range (Optional)</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger className="h-12 bg-secondary/50 border-border/50">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="$500-$700">$500-$700</SelectItem>
                    <SelectItem value="$700-$1000">$700-$1000</SelectItem>
                    <SelectItem value="$1000-$1500">$1000-$1500</SelectItem>
                    <SelectItem value="$1500-$2000">$1500-$2000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 group rounded-full py-6 text-base font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Project Request
                </>
              )}
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
