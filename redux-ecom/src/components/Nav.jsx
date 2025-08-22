import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const cartItemCount = useSelector((state) => state.cartReducer.itemCount);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navStyles = {
    background: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const brandStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2563eb',
    textDecoration: 'none'
  };

  const menuStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  };

  const navLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    color: '#64748b',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  };

  const btnPrimaryStyles = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '8px 24px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '0.875rem',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'all 0.2s ease'
  };

  const cartBadgeStyles = {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    background: '#ef4444',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '2px 6px',
    borderRadius: '50%',
    minWidth: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: cartItemCount > 0 ? 'pulse 2s infinite' : 'none'
  };

  const adminLinkStyles = {
    background: '#f59e0b',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: '600',
    textDecoration: 'none'
  };

  const userInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: '#f1f5f9',
    borderRadius: '8px',
    color: '#1e293b'
  };

  const mobileToggleStyles = {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#1e293b',
    cursor: 'pointer',
    padding: '8px'
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
      <nav style={navStyles}>
        <div style={containerStyles}>
          <div>
            <NavLink to="/" style={brandStyles}>
              <span>EcomStore</span>
            </NavLink>
          </div>

          <div style={menuStyles}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <NavLink 
                to="/" 
                style={navLinkStyles}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Home</span>
              </NavLink>
              
              <NavLink 
                to="/Products" 
                style={navLinkStyles}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Products</span>
              </NavLink>
              
              <NavLink 
                to="/Cart" 
                style={{ ...navLinkStyles, position: 'relative' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Cart</span>
                {cartItemCount > 0 && (
                  <span style={cartBadgeStyles}>{cartItemCount}</span>
                )}
              </NavLink>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {user ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <NavLink 
                    to="/admin/create-product" 
                    style={adminLinkStyles}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Add Product</span>
                  </NavLink>
                  <div style={userInfoStyles}>
                    <span>Admin</span>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <NavLink 
                    to="/Login" 
                    style={navLinkStyles}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink 
                    to="/Register" 
                    style={btnPrimaryStyles}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </div>

          <button 
            style={mobileToggleStyles}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
