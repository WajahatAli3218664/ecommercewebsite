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
          <option value="Mens Accessories">Mens Accessories</option>
          <option value="Bridal Wear">Bridal Wear</option>
          <option value="Mens T-shirt">Mens T-shirt</option>
          <option value="Athletic Shoes">Athletic Shoes</option>
          <option value="Jewelry">Jewelry</option>
        </select>
      </div>

      <div className="productGrid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="productCard">
            <img src={product.image} alt={product.name} className="productImage" />
            <h3 className="productName">{product.name}</h3>
            <p className="productCategory">{product.category}</p>
            <p className="productPrice">
              {product.price} <span className="originalPrice">{product.originalPrice}</span>
            </p>
            <div className="productRating">
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            </div>
            <button
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
              className="addToCartButton"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart section */}
      <div className="p-4 max-w-xl mx-auto mt-16">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
            <h1 className="text-lg font-bold">Shopping Cart</h1>
            <span className="text-gray-600">({cart.length} items)</span>
          </div>
          <div className="p-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <img className="h-16 w-16 object-contain rounded-lg mr-4" src={item.image} alt={item.name} />
                  <div className="flex-1">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <span className="text-gray-600">{item.price}</span>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-600 hover:text-red-500">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 13H5v-2h14v2z" />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
          {cart.length > 0 && (
            <div className="px-4 py-3 bg-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Total:</span>
                <span className="font-bold text-lg">${calculateTotalPrice()}</span>
              </div>
              <button className="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
