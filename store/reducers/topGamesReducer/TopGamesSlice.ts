import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTopGames } from "./TopGamesActionCreator";
import { ITopGamesType } from "@/types/ITopGamesType";

//delete in production!
const topGames: ITopGamesType[] = [
  {
    id: 1,
    imageSrc: "/images/top-games/hive.png",
    title: "The Hive",
    rating: 9.8,
    payout: "95",
    author: "by RTG",
  },
  {
    id: 2,
    imageSrc: "/images/top-games/twister.png",
    title: "Twister Wilds",
    rating: 9.8,
    payout: "95",
    author: "by RTG",
  },
  {
    id: 3,
    imageSrc: "/images/top-games/wolwes.png",
    title: "Howling Wolves",
    rating: 9.8,
    payout: "95",
    author: "by RTG",
  },
  {
    id: 4,
    imageSrc: "/images/top-games/rice-of-egioit.png",
    title: "Rise of Egypt Deluxe",
    rating: 9.8,
    payout: "95",
    author: "by Playson",
  },
  {
    id: 5,
    imageSrc: "/images/top-games/bandits.png",
    title: "Clash Bandits 3",
    rating: 9.8,
    payout: "95",
    author: "by RTG",
  },
  {
    id: 6,
    imageSrc: "/images/top-games/frog.png",
    title: "Frog Fortunes",
    rating: 9.8,
    payout: "95",
    author: "by RTG",
  },
  {
    id: 7,
    imageSrc: "/images/top-games/icewin.png",
    title: "IC Wins",
    rating: 9.8,
    payout: "95",
    author: "by RTG",
  },
];

const initialState = {
  topGames,
  isLoading: false,
  error: "",
};

export const topCasinoSlice = createSlice({
  name: "topGames",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopGames.fulfilled.type]: (
      state,
      action: PayloadAction<ITopGamesType[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.topGames = action.payload;
    },

    [fetchTopGames.pending.type]: (state) => {
      state.isLoading = true;
    },

    [fetchTopGames.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default topCasinoSlice.reducer;
