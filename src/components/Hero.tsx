import { ChevronDown, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-pattern overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />

      <div className="container relative z-10 px-4 text-center pt-20">
        {/* Logo Icon */}
        <div className="mb-8 animate-fade-up">
          <div className="inline-flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-primary/60 animate-float">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-primary/40 flex items-center justify-center">
              <span className="font-display text-4xl md:text-5xl text-primary">B</span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-fade-up animation-delay-200">
          BARRELBORN
        </h1>
        
        <p className="text-lg md:text-xl tracking-[0.4em] text-primary mb-8 animate-fade-up animation-delay-400">
          • DINE & DRAFT •
        </p>

        <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10 animate-fade-up animation-delay-600">
          Crafted beers, artisan cocktails, and culinary excellence in the heart of Thane
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <Button
            size="lg"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
          >
            Explore Our Menu
          </Button>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold px-8 py-6 text-lg"
          >
            Reserve a Table
          </Button>
        </div>

        {/* Rating & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground animate-fade-up" style={{ animationDelay: "1s" }}>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm">4.8 on Google</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Thane West, Maharashtra</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
