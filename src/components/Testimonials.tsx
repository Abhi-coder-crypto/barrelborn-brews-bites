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
      <div className="absolute top-10 right-10 lg:top-20 lg:right-20 text-primary/4">
        <Quote className="w-48 h-48 lg:w-72 lg:h-72" />
      </div>
      <div className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 text-primary/4 rotate-180">
        <Quote className="w-36 h-36 lg:w-52 lg:h-52" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial opacity-30" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="section-divider" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative p-8 lg:p-9 bg-card/70 rounded-2xl border border-border/40 hover:border-primary/30 card-hover backdrop-blur-sm"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 text-primary/15 group-hover:text-primary/30 transition-colors duration-500">
                <Quote className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary transition-transform duration-300 group-hover:scale-110" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-base lg:text-lg font-light italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <span className="font-display text-lg lg:text-xl text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-base lg:text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex flex-col items-center p-8 lg:p-10 bg-card/50 rounded-2xl border border-border/40 backdrop-blur-sm">
            <p className="text-muted-foreground mb-5 text-base lg:text-lg">Love your experience?</p>
            <a
              href="#"
              className="group flex items-center gap-4 px-7 py-3.5 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-primary text-primary transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
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
