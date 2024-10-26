"use client";

import React, { useState } from 'react';

// Product data
const productData = [
  { id: 1, name: 'Jacket', category: 'MEN', price: '$696', originalPrice: '$995', image: '/images/jacketone.jpg', rating: 4 },
  { id: 2, name: 'Wrist Watch', category: 'Watches', price: '$35.00', originalPrice: '$55.00', image: '/images/watchone.jpg', rating: 3 },
  { id: 3, name: 'Leather Wallet', category: 'Accessories', price: '$236', originalPrice: '$295', image: '/images/walletone.jpg', rating: 5 },
  { id: 4, name: 'Perfume', category: 'Fragrance', price: '$10.99', originalPrice: '$13.99', image: '/images/perfumeone.jpg', rating: 4 },
  { id: 5, name: 'Smart Watch', category: 'Mens Accessories', price: '$64.00', originalPrice: '$80.00', image: '/images/watchtwo.jpg', rating: 4 },
  { id: 6, name: 'Golden Glam Heels', category: 'Bridal Wear', price: '$448', originalPrice: '$598', image: '/images/party.jpg', rating: 4 },
  { id: 7, name: 'OTC Black T-shirt', category: 'Mens T-shirt', price: '$27.99', originalPrice: '$32.99', image: '/images/shirttwo.jpg', rating: 5 },
  { id: 8, name: 'Sports Shoes', category: 'Athletic Shoes', price: '$60.00', originalPrice: '$80.00', image: '/images/sportsone.jpg', rating: 4 },
  { id: 9, name: 'Grandeur Necklace', category: 'Jewelry', price: '$60.00', originalPrice: '$80.00', image: '/images/necklace.jpg', rating: 4 },
  { id: 10, name: 'Monet Bangle Bracelet', category: 'Jewelry', price: '$50.00', originalPrice: '$80.00', image: '/images/braceone.jpg', rating: 4 },
];

const NewProducts: React.FC = () => {
  const [cart, setCart] = useState<{ id: number, name: string, price: string, image: string }[]>([]);
  const [filter, setFilter] = useState<string>('All');

  // Add to cart functionality
  const addToCart = (product: { id: number, name: string, price: string, image: string }) => {
    setCart([...cart, product]);
    alert(`Product ${product.name} added to cart!`);
  };

  // Remove from cart functionality
  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Filter products by category
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  // Filter products based on the selected category
  const filteredProducts = filter === 'All' ? productData : productData.filter((product) => product.category === filter);

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <div className="newProductsSection">
      <h2 className="newProductsHeading">New Products</h2>

      {/* Filter dropdown */}
      <div className="filterWrapper">
        <label htmlFor="categoryFilter" className="filterLabel">Filter by Category:</label>
        <select id="categoryFilter" value={filter} onChange={handleFilterChange} className="filterDropdown">
          <option value="All">All</option>
          <option value="MEN">MEN</option>
          <option value="Watches">Watches</option>
          <option value="Accessories">Accessories</option>
          <option value="Fragrance">Fragrance</option>
          <option value="Bridal Wear">Bridal Wear</option>
          <option value="Mens T-shirt">Mens T-shirt</option>
          <option value="Athletic Shoes">Athletic Shoes</option>
          <option value="Jewelry">Jewelry</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="productCard">
            <img src={product.image} alt={product.name} className="productImage" />
            <h3 className="productName">{product.name}</h3>
            <p className="productPrice">{product.price} <span className="originalPrice">{product.originalPrice}</span></p>
            <p className="productRating">Rating: {product.rating} ⭐</p>
            <button className="addToCartButton" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cartSummary">
        <h2>Cart Summary</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cartItem">
              {item.name} - {item.price}
              <button className="removeFromCartButton" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
    </div>
  );
};

export default NewProducts;
