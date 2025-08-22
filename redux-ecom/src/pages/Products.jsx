import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncLoadProducts } from "../frontstore/actions/procuctActions";
import { addToCart } from "../frontstore/reducers/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(asyncLoadProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Optional: Show success message or toast notification
    console.log(`Added ${product.title} to cart`);
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px'
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
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '48px'
  };

  const cardStyles = {
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const cardHoverStyles = {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
  };

  const imageContainerStyles = {
    position: 'relative',
    width: '100%',
    height: '250px',
    overflow: 'hidden',
    background: '#f8fafc'
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s ease'
  };

  const cardBodyStyles = {
    padding: '20px'
  };

  const productTitleStyles = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '8px',
    lineHeight: '1.4',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };

  const priceStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2563eb',
    marginBottom: '12px'
  };

  const descriptionStyles = {
    color: '#64748b',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    marginBottom: '16px',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };

  const categoryBadgeStyles = {
    display: 'inline-block',
    padding: '4px 12px',
    background: '#f59e0b',
    color: 'white',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: '16px'
  };

  const cardActionsStyles = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  };

  const btnPrimaryStyles = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563eb',
    color: 'white',
    flex: 1
  };

  const btnSecondaryStyles = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: '#f59e0b',
    border: '1px solid #f59e0b'
  };

  const loadingStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    color: '#64748b'
  };

  const loadingSpinnerStyles = {
    width: '40px',
    height: '40px',
    border: '4px solid #e2e8f0',
    borderTop: '4px solid #2563eb',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '16px'
  };

  if (products.length === 0) {
    return (
      <div style={containerStyles}>
        <div style={loadingStyles}>
          <div style={loadingSpinnerStyles}></div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '8px' }}>Loading Products...</h2>
          <p>Please wait while we fetch the latest products for you.</p>
        </div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Our Products</h1>
        <p style={subtitleStyles}>
          Discover our amazing collection of high-quality products at unbeatable prices
        </p>
      </div>

      <div style={gridStyles}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={cardStyles}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, cardHoverStyles);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, cardStyles);
            }}
          >
            <div style={imageContainerStyles}>
              <img 
                src={product.image} 
                alt={product.title}
                style={imageStyles}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
            </div>
            
            <div style={cardBodyStyles}>
              <h2 style={productTitleStyles}>{product.title}</h2>
              <div style={priceStyles}>${product.price}</div>
              <p style={descriptionStyles}>{product.description}</p>
              <div style={categoryBadgeStyles}>{product.category}</div>
              
              <div style={cardActionsStyles}>
                <button 
                  style={btnSecondaryStyles}
                  onClick={() => handleAddToCart(product)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f59e0b';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#f59e0b';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  🛒 Add to Cart
                </button>
                
                <Link 
                  to={`/product/${product.id}`} 
                  style={btnPrimaryStyles}
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
                  👁️ View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
