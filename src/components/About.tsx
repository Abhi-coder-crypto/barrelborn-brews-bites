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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial opacity-40" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">About Barrelborn</h2>
          <div className="section-divider" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-7">
            <p className="text-xl text-foreground/90 leading-relaxed font-light">
              Nestled in the vibrant heart of Thane, <span className="text-primary font-medium">Barrelborn</span> is more than just a restaurant – it's a celebration of craft, community, and culinary artistry.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Born from a passion for exceptional brews and unforgettable dining experiences, we've curated a space where every sip tells a story and every dish is a masterpiece. Our brewmasters pour their hearts into creating unique, barrel-aged beers that you won't find anywhere else.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              From the warm amber glow of our interiors to the friendly clink of glasses, Barrelborn invites you to unwind, connect, and create memories that last a lifetime.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <span className="block font-display text-3xl sm:text-4xl md:text-5xl text-gradient-gold transition-transform duration-300 group-hover:scale-105">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground mt-1 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-7 bg-secondary/40 rounded-2xl border border-border/40 hover:border-primary/40 card-hover backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2.5 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
