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

      <div className="container relative z-10 px-4 sm:px-6 text-center flex flex-col items-center justify-center h-full pt-24 pb-20">
        {/* Logo Icon with Double Rings and Glow */}
        <div className="mb-6 animate-fade-up scale-90 sm:scale-100">
          <div className="relative inline-flex items-center justify-center w-28 h-28 md:w-32 md:h-32">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[ping_3s_ease-in-out_infinite]" />
            {/* Middle Ring */}
            <div className="absolute inset-2 rounded-full border border-primary/40 animate-float" />
            {/* Inner Ring & Glow */}
            <div className="absolute inset-4 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(201,169,98,0.3)] group">
              <img 
                src="/src/assets/logo.png" 
                alt="BarrelBorn Logo" 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
              />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-4 animate-fade-up animation-delay-200 tracking-tight leading-tight">
          BARRELBORN
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg tracking-[0.5em] text-primary font-bold mb-8 animate-fade-up animation-delay-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          DINE & DRAFT
        </p>

        <p className="max-w-md mx-auto text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 animate-fade-up animation-delay-400 px-4">
          Where the city chills. Crafted beers, artisan cocktails, and culinary excellence in the heart of Thane
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
          <a 
            href="https://www.google.com/search?sca_esv=7dcbc37479457eb0&sxsrf=AE3TifOlTeAcP_gEowkoFv3R5BVqDq4fTQ:1767374245174&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9moAMXsS0ppftIa0AAstM7PU3IPOsk0_n4z2GibB7zwuuqJ_Zbkf-8VublAkI9bQoriLtiFfWv2pIsrhadjPCDP3j-pqozS1djY7fZfyFv3bCDwwiVEvOcINNV4GJ6DdbUIl5o%3D&q=Barrelborn+%7C+Dine+%26+Draft+%7C+Thane+Reviews&sa=X&ved=2ahUKEwjWkcaQru2RAxXekq8BHaEaJlYQ0bkNegQIKhAE&biw=1280&bih=632&dpr=1.5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group hover:text-primary transition-colors"
          >
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
          </a>
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
