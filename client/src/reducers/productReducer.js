import { GET_PRODUCT_LIST } from '../actions/actionTypes';

const productReducer = (state = {}, { type, payload }) => {
    if (type === GET_PRODUCT_LIST) {
        return { ...state, products: [...payload] }
    }
    return state;
}

export default productReducer;