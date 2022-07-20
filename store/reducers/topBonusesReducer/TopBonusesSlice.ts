import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBonusCardType } from "../../../types/IBonusCardType";
import { fetchTopBonuses } from "./TopBonusesActionCreator";

//delete in production!
const topBonuses: IBonusCardType[] = [
  {
    id: 1,
    imageSrc: "/images/top-casino/ozwin.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: true,
  },
  {
    id: 2,
    imageSrc: "/images/top-casino/fairGo.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: true,
  },
  {
    id: 3,
    imageSrc: "/images/top-casino/hellspin.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: false,
  },
  {
    id: 4,
    imageSrc: "/images/top-casino/uptown.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: true,
  },
  {
    id: 5,
    imageSrc: "/images/top-casino/ignition.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: false,
  },
  {
    id: 6,
    imageSrc: "/images/top-casino/lucky.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: false,
  },
  {
    id: 7,
    imageSrc: "/images/top-casino/bizzo.png",
    freeSpins: 100,
    percentUp: "400%",
    bonus: 4000,
    isExclusive: true,
  },
];

const initialState = {
  topBonuses,
  isLoading: false,
  error: "",
};

export const topCasinoSlice = createSlice({
  name: "topBonuses",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopBonuses.fulfilled.type]: (
      state,
      action: PayloadAction<IBonusCardType[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.topBonuses = action.payload;
    },

    [fetchTopBonuses.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchTopBonuses.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default topCasinoSlice.reducer;
