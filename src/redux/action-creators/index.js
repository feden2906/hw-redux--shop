import {
  SET_PRODUCTS,
  TOGGLE_ITEM_IN_WISHLIST,
  TOGGLE_ITEM_IN_CART
} from "../action-types";
import { services } from "../../services";

const { productService } = services;

export const setProducts = () => async (dispatch) => {
  const response = await productService.getProducts();
  const json = await response.json();

  dispatch({ type: SET_PRODUCTS, payload: json });
};

export const toggleItemInCart = (product) => ({
  type: TOGGLE_ITEM_IN_CART,
  payload: product
});
export const toggleItemInWishList = (product) => ({
  type: TOGGLE_ITEM_IN_WISHLIST,
  payload: product
});
