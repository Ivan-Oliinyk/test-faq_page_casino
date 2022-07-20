import { configureStore, combineReducers } from "@reduxjs/toolkit";
import topCasinoReducer from "./reducers/topCasionReducer/TopCasinoSlice";
import faqBlockReducer from "./reducers/faqReducer/FaqSlice";
import topBonusesReducer from "./reducers/topBonuseReducer/TopBonusesSlice";

const rootReducer = combineReducers({
  topCasinoReducer,
  faqBlockReducer,
  topBonusesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
