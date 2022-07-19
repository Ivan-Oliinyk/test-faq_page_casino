import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITopCasino } from "../../types/ITopCasino";
import { AppDispatch } from "../store";
import { topCasinoSlice } from "./TopCasinoSlice";

// export const fetchTopCasino = () => async (dispatch: AppDispatch) => {
//   try {
//     // dispatch(topCasinoSlice.actions.topCasinoFetching());
//     // need write endpoint in production !!!
//     // const response = await axios.get<ITopCasino[]>(``);
//     // dispatch(topCasinoSlice.actions.topCasinoFetchingSuccess(response.data));
//   } catch (err) {
//     // dispatch(topCasinoSlice.actions.topCasinoFetchingError(err.message));
//   }
// };

export const fetchTopCasino = createAsyncThunk(
  "topCasino/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ITopCasino[]>("");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to load data");
    }
  }
);
