import React, { useContext } from "react";
import "./css/shp-ctg.css";
import { ShopContext } from "../context/shopContext";
// import drop_down_icon from '../components/assets/dropdown_icon.png';
import Items from "../components/items/items";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shp-ctg">
      <img className="shp-ctg-bnr" src={props.bnr} alt="" />

      <div className="shp-ctg-indexsort">
        <p>
          <b>Showing 1-12</b> out of 36 product{" "}
        </p>
      </div>

      <div className=" shp-ctg-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                Key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
