import React, { useContext } from "react";
import "./relatedpd.css";
import Item from "../items/items";
import { ShopContext } from "../../context/shopContext";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ category }) => {
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();

  const visibleProducts = all_product
    .filter((item) => item.category === category)
    .slice(0, 4);

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

      <div className="shp-ctg-loadmore" onClick={handleExploreMore}>
        Explore More
      </div>
    </div>
  );
};

export default RelatedProducts;
