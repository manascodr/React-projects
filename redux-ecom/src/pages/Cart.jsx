import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateCartQuantity, clearCart } from "../frontstore/reducers/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total, itemCount } = useSelector((state) => state.cartReducer);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartQuantity({ productId, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px 16px'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '48px'
  };

  const titleStyles = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '16px'
  };

  const subtitleStyles = {
    fontSize: '1.125rem',
    color: '#64748b'
  };

  const emptyCartStyles = {
    textAlign: 'center',
    padding: '80px 24px',
    background: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0'
  };

  const emptyIconStyles = {
    fontSize: '4rem',
    marginBottom: '24px'
  };

  const emptyTextStyles = {
    fontSize: '1.25rem',
    color: '#64748b',
    marginBottom: '32px'
  };

  const cartLayoutStyles = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '32px',
    alignItems: 'start'
  };

  const cartItemsStyles = {
    background: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    overflow: 'hidden'
  };

  const cartHeaderStyles = {
    padding: '24px',
    borderBottom: '1px solid #e2e8f0',
    background: '#f8fafc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const itemStyles = {
    display: 'flex',
    gap: '16px',
    padding: '24px',
    borderBottom: '1px solid #f1f5f9'
  };

  const itemImageStyles = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  };

  const itemDetailsStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const itemTitleStyles = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '4px'
  };

  const itemPriceStyles = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#2563eb'
  };

  const quantityControlStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '12px'
  };

  const quantityBtnStyles = {
    width: '32px',
    height: '32px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    background: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#64748b',
    transition: 'all 0.2s ease'
  };

  const quantityInputStyles = {
    width: '60px',
    padding: '8px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    textAlign: 'center',
    fontSize: '0.875rem'
  };

  const removeButtonStyles = {
    padding: '8px 16px',
    background: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };

  const summaryStyles = {
    background: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    padding: '24px',
    height: 'fit-content',
    position: 'sticky',
    top: '100px'
  };

  const summaryRowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #f1f5f9'
  };

  const totalRowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1e293b',
    borderTop: '2px solid #e2e8f0',
    marginTop: '16px'
  };

  const checkoutBtnStyles = {
    width: '100%',
    padding: '16px',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginTop: '24px'
  };

  const clearBtnStyles = {
    width: '100%',
    padding: '12px',
    background: 'transparent',
    color: '#ef4444',
    border: '1px solid #ef4444',
    borderRadius: '8px',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginTop: '12px'
  };

  const btnPrimaryStyles = {
    padding: '12px 24px',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s ease'
  };

  if (items.length === 0) {
    return (
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h1 style={titleStyles}>Shopping Cart</h1>
          <p style={subtitleStyles}>Your cart is currently empty</p>
        </div>
        
        <div style={emptyCartStyles}>
          <div style={emptyIconStyles}>🛒</div>
          <p style={emptyTextStyles}>No items in your cart yet</p>
          <Link 
            to="/products" 
            style={btnPrimaryStyles}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1d4ed8';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            🛍️ Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Shopping Cart</h1>
        <p style={subtitleStyles}>{itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div style={cartLayoutStyles}>
        <div style={cartItemsStyles}>
          <div style={cartHeaderStyles}>
            <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
              Cart Items
            </h2>
            <button 
              style={clearBtnStyles}
              onClick={handleClearCart}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ef4444';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ef4444';
              }}
            >
              Clear Cart
            </button>
          </div>

          {items.map((item) => (
            <div key={item.id} style={itemStyles}>
              <img 
                src={item.image} 
                alt={item.title}
                style={itemImageStyles}
              />
              
              <div style={itemDetailsStyles}>
                <h3 style={itemTitleStyles}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>
                  {item.category}
                </p>
                <div style={itemPriceStyles}>${item.price}</div>
                
                <div style={quantityControlStyles}>
                  <button 
                    style={quantityBtnStyles}
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f1f5f9';
                      e.target.style.borderColor = '#cbd5e1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#ffffff';
                      e.target.style.borderColor = '#e2e8f0';
                    }}
                  >
                    -
                  </button>
                  
                  <input 
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                    style={quantityInputStyles}
                    min="1"
                  />
                  
                  <button 
                    style={quantityBtnStyles}
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f1f5f9';
                      e.target.style.borderColor = '#cbd5e1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#ffffff';
                      e.target.style.borderColor = '#e2e8f0';
                    }}
                  >
                    +
                  </button>
                  
                  <button 
                    style={removeButtonStyles}
                    onClick={() => handleRemoveItem(item.id)}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#dc2626';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#ef4444';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
              
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={summaryStyles}>
          <h3 style={{ margin: '0 0 24px 0', fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
            Order Summary
          </h3>
          
          <div style={summaryRowStyles}>
            <span>Subtotal ({itemCount} items)</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <div style={summaryRowStyles}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          
          <div style={summaryRowStyles}>
            <span>Tax</span>
            <span>${(total * 0.08).toFixed(2)}</span>
          </div>
          
          <div style={totalRowStyles}>
            <span>Total</span>
            <span>${(total * 1.08).toFixed(2)}</span>
          </div>
          
          <button 
            style={checkoutBtnStyles}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1d4ed8';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            🛒 Proceed to Checkout
          </button>
          
          <Link 
            to="/products"
            style={{
              display: 'block',
              textAlign: 'center',
              marginTop: '16px',
              color: '#64748b',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
