import React from "react";
import './Header.css'
import { useSelector } from "react-redux";
import {useMemo} from "react";

export const Header = () => {
  const { cart, wishlist } = useSelector(({ cart: { cart }, wishlist: { wishlist } }) => ({wishlist, cart}));

  const multiplyCart = useMemo(() => {
    const cartClone = [...cart]
    return cartClone.reduce((acc, item) => {
      const {price} = item;
      return acc + price
    }, 0)
  }, [cart])

  const multiplyWishlist = useMemo(() => {
    const wishlistClone = [...wishlist]
    return wishlistClone.reduce((acc, item) => {
      const {price} = item;
      return acc + price
    }, 0)
  }, [wishlist])

  return (
    <header className="d-flex justify-between align-center">
      <h2>Hello in nedoshop</h2>

      <div className="d-flex justify-between">
        <div className="mx-10 jn-tooltip" data-title={`Загальна сума : ${multiplyCart} $`}>
          cart: {cart.length}
        </div>
        <div className="mx-10 jn-tooltip" data-title={`Загальна сума : ${multiplyWishlist} $`}>
          wishlist: {wishlist.length}
        </div>
      </div>
    </header>
  );
};
