import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import signupReducer from './features/signup/signupStepSlice';
import authReducer from './features/auth/authSlice';
import allResourcesReducer from './features/allResources/allResourceSlice';
import topicsSlice from './features/topics/topicsSlice';

const rootReducer = combineReducers({
  signup: signupReducer,
  authData: authReducer,
  allResources: allResourcesReducer,
  allTopics: topicsSlice
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
  });
};

export const store = makeStore();
export const persistor = persistStore(store);
