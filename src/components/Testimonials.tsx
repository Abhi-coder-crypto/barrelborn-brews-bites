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
    <section id="testimonials" className="py-12 bg-charcoal relative overflow-hidden reveal">
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

        <div className="w-full overflow-hidden relative py-10">
          <div className="flex animate-marquee-horizontal gap-6 w-max">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-[350px] sm:w-[450px] p-8 bg-card/70 rounded-2xl border border-border/40 backdrop-blur-sm flex-shrink-0"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic min-h-[80px]">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-display">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Rating CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.google.com/search?sca_esv=7dcbc37479457eb0&sxsrf=AE3TifOlTeAcP_gEowkoFv3R5BVqDq4fTQ:1767374245174&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9moAMXsS0ppftIa0AAstM7PU3IPOsk0_n4z2GibB7zwuuqJ_Zbkf-8VublAkI9bQoriLtiFfWv2pIsrhadjPCDP3j-pqozS1djY7fZfyFv3bCDwwiVEvOcINNV4GJ6DdbUIl5o%3D&q=Barrelborn+%7C+Dine+%26+Draft+%7C+Thane+Reviews&sa=X&ved=2ahUKEwjWkcaQru2RAxXekq8BHaEaJlYQ0bkNegQIKhAE&biw=1280&bih=632&dpr=1.5"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-7 py-3.5 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300"
          >
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="text-primary font-medium">Rate us on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;