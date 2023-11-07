import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSlice';
import postsReduceer from '../features/postsSlice';
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReduceer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})