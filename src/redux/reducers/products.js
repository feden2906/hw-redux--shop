import {SET_PRODUCTS} from "../action-types";

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_PRODUCTS: {
      return {...state, products: payload};
    }
    default: {
      return state;
    }
  }
};
