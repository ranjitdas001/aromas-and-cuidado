import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Products", href: "#products" },
    { name: "Team", href: "#team" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="footer" className="bg-gradient-to-t from-foreground to-foreground/95 text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="font-display text-3xl font-bold text-primary-glow mb-4">
                Aromas & Cuidado
              </h3>
              <p className="font-body text-background/80 leading-relaxed">
                Premium beauty products crafted with natural ingredients 
                to enhance your natural beauty and provide unique personal care moments.
              </p>
            </div>
          </div>
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-body font-semibold text-background">Follow Us</h4>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-background hover:text-primary-glow hover:bg-background/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-background hover:text-primary-glow hover:bg-background/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-background hover:text-primary-glow hover:bg-background/10">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-background text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-body text-background/80 hover:text-primary-glow transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-6">
            <h4 className="font-body font-semibold text-background text-lg">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <p className="font-body text-background/80 text-sm leading-relaxed">
                  Thana Chariali<br />
                  Dibrugarh, Assam, 786003
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <p className="font-body text-background/80 text-sm">+91 9705216723</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow flex-shrink-0" />
                <p className="font-body text-background/80 text-sm">info@aromascare.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-sm text-background/80">
              © 2025 Aromas & Cuidado. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;