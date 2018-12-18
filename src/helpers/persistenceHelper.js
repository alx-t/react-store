export const restoreCart = () => {
  const empty = { entries: [], total: 0 };
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart == null)
      return empty;
    return JSON.parse(serializedCart);
  } catch (e) {
    return empty;
  }
};

export const saveCart = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (e) {}
};

export const clearCart = () => {
  try {
    localStorage.removeItem('cart');
  } catch (e) {}
};
