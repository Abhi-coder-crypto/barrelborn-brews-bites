import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="testimonials" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8 text-primary/4">
        <Quote className="w-24 h-24 lg:w-32 lg:h-32" />
      </div>
      <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 text-primary/4 rotate-180">
        <Quote className="w-16 h-16 lg:w-24 lg:h-24" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial opacity-30" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="section-header mb-12">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mt-4 mb-4">What Our Guests Say</h2>
          <div className="section-divider" />
        </div>

        <div className="w-full overflow-hidden relative py-12">
          <div className="flex animate-marquee-horizontal gap-8 w-max px-4">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                whileHover={{ 
                  scale: 1.05, 
                  z: 50,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  borderColor: "hsl(var(--primary) / 0.4)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[350px] sm:w-[450px] p-8 bg-card/70 rounded-2xl border border-border/40 backdrop-blur-md flex-shrink-0 cursor-pointer relative z-10 hover:z-50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 italic min-h-[100px] text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 border-t border-border/20 pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <span className="text-primary font-display text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base">{testimonial.name}</h4>
                    <p className="text-sm text-primary/70">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Google Rating CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Barrelborn+Thane+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 border border-primary/20"
          >
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="text-primary font-semibold tracking-wide">Rate us on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;