import { Beer, Wine, Utensils, GlassWater, IceCream, Martini, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

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
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Beer,
    name: "Crafted Beer",
    description: "Exclusive brews on tap, barrel-aged to perfection",
    items: "15+ varieties",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Martini,
    name: "Cocktails",
    description: "Signature mixed drinks with premium spirits",
    items: "20+ creations",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Wine,
    name: "Bar",
    description: "Premium spirits, wines & imported selections",
    items: "40+ options",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: GlassWater,
    name: "Mocktails",
    description: "Refreshing non-alcoholic crafted beverages",
    items: "12+ flavors",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: IceCream,
    name: "Desserts",
    description: "Sweet endings to complete your experience",
    items: "10+ treats",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop"
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
          <button className="group inline-flex items-center gap-3 px-9 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 font-medium">
            <span>View Full Menu</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
