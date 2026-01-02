import { Beer, Utensils, Music, Users } from "lucide-react";

const features = [
  {
    icon: Beer,
    title: "Crafted Beers",
    description: "Exclusive selection of handcrafted beers brewed to perfection",
  },
  {
    icon: Utensils,
    title: "Gourmet Cuisine",
    description: "Fusion of global flavors with locally sourced ingredients",
  },
  {
    icon: Music,
    title: "Live Entertainment",
    description: "Weekend performances and curated playlists for the perfect vibe",
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Exclusive spaces for celebrations and corporate gatherings",
  },
];

const stats = [
  { value: "15+", label: "Craft Beers" },
  { value: "50+", label: "Menu Items" },
  { value: "5K+", label: "Happy Guests" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/50">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
                alt="Barrelborn Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            {/* Floating smaller image */}
            <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-2xl overflow-hidden border-4 border-charcoal shadow-2xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=400" 
                alt="Craft Cocktails" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl hidden md:block animate-float">
              <p className="font-display text-4xl text-black leading-none">05+</p>
              <p className="text-xs text-black/80 font-bold uppercase tracking-wider mt-1">Years of Craft</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm block">Established 2021</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight">
                Crafting <span className="text-gradient-gold">Unforgettable</span> Moments
              </h2>
            </div>
            
            <p className="text-xl text-foreground/90 leading-relaxed font-light italic">
              "Every barrel has a story. At Barrelborn, we help you write yours over exceptional brews and world-class cuisine."
            </p>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base">
              <p>
                Nestled in the vibrant heart of Thane, <span className="text-primary font-medium">Barrelborn</span> is more than just a restaurant – it's a celebration of craft, community, and culinary artistry.
              </p>
              <p>
                Born from a passion for exceptional brews and unforgettable dining experiences, we've curated a space where every sip tells a story. Our brewmasters pour their hearts into creating unique, barrel-aged beers that reflect our commitment to excellence.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-border/30">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <span className="block font-display text-3xl sm:text-4xl text-gradient-gold transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1 block font-bold">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 2).map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/20 border border-border/30 hover:border-primary/30 transition-colors group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-foreground text-sm font-bold uppercase tracking-wider">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-tight">{feature.description}</p>
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
