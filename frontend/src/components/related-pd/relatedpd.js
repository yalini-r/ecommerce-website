import React, { useContext, useState } from "react";
import "./relatedpd.css";
import Item from "../items/items";
import { ShopContext } from "../../context/shopContext";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ category }) => {
  const { all_product } = useContext(ShopContext);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  // Filter products based on the category
  const relatedProducts = all_product.filter(
    (item) => item.category === category
  );

  // Show only first 4 products initially
  const visibleProducts = showAll
    ? relatedProducts
    : relatedProducts.slice(0, 4);

  // Navigate to the correct ShopCategory page
  const handleExploreMore = () => {
    if (category === "men") {
      navigate("/mens");
    } else if (category === "women") {
      navigate("/womens");
    } else if (category === "kid") {
      navigate("/kids");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="rpd">
      <h1>Related Products</h1>
      <hr />
      <div className="rpd-items">
        {visibleProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {/* Explore More Button */}
      <div className="shp-ctg-loadmore" onClick={handleExploreMore}>
        Explore More
      </div>
    </div>
  );
};

export default RelatedProducts;
