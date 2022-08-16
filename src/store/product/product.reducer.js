// Note: Do not update/change the initial state
import * as ActionTypes from './product.types'
const productInitalState = {
	loading: false,
	error: false,
	data: [],
};

const reduceProductSuccess = (state, action) => {
	return { ...state, data: action.payload }
}

export const productReducer = (state = productInitalState, action) => {
	switch (action.type) {
		case ActionTypes.GET_PRODUCTS_SUCCESS:
			reduceProductSuccess(state, action);
			break;
		default:
			return state;
	}
};

