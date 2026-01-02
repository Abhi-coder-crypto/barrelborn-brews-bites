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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-[80px]"
    >
      {/* Background Video - Scoped strictly below the header */}
      <div className="absolute inset-0 top-[80px] h-[calc(100vh-80px)] w-full pointer-events-none z-0">
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
      <div className="absolute inset-0 bg-background pointer-events-none z-[-1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial opacity-40 z-[1] pointer-events-none" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-light/5 blur-[120px] animate-glow-pulse animation-delay-200" />

      <div className="container relative z-10 px-4 sm:px-6 text-center flex flex-col items-center justify-center h-full pt-12 pb-24">
        {/* Logo Icon with Double Rings and Glow */}
        <div className="mb-6 animate-fade-up scale-90 sm:scale-100">
          <div className="relative inline-flex items-center justify-center w-28 h-28 md:w-32 md:h-32">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[ping_3s_ease-in-out_infinite]" />
            {/* Middle Ring */}
            <div className="absolute inset-2 rounded-full border border-primary/40 animate-float" />
            {/* Inner Ring & Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/60 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(201,169,98,0.3)] group">
              <span className="font-display text-4xl md:text-5xl text-gradient-gold drop-shadow-lg">B</span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-3 animate-fade-up animation-delay-200 tracking-tight leading-tight">
          BARRELBORN
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg tracking-[0.5em] text-primary font-light mb-6 animate-fade-up animation-delay-300">
          DINE & DRAFT
        </p>

        <p className="max-w-md mx-auto text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 animate-fade-up animation-delay-400 px-4">
          Crafted beers, artisan cocktails, and culinary excellence in the heart of Thane
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 animate-fade-up animation-delay-500 w-full px-6 max-w-xl">
          <Button
            size="lg"
            onClick={() => scrollToSection("menu")}
            className="btn-outline px-6 py-5 text-sm sm:text-base rounded-full w-full sm:w-auto min-w-[180px]"
          >
            Explore Our Menu
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="btn-primary glow-gold px-6 py-5 text-sm sm:text-base rounded-full w-full sm:w-auto min-w-[180px]"
          >
            Reserve a Table
          </Button>
        </div>

        {/* Rating & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-muted-foreground animate-fade-up animation-delay-600 mb-4">
          <div className="flex items-center gap-2 group">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary transition-transform duration-300 group-hover:scale-110" 
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium">4.8 on Google</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2 group">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xs sm:text-sm">Thane West, Maharashtra</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group z-20"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 text-primary/50 group-hover:text-primary transition-colors duration-300" />
      </button>
    </section>
  );
};

export default Hero;
