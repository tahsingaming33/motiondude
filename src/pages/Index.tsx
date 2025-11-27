import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import ProjectRequest from "@/components/ProjectRequest";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Results />
        <Testimonials />
        <ProjectRequest />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
