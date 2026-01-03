import { Beer, Wine, Utensils, GlassWater, IceCream, Martini, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

import beerImg from "@/assets/gallery-beer.jpg";
import foodImg from "@/assets/gallery-food.jpg";
import cocktailImg from "@/assets/gallery-cocktail.jpg";
import barImg from "@/assets/gallery-private.jpg";
import mocktailImg from "@/assets/crafted-beers.jpg";
import dessertImg from "@/assets/gallery-food.jpg";

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

const categories = [
  {
    icon: Utensils,
    name: "Food",
    description: "Gourmet dishes & bar bites crafted by our chefs",
    items: "25+ dishes",
    image: foodImg
  },
  {
    icon: Beer,
    name: "Crafted Beer",
    description: "Exclusive brews on tap, barrel-aged to perfection",
    items: "15+ varieties",
    image: beerImg
  },
  {
    icon: Martini,
    name: "Cocktails",
    description: "Signature mixed drinks with premium spirits",
    items: "20+ creations",
    image: cocktailImg
  },
  {
    icon: Wine,
    name: "Bar",
    description: "Premium spirits, wines & imported selections",
    items: "40+ options",
    image: barImg
  },
  {
    icon: GlassWater,
    name: "Mocktails",
    description: "Refreshing non-alcoholic crafted beverages",
    items: "12+ flavors",
    image: mocktailImg
  },
  {
    icon: IceCream,
    name: "Desserts",
    description: "Sweet endings to complete your experience",
    items: "10+ treats",
    image: dessertImg
  },
];

const MenuCategories = () => {
  return (
    <section id="menu" className="py-12 bg-background relative overflow-hidden reveal">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-40" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="section-header mb-8">
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">Menu Categories</h2>
          <div className="section-divider" />
        </div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: 45, scale: 0.9 },
                show: { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }
                }
              }}
            >
              <TiltCard
                className="group relative bg-card rounded-xl border border-border/40 overflow-hidden cursor-pointer h-full"
              >
                {/* Image Section */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-4 relative text-center">
                  <div className="">
                    <div className="flex justify-center items-center mb-1">
                      <h3 className="font-display text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xs line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button 
            onClick={() => window.open("https://barrel-born.vercel.app/", "_blank")}
            className="group inline-flex items-center gap-3 px-9 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 font-medium"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
