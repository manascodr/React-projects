// Cart Actions
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId
});

export const updateCartQuantity = (productId, quantity) => ({
  type: 'UPDATE_CART_QUANTITY',
  payload: { productId, quantity }
});

export const clearCart = () => ({
  type: 'CLEAR_CART'
});

export const getCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartItemCount = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};