import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from '../providers/rickAndMortyApi';

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});
