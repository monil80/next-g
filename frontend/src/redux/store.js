import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";
import { userReducer } from "./reducers/userReducer"
//import axios from "axios";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  user: userReducer,
});

const middleware = [thunk]; 

  
//  let cartItemsInLocalStorage =localStorage.getItem("cart")
//      ? JSON.parse(localStorage.getItem("cart"))
//      : [];
let cartItemsInLocalStorage=[]


const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
