import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ServiceSection from "@/components/service/ServiceSection";
import ProjectSection from "@/components/projects/ProjectSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-full overflow-x-hidden">
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectSection />

        {/* Services Section */}
        <ServiceSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
