import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-charcoal-dark relative overflow-hidden pt-10 pb-12">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 px-6 sm:px-12 lg:px-16 py-8 md:py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden shadow-lg shadow-primary/5">
                <img 
                  src="/src/assets/logo.png" 
                  alt="BarrelBorn Logo" 
                  className="w-[85%] h-[85%] object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground uppercase tracking-wider">BARRELBORN</h3>
                <p className="text-[10px] text-primary/60 font-bold tracking-[0.3em]">DINE & DRAFT</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Thane's premier destination for craft beers, artisan cocktails, and exceptional dining experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "Youtube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6 uppercase tracking-widest text-primary/80">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm link-underline inline-block font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6 uppercase tracking-widest text-primary/80">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors font-medium">
                  Shop No: 3, Madanlal Dhingra Rd, Panch Pakhdi, Thane West
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@barrelborn.in" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium">
                  hello@barrelborn.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6 uppercase tracking-widest text-primary/80">Opening Hours</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-foreground font-bold mb-1">Monday - Thursday</p>
                  <p className="text-muted-foreground font-medium">12:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-foreground font-bold mb-1 text-primary">Friday - Sunday</p>
                  <p className="text-muted-foreground font-bold">12:00 PM - 1:00 AM</p>
                </div>
              </li>
            </ul>
            
            {/* Directions CTA */}
            <a 
              href="https://www.google.com/maps/reserve/v/dine/c/nRwh5U7Ank8?source=pa&opi=89978449&hl=en-IN&gei=qvVXac2oMNbZ1e8P_4TeyQ8&sourceurl=https://www.google.com/search?q%3Dbarrel%2Bborn%26oq%3Dbarrel%2Bborn%26gs_lcrp%3DEgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgwIARAjGCcYgAQYigUyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDM4MWowajSoAgCwAgE%26sourceid%3Dchrome%26ie%3DUTF-8" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:text-gold-light transition-all group font-bold"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm font-medium">
              © 2025 Barrelborn. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-muted-foreground font-medium">
              <a href="#" className="hover:text-primary transition-colors link-underline">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors link-underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
