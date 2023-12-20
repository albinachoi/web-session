import {configureStore} from "@reduxjs/toolkit";
import modalReducer from './modalSlice'
import productsReducer from './productsSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        products: productsReducer
    },
})