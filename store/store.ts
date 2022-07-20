import { configureStore, combineReducers } from "@reduxjs/toolkit";
import topCasinoReducer from "./reducers/TopCasion/TopCasinoSlice";
import faqBlockReducer from "./reducers/faqReducer/FaqSlice";

const rootReducer = combineReducers({ topCasinoReducer, faqBlockReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
