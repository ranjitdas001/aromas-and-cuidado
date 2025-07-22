import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getCart } from "@/lib/cart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Products", id: "products" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "footer" },
  ];

  // Get total items in cart
  const totalCartItems = getCart().reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="font-display text-2xl font-bold text-primary flex gap-5">
          <img
              src="/img/logo.jpg"
              alt="Aromas & Cuidado Logo"
              className="h-10 w-10 object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
              style={{ minWidth: 40 }}
            />
            Aromas & Cuidado
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-body text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Link to="/cart" className="font-body text-foreground hover:text-primary transition-colors duration-200 ml-6 relative group rounded-md px-3 py-2">
              Cart
              <span className="absolute -bottom-0                                                                                                                                                                                                                                                                    left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-primary text-white rounded-full px-2 py-0.5 text-xs font-bold shadow-lg">
                  {totalCartItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-elegant">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 font-body text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Link to="/cart" className="block w-full text-left py-3 font-body text-foreground hover:text-primary transition-colors duration-200 relative group rounded-md px-3">
              Cart
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-primary text-white rounded-full px-2 py-0.5 text-xs font-bold shadow-lg">
                  {totalCartItems}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;