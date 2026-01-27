import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageCircle, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "tahasinmahmud12@gmail.com",
      href: "mailto:tahasinmahmud12@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801940295660",
      href: "tel:+8801940295660",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message on WhatsApp",
      href: "https://wa.me/8801940295660",
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/motiondudehere/", username: "@motiondudehere" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@motiondude1", username: "@motiondude1" },
    { icon: Twitter, label: "X", href: "https://x.com/motiondudegone", username: "@motiondudegone" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tahsin-mahmud-bdt/", username: "tahsin-mahmud-bdt" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in{" "}
            <span className="relative inline-block font-handwritten">
              <span className="relative z-10">Touch</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-teal/30 -z-0"></span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a question or an idea? Reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="p-8 bg-background shadow-soft space-y-6">
            <div>
              <h3 className="font-semibold text-xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (method.label === "Email" || method.label === "Phone") {
                        copyToClipboard(method.value, method.label);
                      } else {
                        window.open(method.href, "_blank", "noopener,noreferrer");
                      }
                    }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group w-full text-left"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{method.value}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Prefer to talk first? Send me a message on WhatsApp.
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/8801940295660", "_blank", "noopener,noreferrer")}
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-8 bg-background shadow-soft">
            <h3 className="font-semibold text-xl mb-6">Follow My Work</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.href, "_blank", "noopener,noreferrer")}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group w-full text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-light to-background flex items-center justify-center group-hover:scale-110 transition-transform">
                    <social.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">{social.label}</p>
                    <p className="text-sm text-muted-foreground">{social.username}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Follow me on social media to see my latest work, behind-the-scenes content, and editing tips.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
