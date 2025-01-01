import {configureStore} from '@reduxjs/toolkit';
import lotReducer from './lotSlice';

const store = configureStore({
    reducer: {
        lot: lotReducer,
    },

});

export default store