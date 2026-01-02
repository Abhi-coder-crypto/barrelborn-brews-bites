import { Beer, Utensils, Music, Users } from "lucide-react";

const features = [
  {
    icon: Beer,
    title: "Crafted Beers",
    description: "Exclusive selection of handcrafted beers",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Utensils,
    title: "Gourmet Cuisine",
    description: "Fusion of global flavors",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Music,
    title: "Live Music",
    description: "Soulful weekend performances",
    image: "https://images.unsplash.com/photo-1514525253344-a813099ea1e1?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Exclusive spaces for gatherings",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=400"
  },
];

const stats = [
  { value: "15+", label: "Craft Beers" },
  { value: "50+", label: "Menu Items" },
  { value: "5K+", label: "Happy Guests" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative group lg:max-w-md mx-auto">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src="/src/assets/gallery-interior.jpg" 
                alt="Barrelborn Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            {/* Floating smaller image */}
            <div className="absolute -bottom-6 -right-6 w-2/5 aspect-square rounded-2xl overflow-hidden border-4 border-charcoal shadow-2xl hidden md:block">
              <img 
                src="/src/assets/gallery-cocktail.jpg" 
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
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs block">Our Story</span>
              <span className="text-primary/60 font-medium tracking-[0.2em] uppercase text-[9px] block">Established 2021</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
                Crafting <span className="text-gradient-gold">Unforgettable</span> Moments
              </h2>
            </div>
            
            <p className="text-lg text-foreground/90 leading-relaxed font-light italic">
              "Every barrel has a story. At Barrelborn, we help you write yours over exceptional brews and world-class cuisine."
            </p>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                Nestled in the vibrant heart of Thane, <span className="text-primary font-medium">Barrelborn</span> is more than just a restaurant – it's a celebration of craft, community, and culinary artistry.
              </p>
            </div>

            <div className="pt-2">
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature.title} className="relative group overflow-hidden rounded-xl border border-border/30 hover-elevate transition-all duration-500 h-24 sm:h-28">
                    {/* Background Image */}
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay - Darker for visibility */}
                    <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition-colors duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-3 h-full flex flex-col justify-center items-center text-center">
                      <div className="mb-1.5 p-1 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <feature.icon className="w-3 h-3 text-primary" />
                      </div>
                      <h4 className="font-display text-foreground text-[9px] font-bold uppercase tracking-wider">{feature.title}</h4>
                      <p className="text-[8px] text-muted-foreground mt-0.5 leading-tight">{feature.description}</p>
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
