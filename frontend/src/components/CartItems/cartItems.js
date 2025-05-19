import React, { useContext } from "react";
import "./cartItems.css";
import { ShopContext } from "../../context/shopContext";
import rmv_icon from "../assets/cart_cross_icon.png";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItem, removeCart } =
    useContext(ShopContext);
  const navigate = useNavigate();

  // Ensure cartItem is not undefined, use fallback if necessary
  const safeCartItem = cartItem || {}; // Fallback to empty object if undefined

  return (
    <div className="cart-items">
      {all_product.map((e) => {
        // Check if cartItem[e.id] is valid
        if (safeCartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="crt-format ">
                <div className="ls">
                  <img src={e.image} alt="" className="crt-pd-icon" />
                </div>

                <div className="rs">
                  <p className="title">{e.name}</p>

                  <div className="prz">
                    <p className="np">${e.new_price}</p>
                    <p className="tp">${e.new_price * safeCartItem[e.id]}</p>
                  </div>

                  <p className="crt-quantity">{safeCartItem[e.id]}</p>

                  <img
                    className="crt-rmv-icon"
                    src={rmv_icon}
                    onClick={() => {
                      removeCart(e.id);
                    }}
                    alt="Remove item"
                  />
                </div>
              </div>
            </div>
          );
        }
        return null; // If the quantity is 0 or not found
      })}

      <hr className="hrz" />

      <div className="crt-down">
        <div className="crt-total">
          <h1>Cart Totals</h1>

          <div>
            <div className="crt-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />

            <div className="crt-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>

            <hr />

            <div className="crt-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button onClick={() => navigate("/checkout")}>
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
