import {configureStore} from '@reduxjs/toolkit';
import products from './slices/producs.slice';
import isLoading from './slices/isLoading.slice';

export default configureStore({
    reducer:{
        products,
        isLoading
    }
})