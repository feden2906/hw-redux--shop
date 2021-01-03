import React from "react";
import './ProductItem.css'

export const ProductItem = ({
                              isAddedToCart, isAddedToWishlist, onAddToCart, onAddToWishList, product,
                              product: {id, title, price, description}
                            }) => {
  return (
      <div>
        <h5>{id}</h5>
        <h5>{title}</h5>
        <h5>{price}</h5>
        <h5>{description}</h5>
        <button
            className={isAddedToCart ? 'cartBtn cartRemove' : 'cartBtn'}
            onClick={() => onAddToCart(product)}
        >
          {isAddedToCart ? 'remove from cart' : 'add to cart'}
        </button>
        <button
            className={isAddedToWishlist ? 'cartBtn cartRemove' : 'cartBtn'}
            onClick={() => onAddToWishList(product)}
        >
          {isAddedToWishlist ? "remove from wishlist" : "add to wishlist"}
        </button>
        <hr/>
      </div>
  );
};
