import { useState, useEffect } from "react";
import { getCart, clearCart, CartItem } from "@/lib/cart";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setCartItems(getCart());
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClearCart = () => {
    clearCart();
    setCartItems([]);
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    // You would also update the cart in localStorage here
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    // You would also update the cart in localStorage here
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (parseInt(item.price.replace(/[^\d]/g, "")) * item.quantity), 0);
  const shipping = subtotal > 50000 ? 0 : 500; // Free shipping over ₹50,000
  const total = subtotal + shipping;

  if (isLoading) {
    return (
      <section className="py-section min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium">Loading your luxury selections...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Cart Content */}
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-8">
              <Button 
                variant="ghost" 
                className="hover:bg-accent" 
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2 text-primary drop-shadow-lg" />
              </Button>
              <h1 className="text-3xl font-bold tracking-tight">Your Cart ({totalItems})</h1>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-accent/20 rounded-xl">
                <div className="bg-accent/10 p-6 rounded-full mb-6">
                  <Trash2 className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-medium mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">Browse our collection to add items</p>
                <Button 
                  className="px-8 py-4" 
                  onClick={() => window.location.href = '/#products'}
                >
                  Discover Luxury
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3 lg:w-1/4 bg-gray-50">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="sm:w-2/3 lg:w-3/4 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="text-primary font-medium mt-1">{item.price}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-destructive hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>
                        
                        <div className="mt-6 flex items-center gap-4">
                          <div className="flex items-center border rounded-md">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="rounded-none"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </Button>
                            <Input 
                              type="number" 
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                              className="w-16 text-center border-0 shadow-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="rounded-none"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <ChevronUp className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="ml-auto">
                            <p className="font-medium">
                              ₹{parseInt(item.price.replace(/[^\d]/g, "")) * item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    className="text-destructive border-destructive hover:bg-destructive/10"
                    onClick={handleClearCart}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear Cart
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '/#products'}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:w-1/3 mt-12">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="border-t pt-4 flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="text-xl font-bold">₹{total}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full py-6 text-lg" size="lg">
                    Proceed to Checkout
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;