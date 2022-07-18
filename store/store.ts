import { configureStore, combineReducers } from "@reduxjs/toolkit";
import topCasinoReducer from "./reducers/TopCasinoSlice";

const rootReducer = combineReducers({ topCasinoReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
