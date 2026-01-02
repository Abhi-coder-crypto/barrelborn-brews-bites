import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuCategories from "@/components/MenuCategories";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
