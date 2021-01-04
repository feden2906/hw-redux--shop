import {TOGGLE_ITEM_IN_CART} from "../action-types";

const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  const {cart} = state
  const {type, payload} = action
  switch (type) {
    case TOGGLE_ITEM_IN_CART: {
      const updatedCart = cart.filter(({id}) => id !== payload.id)

      if (updatedCart.length === cart.length) {
        updatedCart.push(payload)
      }
      return {...state, cart: updatedCart}
    }
    default: {
      return state;
    }
  }
};

