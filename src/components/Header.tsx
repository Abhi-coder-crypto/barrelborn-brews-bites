import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "./Effects";

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
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 py-2" 
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.3}>
            <button 
              onClick={() => handleNavClick("#home")}
              className="flex items-center group"
            >
              <div className="relative flex items-center justify-center transition-all duration-300 w-16 h-16 md:w-20 md:h-20">
                <img 
                  src="/src/assets/logo.png" 
                  alt="BarrelBorn Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
          </Magnetic>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 mx-auto">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.2}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 link-underline py-1 px-2"
                >
                  {link.name}
                </button>
              </Magnetic>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Magnetic strength={0.4}>
              <Button
                size="sm"
                onClick={() => handleNavClick("#contact")}
                className="btn-primary glow-gold px-6 py-5 text-sm rounded-full"
              >
                Reserve a Table
              </Button>
            </Magnetic>
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
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
