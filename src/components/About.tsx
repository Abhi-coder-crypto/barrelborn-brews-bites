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

const About = () => {
  return (
    <section id="about" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Our Story</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            About Barrelborn
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nestled in the vibrant heart of Thane, <span className="text-primary font-medium">Barrelborn</span> is more than just a restaurant – it's a celebration of craft, community, and culinary artistry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Born from a passion for exceptional brews and unforgettable dining experiences, we've curated a space where every sip tells a story and every dish is a masterpiece. Our brewmasters pour their hearts into creating unique, barrel-aged beers that you won't find anywhere else.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the warm amber glow of our interiors to the friendly clink of glasses, Barrelborn invites you to unwind, connect, and create memories that last a lifetime.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <span className="block font-display text-3xl md:text-4xl text-primary">15+</span>
                <span className="text-sm text-muted-foreground">Craft Beers</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-3xl md:text-4xl text-primary">50+</span>
                <span className="text-sm text-muted-foreground">Menu Items</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-3xl md:text-4xl text-primary">5K+</span>
                <span className="text-sm text-muted-foreground">Happy Guests</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-secondary/50 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
