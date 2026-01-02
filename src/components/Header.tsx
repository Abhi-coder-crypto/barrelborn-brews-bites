import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div className={`rounded-full border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:border-gold-light group-hover:shadow-gold ${
              isScrolled ? "w-10 h-10" : "w-12 h-12"
            }`}>
              <span className={`font-display text-primary font-bold transition-all duration-300 group-hover:text-gold-light ${
                isScrolled ? "text-lg" : "text-xl"
              }`}>B</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-display text-foreground tracking-wide transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}>BARRELBORN</h1>
              <p className="text-[10px] text-muted-foreground tracking-[0.25em]">DINE & DRAFT</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 link-underline py-1"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => handleNavClick("#contact")}
              className="btn-primary glow-gold rounded-full px-6"
            >
              Reserve Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 border-t border-border/50">
            <div className="flex flex-col gap-1 stagger-children">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick("#contact")}
                className="btn-primary mt-4 w-full rounded-full"
              >
                Reserve Table
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
