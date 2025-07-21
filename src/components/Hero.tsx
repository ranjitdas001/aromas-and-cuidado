import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Aromas &{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Cuidado
            </span>
          </h1>
          
          <p className="font-body text-2xl md:text-3xl font-bold text-primary-glow mb-6 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Where every fragrance <span className="text-luxury">tells a story!!</span>
          </p>
          <p className="font-body text-xl md:text-2xl font-semibold text-foreground mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow">
            Discover our <span className="text-primary">premium fragrance collection</span> for unique self-care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="font-body text-lg px-8 py-6 bg-gradient-primary hover:shadow-luxury transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float hidden lg:block">
          <div className="w-4 h-4 rounded-full bg-luxury"></div>
        </div>
        <div className="absolute bottom-32 right-16 opacity-20 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
          <div className="w-6 h-6 rounded-full bg-accent"></div>
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
          <div className="w-3 h-3 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;