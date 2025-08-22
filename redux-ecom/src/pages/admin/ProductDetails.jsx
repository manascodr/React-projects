import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncUpdateProduct, asyncDeleteProduct } from "../../frontstore/actions/procuctActions";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const product = products?.find((p) => String(p.id) === String(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category
    }
  });

  const UpdateProductHandler = async (productData) => {
    try {
      await dispatch(asyncUpdateProduct(id, productData));
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const deleteHandler = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await dispatch(asyncDeleteProduct(id));
        navigate("/products");
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px'
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
    transition: 'all 0.2s ease'
  };

  const layoutStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
      gap: '24px'
    }
  };

  const cardStyles = {
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden'
  };

  const cardBodyStyles = {
    padding: '24px'
  };

  const cardHeaderStyles = {
    padding: '24px',
    borderBottom: '1px solid #e2e8f0'
  };

  const productImageStyles = {
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    borderRadius: '12px 12px 0 0',
    background: '#f1f5f9'
  };

  const imgStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  };

  const productTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '8px',
    lineHeight: '1.3'
  };

  const productPriceStyles = {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#2563eb',
    marginBottom: '16px'
  };

  const productDescriptionStyles = {
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '24px'
  };

  const categoryBadgeStyles = {
    display: 'inline-block',
    padding: '4px 16px',
    background: '#f59e0b',
    color: 'white',
    borderRadius: '16px',
    fontSize: '0.875rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: '24px'
  };

  const btnStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '8px 24px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none'
  };

  const btnPrimaryStyles = {
    ...btnStyles,
    backgroundColor: '#2563eb',
    color: 'white'
  };

  const btnDangerStyles = {
    ...btnStyles,
    backgroundColor: '#ef4444',
    color: 'white'
  };

  const btnLgStyles = {
    width: '100%',
    fontSize: '1.1rem',
    padding: '16px 24px'
  };

  const formGroupStyles = {
    marginBottom: '24px'
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#1e293b'
  };

  const inputStyles = {
    width: '100%',
    padding: '8px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease'
  };

  const textareaStyles = {
    ...inputStyles,
    resize: 'vertical',
    minHeight: '100px'
  };

  const formActionsStyles = {
    display: 'flex',
    gap: '16px',
    marginTop: '32px'
  };

  const h2Styles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: 0,
    color: '#1e293b',
    fontSize: '1.25rem'
  };

  if (!product) {
    return (
      <div style={containerStyles}>
        <div style={{ textAlign: 'center', padding: '48px' }}>
          <h2 style={{ color: '#64748b', marginBottom: '24px' }}>Product not found</h2>
          <button style={btnPrimaryStyles} onClick={() => navigate("/products")}>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyles}>
      <div>
        <button 
          style={backBtnStyles}
          onClick={() => navigate("/products")}
        >
          ← Back to Products
        </button>

        <div style={window.innerWidth > 1024 ? layoutStyles : { display: 'block' }}>
          {/* Product Display Section */}
          <div>
            <div style={cardStyles}>
              <div style={productImageStyles}>
                <img src={product?.image} alt={product?.title} style={imgStyles} />
              </div>
              <div style={cardBodyStyles}>
                <h1 style={productTitleStyles}>{product?.title}</h1>
                <div style={productPriceStyles}>${product?.price}</div>
                <p style={productDescriptionStyles}>{product?.description}</p>
                <div>
                  <span style={categoryBadgeStyles}>{product?.category}</span>
                </div>
                <button style={{ ...btnPrimaryStyles, ...btnLgStyles }}>
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Admin Edit Section */}
          <div style={{ marginTop: window.innerWidth <= 1024 ? '24px' : '0' }}>
            <div style={cardStyles}>
              <div style={cardHeaderStyles}>
                <h2 style={h2Styles}>
                  ✏️ Update Product
                </h2>
              </div>
              <div style={cardBodyStyles}>
                <form onSubmit={handleSubmit(UpdateProductHandler)}>
                  <div style={formGroupStyles}>
                    <label htmlFor="image" style={labelStyles}>Product Image URL</label>
                    <input 
                      {...register("image", { required: "Image URL is required" })} 
                      type="url" 
                      id="image"
                      placeholder="https://example.com/image.jpg"
                      style={inputStyles}
                    />
                  </div>

                  <div style={formGroupStyles}>
                    <label htmlFor="title" style={labelStyles}>Product Title</label>
                    <input 
                      {...register("title", { required: "Title is required" })} 
                      type="text" 
                      id="title"
                      placeholder="Enter product title"
                      style={inputStyles}
                    />
                  </div>

                  <div style={formGroupStyles}>
                    <label htmlFor="price" style={labelStyles}>Price ($)</label>
                    <input 
                      {...register("price", { 
                        required: "Price is required",
                        min: { value: 0, message: "Price must be positive" }
                      })} 
                      type="number" 
                      step="0.01"
                      id="price"
                      placeholder="0.00"
                      style={inputStyles}
                    />
                  </div>

                  <div style={formGroupStyles}>
                    <label htmlFor="description" style={labelStyles}>Description</label>
                    <textarea
                      {...register("description", { required: "Description is required" })}
                      id="description"
                      placeholder="Enter product description"
                      rows="4"
                      style={textareaStyles}
                    ></textarea>
                  </div>

                  <div style={formGroupStyles}>
                    <label htmlFor="category" style={labelStyles}>Category</label>
                    <select 
                      {...register("category", { required: "Category is required" })} 
                      id="category"
                      style={inputStyles}
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
                      type="submit" 
                      style={{ ...btnPrimaryStyles, flex: 1 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Updating...' : 'Update Product'}
                    </button>
                    
                    <button 
                      type="button"
                      style={{ ...btnDangerStyles, flex: 1 }}
                      onClick={deleteHandler}
                    >
                      🗑️ Delete Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
