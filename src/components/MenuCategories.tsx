import { Beer, Wine, Utensils, GlassWater, IceCream, Martini, ArrowRight } from "lucide-react";

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
    <section id="menu" className="section-padding bg-background relative overflow-hidden reveal">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-40" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="section-header">
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">Menu Categories</h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative bg-card rounded-2xl border border-border/40 overflow-hidden hover-elevate cursor-pointer"
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
              <div className="p-6 relative">
                <div className="absolute -top-8 left-6 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {category.items}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
