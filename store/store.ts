import { configureStore, combineReducers } from "@reduxjs/toolkit";
import topCasinoReducer from "./reducers/topCasinoReducer/TopCasinoSlice";
import faqBlockReducer from "./reducers/faqReducer/FaqSlice";
import topBonusesReducer from "./reducers/topBonusesReducer/TopBonusesSlice";
import topGamesReducer from "./reducers/topGamesReducer/TopGamesSlice";

const rootReducer = combineReducers({
  topCasinoReducer,
  faqBlockReducer,
  topBonusesReducer,
  topGamesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
