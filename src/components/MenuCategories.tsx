import { Beer, Wine, Utensils, GlassWater, IceCream, Martini } from "lucide-react";

const categories = [
  {
    icon: Utensils,
    name: "Food",
    description: "Gourmet dishes & bar bites",
    items: "25+ dishes",
  },
  {
    icon: Beer,
    name: "Crafted Beer",
    description: "Exclusive brews on tap",
    items: "15+ varieties",
  },
  {
    icon: Martini,
    name: "Cocktails",
    description: "Signature mixed drinks",
    items: "20+ creations",
  },
  {
    icon: Wine,
    name: "Bar",
    description: "Premium spirits & wines",
    items: "40+ options",
  },
  {
    icon: GlassWater,
    name: "Mocktails",
    description: "Refreshing non-alcoholic",
    items: "12+ flavors",
  },
  {
    icon: IceCream,
    name: "Desserts",
    description: "Sweet endings",
    items: "10+ treats",
  },
];

const MenuCategories = () => {
  return (
    <section id="menu" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Our Menu
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            From barrel-aged craft beers to artisanal cocktails and gourmet cuisine, explore our carefully curated offerings
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                {/* Item count badge */}
                <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                  {category.items}
                </span>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 font-medium">
            View Full Menu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
