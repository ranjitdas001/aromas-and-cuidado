// Simple cart logic for demo purposes
export type CartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

let cart: CartItem[] = [];

export function addToCart(item: Omit<CartItem, 'quantity'>) {
  const existing = cart.find((i) => i.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
}

export function getCart() {
  return cart;
}

export function clearCart() {
  cart = [];
}
