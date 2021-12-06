// import { combineReducers } from "redux";
import { SET_ITEM_TO_BUCKET, BUCKET } from '../actions/actionTypes';

const bucketReducer = (state = {}, { type, payload = {} }) => {
    if (type === SET_ITEM_TO_BUCKET) {
        return { ...state, bucket: { ...payload } } 
    } else if (type === BUCKET) {
        console.log({ payload });
        return {...state, bucket: {...payload}}
    }
    return state;
}


export default bucketReducer;
