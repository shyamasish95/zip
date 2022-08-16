// TODO: use this store variable to create a store.
import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { productReducer } from './product/product.reducer';
import { authReducer } from './auth/auth.reducer';
import { cartReducer } from './cart/cart.reducer';
import thunk from "redux-thunk";

const allreducers = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	product: productReducer,
})
export const store = legacy_createStore(allreducers, applyMiddleware(thunk))

// Note: use cart, product and auth as keys
// /export const store = {};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
	window.store = store;
}
