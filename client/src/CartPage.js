import { Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartItem from "./CartItem";
import "./CartPage.css";
import EmptyCart from "./EmptyCart";
import SubTotal from "./SubTotal";

const CartPage = () => {
  const [updated, setUpdated] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const fetchCartItems = async () => {
    const id = localStorage.getItem("userId");

    console.log("cartpage :", id);

    if (id) {
      try {
        const response = await axios.get(
          `http://localhost:5000/cartitem/${id}`
        );
        setCartItems(response.data);
        setUpdated(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [updated]);

  const updateCart = () => {
    setUpdated(true);
  };

  return (
    <div>
      <Header />
      <>
        {cartItems.length ? (
          <div className="cartPage_background">
            <h2 className="cart_head">Shopping Cart</h2>
            <p className="price_heading">Price</p>
            <Divider variant="middle" />
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                detailUrl={item.detailUrl}
                title={item.title}
                cost={item.cost}
                id={item._id}
                updateCart={updateCart}
              />
            ))}
            <SubTotal/>
          </div>
          
        ) : (
          <EmptyCart />
        )}
      </>

      <Footer />
    </div>
  );
};

export default CartPage;
