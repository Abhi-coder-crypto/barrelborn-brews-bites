import { Beer, Wine, Utensils, GlassWater, IceCream, Martini, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Utensils,
    name: "Food",
    description: "Gourmet dishes & bar bites crafted by our chefs",
    items: "25+ dishes",
  },
  {
    icon: Beer,
    name: "Crafted Beer",
    description: "Exclusive brews on tap, barrel-aged to perfection",
    items: "15+ varieties",
  },
  {
    icon: Martini,
    name: "Cocktails",
    description: "Signature mixed drinks with premium spirits",
    items: "20+ creations",
  },
  {
    icon: Wine,
    name: "Bar",
    description: "Premium spirits, wines & imported selections",
    items: "40+ options",
  },
  {
    icon: GlassWater,
    name: "Mocktails",
    description: "Refreshing non-alcoholic crafted beverages",
    items: "12+ flavors",
  },
  {
    icon: IceCream,
    name: "Desserts",
    description: "Sweet endings to complete your experience",
    items: "10+ treats",
  },
];

const MenuCategories = () => {
  return (
    <section id="menu" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-40" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[180px]" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Menu</h2>
          <div className="section-divider" />
          <p className="section-description">
            From barrel-aged craft beers to artisanal cocktails and gourmet cuisine, explore our carefully curated offerings
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-20">
          {categories.map((category, index) => (
            <div key={category.name} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-3xl text-foreground">
                  {category.name}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                <div
                  className="group relative p-8 lg:p-9 bg-card/80 rounded-2xl border border-border/40 hover:border-primary/40 card-hover cursor-pointer overflow-hidden backdrop-blur-sm"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Content */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{category.description}</p>
                    
                    {/* Item count badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full group-hover:bg-primary/15 transition-colors">
                      {category.items}
                    </span>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-primary/15 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Placeholder menu items for this section */}
                {[1, 2].map((i) => (
                  <div key={i} className="p-8 bg-card/40 rounded-2xl border border-border/20 backdrop-blur-sm flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-lg">Featured {category.name} Item {i}</h4>
                      <p className="text-muted-foreground text-sm">Specially prepared with local ingredients and artisanal techniques.</p>
                    </div>
                    <span className="font-bold text-primary">$18.00</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
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
