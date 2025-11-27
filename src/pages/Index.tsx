import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ProjectRequest from "@/components/ProjectRequest";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundShapes from "@/components/BackgroundShapes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundShapes />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Services />
        <Testimonials />
        <ProjectRequest />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
