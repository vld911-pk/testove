import { combineReducers } from "redux";
import productReducer from './productReducer';
import bucketReducer from "./bucketReducer";

const rootReducer = combineReducers({
   productList: productReducer,
   bucket: bucketReducer,
});

export default rootReducer;