import { Beer, Utensils, Music, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlitchReveal } from "./Transitions";

import interiorImg from "@/assets/gallery-interior.jpg";
import cocktailImg from "@/assets/gallery-cocktail.jpg";
import craftedBeersImg from "@/assets/crafted-beers.jpg";
import gourmetCuisineImg from "@/assets/gourmet-cuisine.jpg";

const LiquidReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

const features = [
  {
    icon: Beer,
    title: "Crafted Beers",
    description: "Exclusive selection of handcrafted beers",
    image: craftedBeersImg
  },
  {
    icon: Utensils,
    title: "Gourmet Cuisine",
    description: "Fusion of global flavors",
    image: gourmetCuisineImg
  },
  {
    icon: Music,
    title: "Live Music",
    description: "Soulful weekend performances",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Exclusive spaces for gatherings",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400"
  },
];

const stats = [
  { value: "15+", label: "Craft Beers" },
  { value: "50+", label: "Menu Items" },
  { value: "5K+", label: "Happy Guests" },
];

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-charcoal relative overflow-hidden reveal">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 px-8 sm:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative group w-full reveal-left">
            <LiquidReveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                <img 
                  src={interiorImg} 
                  alt="Barrelborn Interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </LiquidReveal>
            
            {/* Floating smaller image */}
            <div className="absolute -bottom-6 -right-6 w-2/5 aspect-square rounded-2xl overflow-hidden border-4 border-charcoal shadow-2xl hidden md:block">
              <img 
                src={cocktailImg} 
                alt="Craft Cocktails" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -left-4 bg-primary px-4 py-3 rounded-xl shadow-xl hidden md:block animate-float">
              <p className="font-display text-2xl text-black leading-none">05+</p>
              <p className="text-[8px] text-black/80 font-bold uppercase tracking-wider mt-0.5">Years of Craft</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-8 reveal-right text-center lg:text-left">
            <div className="space-y-3">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs block">Our Story</span>
              <span className="text-primary/60 font-medium tracking-[0.2em] uppercase text-[10px] block">Established 2021</span>
            <GlitchReveal>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1] max-w-[650px] mx-auto lg:mx-0">
                Crafting <span className="text-gradient-gold">Unforgettable</span> Moments
              </h2>
            </GlitchReveal>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed font-light italic border-l-2 lg:border-l-2 border-primary/30 pl-6 lg:pl-6 border-l-0 lg:border-l-2 mx-auto lg:mx-0">
                "Every barrel has a story. At Barrelborn, we help you write yours over exceptional brews and world-class cuisine."
              </p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  Nestled in the vibrant heart of Thane, <span className="text-primary font-medium">Barrelborn</span> is more than just a restaurant – it's a celebration of craft, community, and culinary artistry.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="relative group overflow-hidden rounded-2xl border border-border/20 hover-elevate transition-all duration-500 h-28 sm:h-32">
                    {/* Background Image */}
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay - Subtle for visibility */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-4 h-full flex flex-col justify-center items-center text-center">
                      <h4 className="font-display text-foreground text-[10px] font-bold uppercase tracking-[0.2em]">{feature.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
