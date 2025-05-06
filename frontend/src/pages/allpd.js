import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import Items from '../components/items/items';
import './css/allpd.css';

const AllProducts = () => {
  const { all_product } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default: Show all

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? all_product 
    : all_product.filter(item => item.category === selectedCategory);

  return (
    <div className='all-products-page'>
      <h1>All Products</h1>
      <hr />

      {/* Dropdown for category selection */}
      <div className="category-filter">
        <label>Filter by Category:</label>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kids</option>
        </select>
      </div>

      {/* Product Display */}
      <div className='all-products-grid'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>

      
    </div>
  );
};

export default AllProducts;
