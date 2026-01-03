import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuCategories from "@/components/MenuCategories";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BeerBottle from "@/components/BeerBottle";

const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background">
      <BeerBottle />
      <Header />
      <main>
        <section className="snap-start h-screen">
          <Hero />
        </section>
        <section className="snap-start h-screen">
          <About />
        </section>
        <section className="snap-start h-screen">
          <MenuCategories />
        </section>
        <section className="snap-start h-screen overflow-hidden">
          <Gallery />
        </section>
        <section className="snap-start h-screen">
          <MapSection />
        </section>
        <section className="snap-start h-screen">
          <ContactForm />
        </section>
      </main>
      <section className="snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
