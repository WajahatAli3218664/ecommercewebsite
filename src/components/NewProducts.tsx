"use client";

import React, { useState } from 'react';

// Updated product data
const productData = [
  {
    id: 1,
    name: 'Jacket',
    category: 'MEN',
    price: '$696',
    originalPrice: '$995',
    image: '/images/jacketone.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'Wrist Watch',
    category: 'Watches',
    price: '$35.00',
    originalPrice: '$55.00',
    image: '/images/watchone.jpg',
    rating: 3,
  },
  {
    id: 3,
    name: 'Leather Wallet',
    category: 'Accessories',
    price: '$236',
    originalPrice: '$295',
    image: '/images/walletone.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Perfume',
    category: 'Fragrance',
    price: '$10.99',
    originalPrice: '$13.99',
    image: '/images/perfumeone.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'Smart Watch',
    category: 'Mens Accessories',
    price: '$64.00',
    originalPrice: '$80.00',
    image: '/images/watchtwo.jpg',
    rating: 4,
  },
  {
    id: 6,
    name: 'Golden Glam Heels',
    category: 'Bridal Wear',
    price: '$448',
    originalPrice: '$598',
    image: '/images/party.jpg',
    rating: 4,
  },
  {
    id: 7,
    name: 'OTC Black T-shirt',
    category: 'Mens T-shirt',
    price: '$27.99',
    originalPrice: '$32.99',
    image: '/images/shirttwo.jpg',
    rating: 5,
  },
  {
    id: 8,
    name: 'Sports Shoes',
    category: 'Athletic Shoes',
    price: '$60.00',
    originalPrice: '$80.00',
    image: '/images/sportsone.jpg',
    rating: 4,
  },
  {
    id: 9,
    name: 'Grandeur Necklace',
    category: 'Jewelry',
    price: '$60.00',
    originalPrice: '$80.00',
    image: '/images/necklace.jpg',
    rating: 4,
  },
  {
    id: 10,
    name: 'Monet Bangle Bracelet',
    category: 'Jewelry',
    price: '$50.00',
    originalPrice: '$80.00',
    image: '/images/braceone.jpg',
    rating: 4,
  },
];

const NewProducts: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
    alert(`Product ${id} added to cart!`);
  };

  return (
    <div className="newProductsSection">
      <h2 className="newProductsHeading">New Products</h2>
      <div className="productGrid">
        {productData.map((product) => (
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
              onClick={() => addToCart(product.id)}
              className="addToCartButton"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;                                                                                 