import { GET_PRODUCT_LIST, SET_ITEM_TO_BUCKET, BUCKET } from './actionTypes';

const productsAction = (val) => {
    return {
        type: GET_PRODUCT_LIST,
        payload: val,   
    }
}

const bucketAction = (val) => {
    return {
        type: BUCKET,
        payload: val,
    }
}

const productToBucketAction = (val) => {
    return {
        type: SET_ITEM_TO_BUCKET,
        payload: val,
    }
}

export { productsAction, productToBucketAction, bucketAction };