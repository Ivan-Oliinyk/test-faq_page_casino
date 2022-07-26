import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITopCasino } from "@/types/ITopCasino";
import { fetchTopCasino } from "./ActionCreator";

//delete in production!
const topCasinos = [
  {
    id: 1,
    imageSrc: "/images/top-casino/ozwin.png",
    title: "OZWIN Casino",
    rating: 9.8,
    payout: "95%",
  },
  {
    id: 2,
    imageSrc: "/images/top-casino/hellspin.png",
    title: "HELL SPIN Casino",
    rating: 9.8,
    payout: "95%",
  },
  {
    id: 3,
    imageSrc: "/images/top-casino/fairGo.png",
    title: "FAIR GO Casino",
    rating: 9.8,
    payout: "95%",
  },
  {
    id: 4,
    imageSrc: "/images/top-casino/bizzo.png",
    title: "BIZZO Casino",
    rating: 9.8,
    payout: "95%",
  },
  {
    id: 5,
    imageSrc: "/images/top-casino/ignition.png",
    title: "IGNITION Casino",
    rating: 9.8,
    payout: "95%",
  },
  {
    id: 6,
    imageSrc: "/images/top-casino/uptown.png",
    title: "UPTOWN POKIES Casino",
    rating: 9.8,
    payout: "95%",
  },
  {
    id: 7,
    imageSrc: "/images/top-casino/lucky.png",
    title: "lucky tiger Casino",
    rating: 9.8,
    payout: "95%",
  },
];

const initialState = {
  topCasinos,
  isLoading: false,
  error: "",
};

export const topCasinoSlice = createSlice({
  name: "topCasino",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopCasino.fulfilled.type]: (
      state,
      action: PayloadAction<ITopCasino[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.topCasinos = action.payload;
    },

    [fetchTopCasino.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchTopCasino.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default topCasinoSlice.reducer;
