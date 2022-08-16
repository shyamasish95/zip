// Product actions here
import axios from "axios";
import * as ActionTypes from "./product.types";

export const fetchProducts = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:8080/products')
		dispatch({
			type: ActionTypes.GET_PRODUCTS_SUCCESS,
			payload: res.data
		})

		return res.data
	} catch (e) {
		console.log(e.message)
	}
}