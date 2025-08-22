import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../frontstore/actions/procuctActions";

const CreateProduct = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CreateProductHandler = async (product) => {
    try {
      product.id = nanoid();
      await dispatch(asyncCreateProduct(product));
      reset();
      navigate("/products");
    } catch (error) {
      console.error('Create product failed:', error);
    }
  };

  const containerStyles = {
    maxWidth: '800px',
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
    maxWidth: '500px',
    margin: '0 auto'
  };

  const cardStyles = {
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden'
  };

  const cardHeaderStyles = {
    padding: '24px',
    borderBottom: '1px solid #e2e8f0',
    background: '#f8fafc'
  };

  const cardBodyStyles = {
    padding: '32px'
  };

  const formGroupStyles = {
    marginBottom: '24px'
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#1e293b',
    fontSize: '0.875rem'
  };

  const inputStyles = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    backgroundColor: '#ffffff'
  };

  const textareaStyles = {
    ...inputStyles,
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit'
  };

  const selectStyles = {
    ...inputStyles,
    cursor: 'pointer'
  };

  const btnStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 32px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    width: '100%'
  };

  const btnPrimaryStyles = {
    ...btnStyles,
    backgroundColor: '#2563eb',
    color: 'white'
  };

  const btnSecondaryStyles = {
    ...btnStyles,
    backgroundColor: 'transparent',
    color: '#64748b',
    border: '1px solid #e2e8f0',
    marginBottom: '16px'
  };

  const formActionsStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '32px'
  };

  const backBtnStyles = {
    marginBottom: '24px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    backgroundColor: '#ffffff',
    color: '#1e293b',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '0.875rem'
  };

  const h2Styles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: 0,
    color: '#1e293b',
    fontSize: '1.25rem',
    fontWeight: '600'
  };

  return (
    <div style={containerStyles}>
      <button 
        style={backBtnStyles}
        onClick={() => navigate("/products")}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#f8fafc';
          e.target.style.borderColor = '#cbd5e1';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ffffff';
          e.target.style.borderColor = '#e2e8f0';
        }}
      >
        ← Back to Products
      </button>

      <div style={headerStyles}>
        <h1 style={titleStyles}>Add New Product</h1>
        <p style={subtitleStyles}>
          Create a new product by filling out the form below with all the required details
        </p>
      </div>

      <div style={cardStyles}>
        <div style={cardHeaderStyles}>
          <h2 style={h2Styles}>
            ➕ Product Information
          </h2>
        </div>
        
        <div style={cardBodyStyles}>
          <form onSubmit={handleSubmit(CreateProductHandler)}>
            <div style={formGroupStyles}>
              <label htmlFor="image" style={labelStyles}>Product Image URL *</label>
              <input 
                {...register("image", { required: "Image URL is required" })} 
                type="url" 
                id="image"
                placeholder="https://example.com/product-image.jpg"
                style={inputStyles}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.boxShadow = '0 0 0 3px rgb(37 99 235 / 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={formGroupStyles}>
              <label htmlFor="title" style={labelStyles}>Product Title *</label>
              <input 
                {...register("title", { required: "Title is required" })} 
                type="text" 
                id="title"
                placeholder="Enter a descriptive product title"
                style={inputStyles}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.boxShadow = '0 0 0 3px rgb(37 99 235 / 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={formGroupStyles}>
              <label htmlFor="price" style={labelStyles}>Price (USD) *</label>
              <input 
                {...register("price", { 
                  required: "Price is required",
                  min: { value: 0.01, message: "Price must be greater than 0" }
                })} 
                type="number" 
                step="0.01"
                id="price"
                placeholder="0.00"
                style={inputStyles}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.boxShadow = '0 0 0 3px rgb(37 99 235 / 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={formGroupStyles}>
              <label htmlFor="description" style={labelStyles}>Product Description *</label>
              <textarea
                {...register("description", { required: "Description is required" })}
                id="description"
                placeholder="Provide a detailed description of the product, its features, and benefits..."
                rows="5"
                style={textareaStyles}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.boxShadow = '0 0 0 3px rgb(37 99 235 / 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              ></textarea>
            </div>

            <div style={formGroupStyles}>
              <label htmlFor="category" style={labelStyles}>Category *</label>
              <select 
                {...register("category", { required: "Category is required" })} 
                id="category"
                style={selectStyles}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.boxShadow = '0 0 0 3px rgb(37 99 235 / 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="">Select a category</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>

            <div style={formActionsStyles}>
              <button 
                type="button"
                style={btnSecondaryStyles}
                onClick={() => reset()}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8fafc';
                  e.target.style.borderColor = '#cbd5e1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = '#e2e8f0';
                }}
              >
                🔄 Reset Form
              </button>
              
              <button 
                type="submit" 
                style={btnPrimaryStyles}
                disabled={isSubmitting}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#1d4ed8';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {isSubmitting ? '⏳ Creating Product...' : '✨ Create Product'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
