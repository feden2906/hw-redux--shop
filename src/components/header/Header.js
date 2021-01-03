import React from "react";
import './Header.css'
import { useSelector } from "react-redux";

export const Header = () => {
  const { cart, wishlist } = useSelector(
    ({ cart: { cart }, wishlist: { wishlist } }) => ({
      wishlist,
      cart
    })
  );

  return (
    <header className="d-flex justify-between align-center">
      <h2>Hello in nedoshop</h2>

      <div className="d-flex justify-between">
        <div className="mx-10 jn-tooltip" data-title={"cart"}>
          cart: {cart.length}
        </div>
        <div className="mx-10 jn-tooltip" data-title={"wishlist"}>
          wishlist: {wishlist.length}
        </div>
      </div>
    </header>
  );
};
