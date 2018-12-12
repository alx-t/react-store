export const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart == null)
      return [];
    return JSON.parse(serializedCart);
  } catch (e) {
    return [];
  }
};

export const addItemToCart = (item) => {
  try {
    const cart = loadCart().concat(item);
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (e) {}
};

export const clearCart = () => {
  try {
    localStorage.removeItem('cart');
  } catch (e) {}
};
