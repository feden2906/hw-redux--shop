import React from "react";
import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishList} from "../../redux";

export const ProductList = () => {
  const dispatch = useDispatch();
  const {cart, wishlist, products} = useSelector(
      ({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart, wishlist, products
      })
  );

  const onAddToCart = (product) => {
    dispatch(toggleItemInCart(product));
  };
  const onAddToWishList = (product) => {
    dispatch(toggleItemInWishList(product));
  };

  return (
      <div>
        {products.map((product) => (
            <ProductItem
                isAddedToWishlist={!!wishlist.find(({id}) => id === product.id)}
                isAddedToCart={!!cart.find(({id}) => id === product.id)}
                onAddToCart={onAddToCart}
                onAddToWishList={onAddToWishList}
                key={product.id}
                product={product}
            />
        ))}
      </div>
  );
};
