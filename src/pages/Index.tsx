import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuCategories from "@/components/MenuCategories";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { MouseGlow, GoldenDust } from "@/components/Effects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GoldenDust />
      <MouseGlow />
      <Header />
      <main>
        <Hero />
        <About />
        <MenuCategories />
        <Testimonials />
        <Gallery />
        <MapSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
