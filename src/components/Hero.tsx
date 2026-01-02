import { ChevronDown, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-[80px]"
    >
      {/* Background Video - Absolute to section only */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/src/assets/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay scoped only to the video area */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-radial opacity-40 z-[1]" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-light/5 blur-[120px] animate-glow-pulse animation-delay-200" />

      <div className="container relative z-10 px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Logo Icon */}
        <div className="mb-10 animate-fade-up">
          <div className="inline-flex items-center justify-center w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border border-primary/40 animate-float">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 flex items-center justify-center backdrop-blur-sm">
              <span className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold">B</span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground mb-5 animate-fade-up animation-delay-200 tracking-tight">
          BARRELBORN
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl tracking-[0.5em] text-primary font-light mb-10 animate-fade-up animation-delay-300">
          DINE & DRAFT
        </p>

        <p className="max-w-lg mx-auto text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-12 animate-fade-up animation-delay-400">
          Crafted beers, artisan cocktails, and culinary excellence in the heart of Thane
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14 animate-fade-up animation-delay-500">
          <Button
            size="lg"
            onClick={() => scrollToSection("menu")}
            className="btn-outline px-8 py-6 text-base sm:text-lg rounded-full w-full sm:w-auto min-w-[200px]"
          >
            Explore Our Menu
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="btn-primary glow-gold px-8 py-6 text-base sm:text-lg rounded-full w-full sm:w-auto min-w-[200px]"
          >
            Reserve a Table
          </Button>
        </div>

        {/* Rating & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 text-muted-foreground animate-fade-up animation-delay-600">
          <div className="flex items-center gap-2.5 group">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary transition-transform duration-300 group-hover:scale-110" 
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            <span className="text-sm sm:text-base font-medium">4.8 on Google</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-border" />
          <div className="flex items-center gap-2 group">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="text-sm sm:text-base">Thane West, Maharashtra</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-primary/50 group-hover:text-primary transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
