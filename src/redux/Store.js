import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./slices/CartSlice"
import CategoryScile from "./slices/CategorySlice"
import SearcSlice from "./slices/SearchSlice"
const Store=configureStore({
    reducer:{
        cart: CartSlice,
        category: CategoryScile,
        search:SearcSlice,
    },
});
export default Store;