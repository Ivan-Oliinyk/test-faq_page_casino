import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITopGamesType } from "@/types/ITopGamesType";

export const fetchTopGames = createAsyncThunk(
  "topGames/fetchAll",
  async (_, thunkAPI) => {
    try {
      const UrlEndpoint = ""; //write you endpoint in UrlEndpoint  for example(https://jsonplaceholder.typicode.com/users)

      const response = await axios.get<ITopGamesType[]>(UrlEndpoint);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to load data");
    }
  }
);
