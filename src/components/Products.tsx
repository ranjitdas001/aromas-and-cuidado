import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { addToCart } from "@/lib/cart";

const Products = () => {
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [addedId, setAddedId] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Pocket Perfume",
      description: "Compact and convenient fragrance for on-the-go freshness.",
      price: "₹49",
      image: "/img/product_pocket_perfume.jpg",
      badge: "Popular",
      features: ["Travel Friendly", "Long Lasting", "Unisex"],
    },
    {
      id: 2,
      name: "Paper Soap (20 pcs)",
      description: "Easy-to-carry paper soap sheets for instant hand wash anywhere.",
      price: "₹10",
      image: "/img/product_paper_soap_20pcs.jpg",
      badge: "Value Pack",
      features: ["20 Sheets", "Portable", "Hygienic"],
    },
    {
      id: 3,
      name: "Incense Sticks",
      description: "Aromatic incense sticks to refresh your space and mind.",
      price: "₹45",
      image: "/img/product_incense_stick.jpg",
      badge: "Aromatic",
      features: ["Long Burning", "Natural Fragrance", "Relaxing"],
    },
    {
      id: 4,
      name: "Scented Candle",
      description: "Delightful scented candle to create a soothing ambiance.",
      price: "₹49",
      image: "/img/product_scented_candle.jpg",
      badge: "Soothing",
      features: ["Slow Burn", "Rich Aroma", "Decorative"],
    },
  ];

  const handleAddToCart = async (product: any) => {
    setLoadingId(product.id);
    setAddedId(null);
    try {
      await addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      setAddedId(product.id);
    } finally {
      setLoadingId(null);
      setTimeout(() => setAddedId(null), 2000);
    }
  };

  return (
    <section id="products" className="py-section bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each product is carefully formulated with premium ingredients 
            to offer you the best personal care experience.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group bg-card border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-body">
                  {product.badge}
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {product.name}
                </h3>

                <p className="font-body text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="font-body text-xs"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between pt-4">
                  <span className="font-display text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button
                    className={`bg-gradient-primary transition-all duration-300 font-body active:scale-95 ${addedId === product.id ? 'bg-green-500 text-white' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={loadingId === product.id || addedId === product.id}
                  >
                    {loadingId === product.id
                      ? "Adding..."
                      : addedId === product.id
                        ? "Added to Cart"
                        : "Add to Cart"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
