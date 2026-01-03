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
    <footer id="contact" className="bg-charcoal-dark relative overflow-hidden pt-20 pb-12">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 px-4 sm:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                <img 
                  src="/src/assets/logo.png" 
                  alt="BarrelBorn Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground uppercase tracking-wider">BARRELBORN</h3>
                <p className="text-[8px] text-muted-foreground tracking-[0.2em]">DINE & DRAFT</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4 max-w-xs">
              Thane's premier destination for craft beers, artisan cocktails, and exceptional dining experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "Youtube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm text-foreground mb-4 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs link-underline inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm text-foreground mb-4 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 group">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-xs leading-relaxed group-hover:text-foreground transition-colors">
                  Shop No: 3, Madanlal Dhingra Rd, Panch Pakhdi, Thane West
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:hello@barrelborn.in" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs">
                  hello@barrelborn.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-sm text-foreground mb-4 uppercase tracking-widest">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="text-foreground font-medium mb-0.5">Monday - Thursday</p>
                  <p className="text-muted-foreground">12:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="text-foreground font-medium mb-0.5">Friday - Sunday</p>
                  <p className="text-muted-foreground">12:00 PM - 1:00 AM</p>
                </div>
              </li>
            </ul>
            
            {/* Directions CTA */}
            <a 
              href="https://www.google.com/maps/reserve/v/dine/c/nRwh5U7Ank8?source=pa&opi=89978449&hl=en-IN&gei=qvVXac2oMNbZ1e8P_4TeyQ8&sourceurl=https://www.google.com/search?q%3Dbarrel%2Bborn%26oq%3Dbarrel%2Bborn%26gs_lcrp%3DEgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgwIARAjGCcYgAQYigUyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDM4MWowajSoAgCwAgE%26sourceid%3Dchrome%26ie%3DUTF-8" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary hover:text-gold-light transition-colors group"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 lg:mt-12 pt-6 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-muted-foreground text-xs">
              © 2025 Barrelborn. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
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
