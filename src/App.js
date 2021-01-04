import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {setProducts} from "./redux";
import "./styles.css";

// react devtools extension
// redux devtools extension
//
// install all libs
// redux, react-redux, redux-thunk
//
// prepare proper redux structure
// store
// reducers
// action-types
// action-creators
//
// create basic components
// header
// productList
// productItem
//
// products
// cart
// wishlist

export default function App() {
  const {cart, wishlist, products} = useSelector(
      ({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({cart, wishlist, products})
  );

  const dispatch = useDispatch();

  // const fetchData = useCallback(async () => {
  //   const response = await productService.getProducts();
  //   const json = await response.json();
  //   dispatch(setProducts(json));
  // }, []);

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  return (
      <div className="App">
        <Header/>
        <ProductList/>
      </div>
  );
}
