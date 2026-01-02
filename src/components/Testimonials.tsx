import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Food Enthusiast",
    content: "The craft beers here are absolutely phenomenal! Each brew has its own unique character. The ambiance perfectly complements the experience. A must-visit in Thane!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Regular Patron",
    content: "Barrelborn has become my go-to spot for weekend dinners. The cocktails are innovative, and their butter garlic prawns are to die for. The staff is incredibly warm and welcoming.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Beer Connoisseur",
    content: "As someone who appreciates good craft beer, I'm impressed by their selection. The barrel-aged stout is exceptional. Great food pairings and knowledgeable bartenders!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 text-primary/5">
        <Quote className="w-64 h-64" />
      </div>
      <div className="absolute bottom-20 left-20 text-primary/5 rotate-180">
        <Quote className="w-48 h-48" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            What Our Guests Say
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-lg text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center p-8 bg-card/50 rounded-2xl border border-border/50">
            <p className="text-muted-foreground mb-4">Love your experience?</p>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-primary font-medium">Rate us on Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
