import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuCategories from "@/components/MenuCategories";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <MenuCategories />
        </div>
        <div className="reveal">
          <Testimonials />
        </div>
        <div className="reveal">
          <Gallery />
        </div>
        <div className="reveal">
          <MapSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
