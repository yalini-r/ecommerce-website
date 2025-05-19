
import React, { useState } from "react";
import "./checkout.css";

const Checkout = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="checkout">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="checkout-container">
          <h2>Checkout</h2>
          <div class="checkout-fields">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Shipping Address" required />
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="MM/YY" required />
          <input type="text" placeholder="CVV" required />
          </div>
         
          <button type="submit">Place Order</button>
        </form>
      ) : (
        <div className="confirmation">
          <h2>🎉 Order Confirmed!</h2>
          <p>Thank you for your purchase. Your order will be shipped soon.</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
